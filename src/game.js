import * as THREE from 'three';
import { WORLD, AIM, PLAYER } from './config.js';
import {
  WEAPONS,
  WEAPON_DROPS,
  UPGRADES,
  RARITIES,
  RARITY_BY_KEY,
  RARITY_INDEX,
  ENEMY_TYPES
} from './data.js';
import { createEnvironment } from './environment.js';
import {
  createGunner,
  createZombie,
  animateZombie,
  createRewardCrate,
  createDrone,
  createReticle
} from './models.js';
import { ParticleField } from './particles.js';
import { TracerPool, OrbPool, BeamPool, ArcPool, RingPool } from './effects.js';
import { AudioEngine } from './audio.js';
import {
  clamp,
  damp,
  lerp,
  rand,
  randInt,
  pick,
  chance,
  formatScore,
  formatTime,
  createGlowTexture,
  createSoftTexture
} from './utils.js';

const $ = (id) => document.getElementById(id);
const TAU = Math.PI * 2;
const BODY_OFFSET = { walker: 1.05, runner: 0.95, brute: 1.35, spitter: 1.0, boss: 1.6 };
const MAX_BULLETS = 240;
const MAX_ACID = 40;
const MAX_ENEMIES = 52;
const MAX_CRATES = 1;
const DEFENSE_LINE = WORLD.defenseY;

function weightedPick(items) {
  let total = 0;
  for (const item of items) total += item.weight;
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function segmentCircle(px, py, x, y, cx, cy, radius) {
  const dx = x - px;
  const dy = y - py;
  const len2 = dx * dx + dy * dy;
  let t = 0;
  if (len2 > 0.00001) {
    t = clamp(((cx - px) * dx + (cy - py) * dy) / len2, 0, 1);
  }
  const qx = px + dx * t;
  const qy = py + dy * t;
  const dist2 = (qx - cx) ** 2 + (qy - cy) ** 2;
  return dist2 <= radius * radius ? t : -1;
}

function makeArrowPoints(x1, y1, x2, y2, jitter = 0.08) {
  const points = [];
  const segments = 7;
  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const j = i === 0 || i === segments ? 0 : (Math.random() - 0.5) * jitter * 2;
    points.push({
      x: lerp(x1, x2, t) + j,
      y: lerp(y1, y2, t) + (Math.random() - 0.5) * jitter * 2
    });
  }
  return points;
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.stage = $('stage');
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.24;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x04070b, 1);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x04070b);
    this.camera = new THREE.PerspectiveCamera(WORLD.fov, 0.5, 0.1, 90);
    this.camera.position.set(0, WORLD.cameraY, WORLD.cameraZ);
    this.camera.lookAt(0, 0.15, 0);
    this.cameraBase = new THREE.Vector3(0, WORLD.cameraY, WORLD.cameraZ);
    this.cameraTarget = new THREE.Vector3(0, 0.15, 0);
    this.aimPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.4);
    this.raycaster = new THREE.Raycaster();

    this.dom = this.collectDom();
    this.audio = new AudioEngine();
    this.time = 0;
    this.lastFrame = performance.now();
    this.state = 'menu';
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;
    this.maxEnemies = this.isTouch ? 38 : MAX_ENEMIES;
    this.pixelRatioCap = this.isTouch ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelRatioCap));

    this.env = createEnvironment(this.scene);
    this.gunner = createGunner();
    this.scene.add(this.gunner.root);

    const glow = new THREE.CanvasTexture(createGlowTexture(128));
    glow.colorSpace = THREE.SRGBColorSpace;
    const soft = new THREE.CanvasTexture(createSoftTexture(128));
    soft.colorSpace = THREE.SRGBColorSpace;
    this.fx = new ParticleField(this.scene, { max: 900, texture: glow, blending: THREE.AdditiveBlending });
    this.smoke = new ParticleField(this.scene, { max: 420, texture: soft, blending: THREE.NormalBlending });

    this.tracers = new TracerPool(this.scene);
    this.orbs = new OrbPool(this.scene);
    this.beams = new BeamPool(this.scene);
    this.arcs = new ArcPool(this.scene);
    this.rings = new RingPool(this.scene);

    this.reticle = createReticle();
    this.reticle.group.visible = false;
    this.scene.add(this.reticle.group);

    const aimGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.aimLine = new THREE.Line(
      aimGeo,
      new THREE.LineBasicMaterial({
        color: 0x6ff4ff,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      })
    );
    this.aimLine.visible = false;
    this.aimLine.renderOrder = 9;
    this.scene.add(this.aimLine);

    this.muzzleLight = new THREE.PointLight(0x72f2ff, 0, 5.5, 2);
    this.scene.add(this.muzzleLight);

    this.enemies = [];
    this.crates = [];
    this.drones = [];
    this.bullets = Array.from({ length: MAX_BULLETS }, () => ({
      active: false,
      hits: new Set(),
      x: 0,
      y: 0,
      z: 0,
      px: 0,
      py: 0,
      vx: 0,
      vy: 0,
      age: 0,
      life: 1,
      radius: 0.2,
      damage: 0,
      pierce: 0,
      kind: 'bullet',
      color: 0xffffff,
      crit: false,
      explosive: 0,
      frost: 0,
      burn: 0,
      aoe: 0,
      chain: 0,
      emitT: 0,
      tracerLength: 0.55
    }));
    this.bulletCursor = 0;
    this.acids = Array.from({ length: MAX_ACID }, () => ({
      active: false,
      x: 0,
      y: 0,
      z: 0.7,
      vx: 0,
      vy: 0,
      damage: 7,
      radius: 0.22,
      color: 0x9bff4c,
      trailT: 0
    }));
    this.acidCursor = 0;

    this.pointer = new THREE.Vector2(0, 0.2);
    this.aimPoint = new THREE.Vector2(0, 2);
    this.aimDesired = new THREE.Vector2(0, 2);
    this.aimTarget = null;
    this.aimTargetType = null;
    this.hintTimer = 0;
    this.input = {
      left: false,
      right: false,
      dragging: false,
      dragTargetX: 0
    };

    this.player = this.newPlayer();
    this.run = this.newRun();
    this.boss = null;
    this.pendingBoss = 0;
    this.bossCooldownLevel = 0;
    this.spawnTimer = 0.8;
    this.crateTimer = 3.0;
    this.hordeTimer = 14;
    this.shockTimer = 8;
    this.fireTimer = 0.2;
    this.isFiring = false;
    this.damageFlash = 0;
    this.shakeAmp = 0;
    this.lastDamageSound = 0;
    this.lastHitSound = 0;
    this.hudTimer = 0;
    this.menuGroup = null;
    this.menuEnemies = [];
    this.menuCrate = null;
    this.overlayTimer = null;
    this.turretWorld = new THREE.Vector3();
    this.muzzleWorld = new THREE.Vector3();
    this.tempVec = new THREE.Vector3();
    this.tempVec2 = new THREE.Vector3();
    this.best = this.loadBest();

    this.rebuildChips();
    this.updateMuteButton();
    this.updateBestLabels();
    this.bindEvents();
    this.resize();
    this.setupMenuScene();
    this.updateHud(true);
    this.dom.boot.classList.add('done');

    this.renderer.setAnimationLoop((now) => this.tick(now));
    requestAnimationFrame(() => {
      setTimeout(() => this.dom.boot.classList.add('done'), 220);
    });
  }

  collectDom() {
    return {
      stage: this.stage,
      boot: $('boot'),
      hud: $('hud'),
      startScreen: $('screen-start'),
      overScreen: $('screen-over'),
      pauseScreen: $('screen-pause'),
      startBtn: $('start-btn'),
      restartBtn: $('restart-btn'),
      resumeBtn: $('resume-btn'),
      quitBtn: $('quit-btn'),
      pauseBtn: $('pause-btn'),
      muteBtn: $('mute-btn'),
      menuMute: $('menu-mute'),
      armorNum: $('armor-num'),
      armorFill: $('armor-fill'),
      armorMeter: document.querySelector('.armor-meter'),
      scoreNum: $('score-num'),
      timeNum: $('time-num'),
      killsNum: $('kills-num'),
      threatNum: $('threat-num'),
      threatFill: $('threat-fill'),
      threatKills: $('threat-kills'),
      alertBanner: $('alert-banner'),
      alertKicker: $('alert-kicker'),
      alertText: $('alert-text'),
      alertLevel: $('alert-level'),
      comboBadge: $('combo-badge'),
      comboNum: $('combo-num'),
      bossBar: $('boss-bar'),
      bossFill: $('boss-fill'),
      bossHpNum: $('boss-hp-num'),
      toast: $('toast'),
      toastRarity: $('toast-rarity'),
      toastIcon: $('toast-icon'),
      toastName: $('toast-name'),
      toastDesc: $('toast-desc'),
      weaponIcon: $('weapon-icon'),
      weaponName: $('weapon-name'),
      weaponMeta: $('weapon-meta'),
      dpsNum: $('dps-num'),
      chips: $('chips'),
      aimHint: $('aim-hint'),
      damageVignette: $('damage-vignette'),
      alertVignette: $('alert-vignette'),
      flashLayer: $('flash-layer'),
      eventFeed: $('event-feed'),
      bestTime: $('best-time'),
      bestKills: $('best-kills'),
      overTime: $('over-time'),
      overKills: $('over-kills'),
      overThreat: $('over-threat'),
      overCrates: $('over-crates'),
      overScore: $('over-score'),
      overBest: $('over-best'),
      rotateHint: $('rotate-hint')
    };
  }

  newPlayer() {
    return {
      armor: PLAYER.startArmor,
      maxArmor: PLAYER.maxArmor,
      x: 0,
      vx: 0,
      weapon: 'vulcan',
      damageMul: 1,
      fireRateMul: 1,
      extraProjectiles: 0,
      extraPierce: 0,
      crit: 0.06,
      critMult: 2,
      explosive: 0,
      frost: 0,
      regen: 0,
      regenDelay: 4.5,
      drones: 0,
      shock: 0,
      stacks: {}
    };
  }

  newRun() {
    return {
      time: 0,
      kills: 0,
      score: 0,
      crates: 0,
      bossKills: 0,
      level: 1,
      levelKills: 0,
      killGoal: 12,
      combo: 0,
      comboTimer: 0,
      comboMax: 0,
      noDamage: 0
    };
  }

  loadBest() {
    try {
      const raw = JSON.parse(localStorage.getItem('dead-split-best') || 'null');
      if (raw && Number.isFinite(raw.time)) return raw;
    } catch (error) {
      // ignore corrupt storage
    }
    return { time: 0, kills: 0, score: 0 };
  }

  saveBest() {
    if (
      this.run.time > this.best.time + 0.5 ||
      this.run.kills > this.best.kills ||
      this.run.score > this.best.score
    ) {
      this.best = {
        time: Math.max(this.run.time, this.best.time),
        kills: Math.max(this.run.kills, this.best.kills),
        score: Math.max(this.run.score, this.best.score)
      };
      try {
        localStorage.setItem('dead-split-best', JSON.stringify(this.best));
      } catch (error) {
        // storage can be unavailable
      }
      return true;
    }
    return false;
  }

  updateBestLabels() {
    this.dom.bestTime.textContent = formatTime(this.best.time);
    this.dom.bestKills.textContent = Math.round(this.best.kills);
  }

  updateMuteButton() {
    const muted = this.audio.muted;
    this.dom.muteBtn.textContent = muted ? '∅' : '♪';
    this.dom.muteBtn.classList.toggle('off', muted);
    this.dom.muteBtn.setAttribute('aria-label', muted ? '开启音效' : '静音');
    if (this.dom.menuMute) {
      this.dom.menuMute.textContent = muted ? '音效 关' : '音效 开';
      this.dom.menuMute.classList.toggle('off', muted);
      this.dom.menuMute.setAttribute('aria-label', muted ? '开启音效' : '静音');
    }
  }

  bindEvents() {
    this.dom.startBtn.addEventListener('click', () => this.startRun());
    this.dom.restartBtn.addEventListener('click', () => this.startRun());
    this.dom.pauseBtn.addEventListener('click', () => this.togglePause());
    this.dom.resumeBtn.addEventListener('click', () => this.resume());
    this.dom.quitBtn.addEventListener('click', () => this.quitToMenu());
    this.dom.muteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this.audio.init();
      this.audio.toggleMuted();
      this.updateMuteButton();
    });
    this.dom.menuMute.addEventListener('click', (event) => {
      event.stopPropagation();
      this.audio.toggleMuted();
      this.updateMuteButton();
    });

    const onPointerDown = (event) => {
      if (this.state !== 'playing') return;
      if (event.target.closest?.('button')) return;
      this.input.dragging = true;
      this.updateDragTarget(event);
      this.dismissHint();
    };
    const onPointerMove = (event) => {
      if (this.state !== 'playing' || !this.input.dragging) return;
      this.updateDragTarget(event);
    };
    const onPointerUp = () => {
      this.input.dragging = false;
    };
    this.stage.addEventListener('pointerdown', onPointerDown, { passive: true });
    this.stage.addEventListener('pointermove', onPointerMove, { passive: true });
    this.stage.addEventListener('pointerup', onPointerUp, { passive: true });
    this.stage.addEventListener('pointercancel', onPointerUp, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    this.stage.addEventListener('contextmenu', (event) => event.preventDefault());

    const movementKeys = new Set(['a', 'A', 'd', 'D', 'ArrowLeft', 'ArrowRight']);
    window.addEventListener('keydown', (event) => {
      if (movementKeys.has(event.key)) {
        event.preventDefault();
        if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') this.input.left = true;
        if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') this.input.right = true;
        if (this.state === 'playing') this.dismissHint();
      }
      if (event.key === 'p' || event.key === 'P' || event.key === 'Escape') {
        if (this.state === 'playing' || this.state === 'paused') {
          event.preventDefault();
          this.togglePause();
        }
      }
      if ((event.key === 'm' || event.key === 'M') && this.state !== 'menu') {
        this.audio.init();
        this.audio.toggleMuted();
        this.updateMuteButton();
      }
      if ((event.key === 'Enter' || event.key === ' ') && (this.state === 'menu' || this.state === 'over')) {
        event.preventDefault();
        this.startRun();
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') this.input.left = false;
      if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') this.input.right = false;
    });
    window.addEventListener('blur', () => {
      this.input.left = false;
      this.input.right = false;
      this.input.dragging = false;
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });

    const resizeObserver = new ResizeObserver(() => this.resize());
    resizeObserver.observe(this.stage);
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 200));
  }

  resize() {
    const rect = this.stage.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelRatioCap || 2));
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    const size = new THREE.Vector2();
    this.renderer.getDrawingBufferSize(size);
    const projectionScale = size.y / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2));
    this.fx.setProjectionScale(projectionScale);
    this.smoke.setProjectionScale(projectionScale);
  }

  updateDragTarget(event) {
    const rect = this.stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = 0;
    this.pointer.set(x, y);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.aimPlane, this.tempVec);
    if (hit) {
      this.input.dragTargetX = clamp(hit.x, WORLD.playerMinX, WORLD.playerMaxX);
    }
  }

  dismissHint() {
    if (this.hintTimer > 0) {
      this.hintTimer = 0;
      this.dom.aimHint.classList.remove('show');
      this.dom.aimHint.classList.add('hide');
    }
  }

  // ——————————————— scene setup ———————————————

  setupMenuScene() {
    this.removeMenuScene();
    const group = new THREE.Group();
    this.scene.add(group);
    this.menuGroup = group;
    this.menuEnemies = [];
    const positions = [
      [-3.15, 4.2, -0.15],
      [-1.65, 1.1, 0.25],
      [-2.85, -1.9, 0.05],
      [-1.35, -4.25, 0.35]
    ];
    positions.forEach(([x, y, z], i) => {
      const zombie = createZombie('walker');
      zombie.group.position.set(x, y, z);
      zombie.group.rotation.y = i % 2 ? -0.15 : 0.15;
      group.add(zombie.group);
      this.menuEnemies.push({ ...zombie, phase: i * 1.7, baseY: y });
    });
    const dummyReward = {
      kind: 'weapon',
      id: 'pyro',
      name: '焚城 · 火焰喷射器',
      icon: 'PYR',
      rarity: 'rare',
      css: '#ff7a2e'
    };
    this.menuCrate = createRewardCrate(dummyReward, 84);
    this.menuCrate.group.position.set(WORLD.rewardCenterX, 1.6, 0.2);
    this.menuCrate.group.scale.setScalar(0.95);
    group.add(this.menuCrate.group);
  }

  removeMenuScene() {
    if (!this.menuGroup) return;
    this.scene.remove(this.menuGroup);
    this.menuGroup.traverse((child) => {
      if (child.isMesh) {
        if (child.geometry && child.userData.uniqueGeometry) child.geometry.dispose();
        if (child.material && child.material.userData?.unique) child.material.dispose();
      }
    });
    if (this.menuCrate?.labelTexture) this.menuCrate.labelTexture.dispose();
    this.menuGroup = null;
    this.menuEnemies = [];
    this.menuCrate = null;
  }

  updateMenu(dt) {
    const t = this.time;
    this.menuEnemies.forEach((zombie, i) => {
      zombie.group.position.y = zombie.baseY + Math.sin(t * 0.6 + zombie.phase) * 0.18;
      zombie.group.position.x += Math.sin(t * 0.35 + i) * dt * 0.015;
      animateZombie(zombie, dt, t * 0.7, { phase: zombie.phase, attacking: false });
      zombie.updateHealth(1, 1);
    });
    if (this.menuCrate) this.menuCrate.update(dt, t);
    const idleAim = Math.sin(t * 0.45) * 0.25;
    this.gunner.update(dt, t, idleAim, false, false);
    this.gunner.root.updateMatrixWorld(true);
    this.reticle.group.visible = false;
    this.aimLine.visible = false;
  }

  // ——————————————— run flow ———————————————

  startRun() {
    if (this.state === 'playing') return;
    this.audio.init();
    this.removeMenuScene();
    this.resetRun();
    this.state = 'playing';
    this.stage.classList.add('is-playing');
    this.dom.startScreen.classList.add('is-hidden');
    this.dom.overScreen.classList.add('is-hidden');
    this.dom.pauseScreen.classList.add('is-hidden');
    this.dom.hud.classList.remove('is-hidden');
    this.reticle.group.visible = false;
    this.aimLine.visible = false;
    this.hintTimer = 6;
    this.dom.aimHint.querySelector('b').textContent = this.isTouch ? '左右拖动屏幕' : 'A / D 左右移动';
    this.dom.aimHint.querySelector('div em').textContent = 'AUTO AIM · AUTO FIRE';
    this.dom.aimHint.classList.remove('hide');
    this.dom.aimHint.classList.add('show');
    this.aimPoint.set(0, 3.2);
    this.aimDesired.set(0, 3.2);
    this.audio.start();
    this.audio.setMuted(this.audio.muted);
    this.updateHud(true);
    this.showFeed('防线接入 · 自动索敌已授权', '#65efff');
    this.spawnEnemy('walker', -3.55, 5.4);
    this.spawnEnemy('walker', -1.75, 3.5);
    this.spawnEnemy('runner', -0.35, 1.4);
    this.dom.flashLayer.classList.remove('flash');
    void this.dom.flashLayer.offsetWidth;
    this.dom.flashLayer.classList.add('flash');
  }

  resetRun() {
    this.clearRunObjects();
    this.player = this.newPlayer();
    this.run = this.newRun();
    this.input.left = false;
    this.input.right = false;
    this.input.dragging = false;
    this.input.dragTargetX = 0;
    this.boss = null;
    this.pendingBoss = 0;
    this.spawnTimer = 0.9;
    this.crateTimer = 2.4;
    this.hordeTimer = 14;
    this.shockTimer = 8;
    this.fireTimer = 0.15;
    this.isFiring = false;
    this.damageFlash = 0;
    this.shakeAmp = 0;
    this.hintTimer = 0;
    this.aimTarget = null;
    this.aimTargetType = null;
    this.supplyHintShown = false;
    this.chipsById = {};
    this.gunner.setWeapon('vulcan');
    this.gunner.root.position.x = 0;
    this.dom.bossBar.classList.remove('show');
    this.dom.comboBadge.classList.remove('show');
    this.dom.toast.classList.remove('show');
    this.dom.alertBanner.classList.remove('show');
    this.dom.eventFeed.innerHTML = '';
    this.dom.hud.classList.remove('is-hidden');
    this.dom.chips.innerHTML = '';
    this.dom.aimHint.classList.remove('show', 'hide');
    this.rebuildChips();
    this.updateHud(true);
  }

  clearRunObjects() {
    for (const enemy of this.enemies) {
      this.scene.remove(enemy.group);
    }
    this.enemies.length = 0;
    for (const crate of this.crates) {
      this.scene.remove(crate.visual.group);
      if (crate.visual?.labelTexture) crate.visual.labelTexture.dispose();
    }
    this.crates.length = 0;
    for (const drone of this.drones) this.scene.remove(drone.group);
    this.drones.length = 0;
    for (const bullet of this.bullets) {
      bullet.active = false;
      bullet.hits.clear();
    }
    for (const acid of this.acids) acid.active = false;
    this.fx.clear();
    this.smoke.clear();
    this.dom.bossBar.classList.remove('show');
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.input.left = false;
    this.input.right = false;
    this.input.dragging = false;
    this.stage.classList.remove('is-playing');
    this.dom.pauseScreen.classList.remove('is-hidden');
    this.dom.aimHint.classList.remove('show');
    this.audio.setFlame(0);
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.stage.classList.add('is-playing');
    this.dom.pauseScreen.classList.add('is-hidden');
    this.lastFrame = performance.now();
  }

  togglePause() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused') this.resume();
  }

  quitToMenu() {
    this.audio.stopMusic();
    this.clearRunObjects();
    this.state = 'menu';
    this.player.x = 0;
    this.player.vx = 0;
    this.gunner.root.position.x = 0;
    this.gunner.root.rotation.z = 0;
    this.input.left = false;
    this.input.right = false;
    this.input.dragging = false;
    this.stage.classList.remove('is-playing', 'low-health');
    this.dom.pauseScreen.classList.add('is-hidden');
    this.dom.overScreen.classList.add('is-hidden');
    this.dom.startScreen.classList.remove('is-hidden');
    this.dom.hud.classList.add('is-hidden');
    this.reticle.group.visible = false;
    this.aimLine.visible = false;
    this.updateBestLabels();
    this.setupMenuScene();
  }

  gameOver() {
    if (this.state !== 'playing') return;
    this.state = 'over';
    this.input.left = false;
    this.input.right = false;
    this.input.dragging = false;
    this.stage.classList.remove('is-playing');
    this.reticle.group.visible = false;
    this.aimLine.visible = false;
    this.dom.aimHint.classList.remove('show');
    this.dom.bossBar.classList.remove('show');
    this.audio.gameOver();
    this.audio.setFlame(0);
    this.addShake(0.28);
    this.spawnExplosion(this.player.x, -7.9, 0.8, 2.2, '#ff4555', 30);
    const isRecord = this.saveBest();
    this.dom.overTime.textContent = formatTime(this.run.time);
    this.dom.overKills.textContent = String(this.run.kills);
    this.dom.overThreat.textContent = String(this.run.level).padStart(2, '0');
    this.dom.overCrates.textContent = String(this.run.crates);
    this.dom.overScore.textContent = String(Math.round(this.run.score));
    this.dom.overBest.textContent = isRecord ? 'NEW RECORD' : `BEST ${formatScore(this.best.score)}`;
    this.updateBestLabels();
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => {
      if (this.state === 'over') {
        this.dom.overScreen.classList.remove('is-hidden');
        this.dom.hud.classList.add('is-hidden');
      }
    }, 780);
  }

  // ——————————————— main loop ———————————————

  tick(now) {
    const dt = clamp((now - this.lastFrame) / 1000, 0, 0.033);
    this.lastFrame = now;
    this.time += dt;

    if (this.state === 'playing') {
      this.updateGame(dt);
      this.audio.update(this.run.level);
    } else if (this.state === 'menu') {
      this.updateMenu(dt);
    } else if (this.state === 'paused') {
      this.updateFrozen(dt);
    } else if (this.state === 'over') {
      this.updateFrozen(dt);
    }

    this.env.update(dt, this.time, this.state === 'playing' ? this.run.level : 1.2);
    this.fx.update(dt);
    this.smoke.update(dt);
    this.beams.update(dt);
    this.arcs.update(dt);
    this.rings.update(dt);
    this.tracers.update(this.bullets);
    this.orbs.update([this.bullets, this.acids]);

    if (this.state === 'playing') {
      this.updateReticle(dt);
      this.updateAimLine();
    }

    this.updateCamera(dt);
    this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 120);
    this.damageFlash = Math.max(0, this.damageFlash - dt * 1.75);
    const lowHealth = this.state === 'playing' && this.player.armor / this.player.maxArmor < 0.3;
    this.stage.classList.toggle('low-health', lowHealth);
    this.dom.damageVignette.style.opacity = String(this.damageFlash * 0.9);
    this.dom.alertVignette.style.opacity = lowHealth
      ? String(0.24 + Math.sin(this.time * 6) * 0.12)
      : '0';

    if (this.state === 'playing') {
      this.hudTimer -= dt;
      if (this.hudTimer <= 0) {
        this.hudTimer = 0.09;
        this.updateHud();
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  updateFrozen(dt) {
    this.gunner.update(dt, this.time, Math.sin(this.time * 0.4) * 0.16, false, false);
    this.gunner.root.updateMatrixWorld(true);
    this.aimLine.visible = false;
    this.reticle.group.visible = false;
    this.audio.setFlame(0);
  }

  updateGame(dt) {
    this.run.time += dt;
    this.run.noDamage += dt;

    this.updateMovement(dt);
    this.updateAim(dt);
    this.updateGunner(dt);
    this.updateSpawning(dt);
    this.updateEnemies(dt);
    this.updateCrates(dt);
    this.updateDrones(dt);
    this.updateFiring(dt);
    this.updateProjectiles(dt);
    this.updateAcid(dt);
    this.updateShockwave(dt);
    this.updateRegen(dt);
    this.updateCombo(dt);

    if (this.hintTimer > 0) {
      this.hintTimer -= dt;
      if (this.hintTimer <= 0) {
        this.dom.aimHint.classList.remove('show');
        this.dom.aimHint.classList.add('hide');
      }
    }
  }

  // ——————————————— movement / auto-aim ———————————————

  updateMovement(dt) {
    const keyDir = (this.input.right ? 1 : 0) - (this.input.left ? 1 : 0);
    let targetVx = 0;
    if (keyDir !== 0) {
      targetVx = keyDir * WORLD.playerSpeed;
    } else if (this.input.dragging) {
      const distance = this.input.dragTargetX - this.player.x;
      targetVx = clamp(distance * 12, -WORLD.playerSpeed * 1.25, WORLD.playerSpeed * 1.25);
      if (Math.abs(distance) < 0.04) targetVx = 0;
    }
    this.player.vx = damp(this.player.vx, targetVx, targetVx === 0 ? 18 : 13, dt);
    if (Math.abs(this.player.vx) < 0.008) this.player.vx = 0;
    this.player.x += this.player.vx * dt;
    if (this.player.x < WORLD.playerMinX) {
      this.player.x = WORLD.playerMinX;
      this.player.vx = Math.max(0, this.player.vx);
    } else if (this.player.x > WORLD.playerMaxX) {
      this.player.x = WORLD.playerMaxX;
      this.player.vx = Math.min(0, this.player.vx);
    }

    this.gunner.root.position.x = this.player.x;
    this.gunner.root.rotation.z = clamp(-this.player.vx * 0.008, -0.05, 0.05);

    if (Math.abs(this.player.vx) > 0.35) {
      this.moveFxTimer = (this.moveFxTimer || 0) - dt;
      if (this.moveFxTimer <= 0) {
        this.moveFxTimer = 0.045;
        const side = this.player.vx > 0 ? -1 : 1;
        this.fx.spawn({
          x: this.player.x + side * rand(0.55, 1.2),
          y: -8.45 + rand(-0.08, 0.08),
          z: rand(0.25, 0.55),
          vx: -this.player.vx * 0.18 + rand(-0.5, 0.5),
          vy: rand(0.3, 1.4),
          vz: rand(-0.15, 0.15),
          life: rand(0.16, 0.3),
          size: rand(0.04, 0.09),
          endScale: 0.01,
          color: chance(0.5) ? 0x6ff4ff : 0xffc15e,
          gravity: 2.2,
          drag: 1.4
        });
      }
    }
  }

  updateAim(dt) {
    const target = this.findAutoTarget();
    this.aimTarget = target;
    this.aimTargetType = target?.targetType || null;
    const columnX = this.player.x + 0.14;
    const tx = target ? target.x : columnX;
    const ty = target ? target.centerY : 3.4;
    this.aimDesired.set(clamp(tx, AIM.minX, AIM.maxX), clamp(ty, AIM.minY, AIM.maxY));
    if (!Number.isFinite(this.aimDesired.x) || !Number.isFinite(this.aimDesired.y)) {
      this.aimDesired.set(columnX, 3.4);
    }
    if (!Number.isFinite(this.aimPoint.x) || !Number.isFinite(this.aimPoint.y)) {
      this.aimPoint.set(columnX, 3.4);
    }
    const lambda = target ? 22 : 10;
    this.aimPoint.x = damp(this.aimPoint.x, this.aimDesired.x, lambda, dt);
    this.aimPoint.y = damp(this.aimPoint.y, this.aimDesired.y, lambda, dt);
  }

  findAutoTarget() {
    const columnX = this.player.x + 0.14;
    const inRewardLane = this.player.x > WORLD.dividerX + 0.08;
    const assist = AIM.autoAimWidth;

    if (inRewardLane) {
      let crateTarget = null;
      let crateScore = Infinity;
      for (const crate of this.crates) {
        if (!crate.alive) continue;
        const dx = Math.abs(crate.x - columnX);
        if (dx > assist + 0.55) continue;
        const score = dx;
        if (score < crateScore) {
          crateScore = score;
          crateTarget = crate;
        }
      }
      if (crateTarget) return crateTarget;
    }

    let best = null;
    let bestScore = Infinity;
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const centerY = enemy.centerY ?? (enemy.y + enemy.bodyOffset);
      if (centerY > WORLD.yMax + 1.2) continue;
      const dx = Math.abs(enemy.x - columnX);
      const reach = assist + enemy.radius * 0.55;
      if (dx > reach) continue;
      let score = centerY * 0.65 + dx * 0.9;
      if (this.aimTarget === enemy) score -= 0.28;
      if (enemy.type.boss) score -= 0.1;
      if (score < bestScore) {
        bestScore = score;
        best = enemy;
      }
    }
    return best;
  }

  updateGunner(dt) {
    this.gunner.root.position.x = this.player.x;
    this.gunner.turret.getWorldPosition(this.turretWorld);
    const dx = this.aimPoint.x - this.turretWorld.x;
    const dy = this.aimPoint.y - this.turretWorld.y;
    const angle = Math.atan2(dx, dy);
    this.gunner.update(dt, this.time, angle, this.state === 'playing', this.state === 'playing');
    this.gunner.root.updateMatrixWorld(true);
    const muzzle = this.gunner.muzzles[this.player.weapon];
    if (muzzle) muzzle.getWorldPosition(this.muzzleWorld);
    this.muzzleLight.position.copy(this.muzzleWorld);
  }

  updateReticle(dt) {
    const locked = !!this.aimTarget;
    this.reticle.group.visible = locked;
    if (!locked) return;
    this.reticle.group.position.set(this.aimPoint.x, this.aimPoint.y, 0.95);
    if (this.aimTargetType === 'enemy') this.reticle.material.color.setHex(0xff5d61);
    else if (this.aimTargetType === 'crate') this.reticle.material.color.setHex(0xffc75a);
    else this.reticle.material.color.setHex(0x72f2ff);
    this.reticle.material.opacity = 0.9;
    this.reticle.group.rotation.z += dt * 1.4;
    this.reticle.inner.rotation.z -= dt * 2;
    const pulse = 1 + Math.sin(this.time * 5) * 0.035;
    this.reticle.group.scale.setScalar(pulse * 0.9);
  }

  updateAimLine() {
    const hasTarget = !!this.aimTarget;
    this.aimLine.visible = hasTarget;
    if (!hasTarget) return;
    const positions = this.aimLine.geometry.attributes.position.array;
    positions[0] = this.muzzleWorld.x;
    positions[1] = this.muzzleWorld.y;
    positions[2] = 0.72;
    positions[3] = this.aimPoint.x;
    positions[4] = this.aimPoint.y;
    positions[5] = 0.72;
    this.aimLine.geometry.attributes.position.needsUpdate = true;
    this.aimLine.material.color.setHex(WEAPONS[this.player.weapon].color);
    this.aimLine.material.opacity = 0.2;
  }

  updateCamera(dt) {
    this.shakeAmp = Math.max(0, this.shakeAmp - dt * 1.8);
    this.shakeAmp *= Math.exp(-5.5 * dt);
    const sway = Math.sin(this.time * 0.23) * 0.055;
    const tracking = this.player.x * 0.028;
    this.camera.position.set(
      this.cameraBase.x + sway + tracking + (Math.random() - 0.5) * this.shakeAmp,
      this.cameraBase.y + (Math.random() - 0.5) * this.shakeAmp * 0.8,
      this.cameraBase.z
    );
    this.camera.lookAt(this.cameraTarget);
  }

  addShake(amount) {
    this.shakeAmp = Math.min(0.45, this.shakeAmp + amount);
  }

  // ——————————————— spawning ———————————————

  updateSpawning(dt) {
    if (this.pendingBoss > 0) {
      this.pendingBoss -= dt;
      if (this.pendingBoss <= 0) this.spawnBoss();
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      const level = this.run.level;
      let count = 1;
      if (level >= 4 && chance(Math.min(0.48, 0.08 + (level - 3) * 0.07))) count += 1;
      if (level >= 7 && chance(Math.min(0.4, 0.06 + (level - 6) * 0.055))) count += 1;
      count = Math.min(count, 4);
      this.spawnWave(count);
      const base = Math.max(0.36, 1.45 - (level - 1) * 0.075);
      this.spawnTimer = base * rand(0.78, 1.22);
    }

    this.hordeTimer -= dt;
    if (this.hordeTimer <= 0) {
      const level = this.run.level;
      if (level >= 2) {
        const count = Math.min(8, 2 + Math.floor(level * 0.65) + randInt(0, 2));
        this.spawnWave(count, true);
        this.showFeed(`尸潮涌动 ×${count}`, '#ff5d61');
        this.addShake(0.06);
        this.audio.alert();
      }
      this.hordeTimer = Math.max(8.5, 16 - level * 0.35) * rand(0.9, 1.15);
    }
  }

  spawnWave(count, burst = false) {
    if (this.enemies.length >= this.maxEnemies) return;
    const available = Math.min(count, this.maxEnemies - this.enemies.length);
    const types = this.getEnemyPool();
    const spawnArea = [WORLD.enemyMinX + 0.15, WORLD.dividerX - 0.3];
    const slots = [];
    for (let i = 0; i < available; i += 1) {
      const typeId = weightedPick(types).id;
      const type = ENEMY_TYPES[typeId];
      const margin = type.radius * 1.25 + 0.32;
      let x = rand(spawnArea[0] + margin, spawnArea[1] - margin);
      let attempts = 0;
      while (slots.some((sx) => Math.abs(sx - x) < 0.7) && attempts < 8) {
        x = rand(spawnArea[0] + margin, spawnArea[1] - margin);
        attempts += 1;
      }
      slots.push(x);
      const y = WORLD.spawnY + rand(0, burst ? 1.6 : 0.8);
      this.spawnEnemy(typeId, x, y);
    }
    if (burst) {
      this.fx.burst(WORLD.enemyCenterX, 10.1, 0.4, 26, {
        speed: 3.4,
        direction: -Math.PI / 2,
        spread: Math.PI * 1.2,
        life: 0.7,
        size: 0.16,
        endScale: 0.02,
        color: 0xff394a,
        gravity: -1.6,
        drag: 2.2
      });
      this.rings.fire(WORLD.enemyCenterX, 9.8, 0.7, 0xff4555, 3.2, 0.45, 0.34, 0.3);
    }
  }

  getEnemyPool() {
    const level = this.run.level;
    const pool = [{ id: 'walker', weight: Math.max(18, 58 - level * 3.2) }];
    if (level >= 2) pool.push({ id: 'runner', weight: 14 + level * 1.7 });
    if (level >= 3) pool.push({ id: 'spitter', weight: 7 + level * 0.9 });
    if (level >= 4) pool.push({ id: 'brute', weight: 7 + level * 1.2 });
    return pool;
  }

  spawnEnemy(typeId, x = null, y = null) {
    if (this.enemies.length >= this.maxEnemies) return null;
    const type = ENEMY_TYPES[typeId];
    const level = this.run.level;
    let px = x;
    if (px === null) {
      const margin = type.radius * 1.25 + 0.3;
      px = rand(WORLD.enemyMinX + margin, WORLD.dividerX - 0.3 - margin);
    }
    const py = y === null ? WORLD.spawnY + rand(0, 0.6) : y;
    const hpScale =
      (1 + (level - 1) * 0.33 + (level - 1) ** 1.45 * 0.035) *
      (1 + Math.min(1.15, this.run.time * 0.002));
    const maxHp = Math.round(type.hp * hpScale * (typeId === 'boss' ? 1.28 : 1) * 10) / 10;
    const zombie = createZombie(typeId);
    const z = rand(-0.28, 0.42);
    const scaleVar = typeId === 'walker' || typeId === 'runner' ? rand(0.9, 1.1) : 1;
    if (scaleVar !== 1) zombie.group.scale.multiplyScalar(scaleVar);
    zombie.group.position.set(px, py, z);
    zombie.group.rotation.y = rand(-0.25, 0.25);
    this.scene.add(zombie.group);
    const enemy = {
      id: typeId,
      type,
      group: zombie.group,
      model: zombie,
      x: px,
      y: py,
      z,
      baseX: px,
      baseRot: rand(-0.18, 0.18),
      bodyOffset: BODY_OFFSET[typeId] * (type.scale * (typeId === 'boss' ? 1.05 : typeId === 'runner' ? 0.9 : 1)) * scaleVar,
      centerY: py + BODY_OFFSET[typeId],
      radius: type.radius * scaleVar,
      hp: maxHp,
      maxHp,
      baseSpeed: type.speed * (1 + Math.min(0.72, (level - 1) * 0.033)),
      damage: type.damage + (level - 1) * 0.75,
      alive: true,
      attacking: false,
      attackT: rand(0.4, 1.4),
      phase: rand(0, TAU),
      sway: rand(0.08, 0.3),
      swaySpeed: rand(0.35, 0.9),
      slowT: 0,
      burnT: 0,
      burnDps: 0,
      hitFlash: 0,
      emitBurnT: 0,
      targetType: 'enemy',
      scoreValue: type.score
    };
    enemy.centerY = py + enemy.bodyOffset;
    this.enemies.push(enemy);
    this.fx.burst(px, py + 0.2, z, 8, {
      speed: 2.2,
      direction: -Math.PI / 2,
      spread: Math.PI * 0.8,
      life: 0.5,
      size: 0.11,
      endScale: 0.01,
      color: 0xff4350,
      gravity: 0,
      drag: 2
    });
    if (type.boss) {
      this.boss = enemy;
      this.pendingBoss = 0;
      this.dom.bossBar.classList.add('show');
      this.showAlert('DANGER', '暴君接近', '☠', true);
      this.audio.alert();
      this.addShake(0.18);
      this.spawnExplosion(px, py + 1, z, 2.4, '#ff3546', 24);
    }
    return enemy;
  }

  spawnBoss() {
    if (this.boss && this.boss.alive) return;
    this.spawnEnemy('boss', WORLD.enemyCenterX, WORLD.spawnY + 0.2);
  }

  // ——————————————— enemies ———————————————

  updateEnemies(dt) {
    for (let i = this.enemies.length - 1; i >= 0; i -= 1) {
      const enemy = this.enemies[i];
      if (!enemy.alive) {
        this.enemies.splice(i, 1);
        continue;
      }
      const slow = enemy.slowT > 0 ? 1 - this.player.frost : 1;
      if (enemy.slowT > 0) enemy.slowT -= dt;

      if (enemy.burnT > 0) {
        enemy.burnT -= dt;
        enemy.hp -= enemy.burnDps * dt;
        enemy.emitBurnT -= dt;
        if (enemy.emitBurnT <= 0) {
          enemy.emitBurnT = 0.09;
          this.fx.burst(enemy.x + rand(-0.18, 0.18), enemy.y + rand(0.3, 1.6), enemy.z + 0.25, 1, {
            speed: 1,
            direction: Math.PI / 2,
            spread: 0.8,
            life: 0.32,
            size: 0.2,
            endScale: 0.02,
            color: chance(0.35) ? 0xffd15a : 0xff5a21,
            gravity: -1.4,
            drag: 1.2
          });
        }
        if (enemy.hp <= 0) {
          this.killEnemy(enemy, 'burn');
          continue;
        }
        enemy.model.updateHealth(enemy.hp, enemy.maxHp);
        if (enemy === this.boss) this.updateBossBar();
      }

      if (!enemy.attacking) {
        let stopY = DEFENSE_LINE + 0.55;
        if (enemy.id === 'spitter') stopY = -3.1;
        if (enemy.id === 'boss') stopY = -3.8;
        enemy.y -= enemy.baseSpeed * slow * dt;
        if (enemy.y <= stopY) {
          enemy.y = stopY;
          enemy.attacking = true;
          enemy.attackT = enemy.id === 'spitter' || enemy.id === 'boss' ? rand(0.5, 1.2) : rand(0.3, 0.8);
        }
      } else {
        enemy.attackT -= dt;
        if (enemy.attackT <= 0) {
          if (enemy.id === 'spitter') {
            enemy.attackT = rand(2.1, 3.1);
            this.shootAcid(enemy, 1);
          } else if (enemy.id === 'boss') {
            enemy.attackT = rand(1.8, 2.4);
            this.shootAcid(enemy, 3);
            this.addShake(0.05);
          } else {
            enemy.attackT = rand(0.82, 1.2);
            this.enemyAttack(enemy);
          }
        }
      }

      enemy.centerY = enemy.y + enemy.bodyOffset;
      enemy.x = enemy.baseX + Math.sin(this.time * enemy.swaySpeed + enemy.phase) * enemy.sway;
      enemy.group.position.x = enemy.x;
      enemy.group.position.y = enemy.y;
      enemy.group.position.z = enemy.z;
      enemy.group.rotation.y = enemy.baseRot + Math.sin(this.time * 0.4 + enemy.phase) * 0.06;
      if (enemy.hitFlash > 0) {
        enemy.hitFlash -= dt;
        const k = Math.max(0, enemy.hitFlash / 0.16);
        enemy.model.rig.scale.setScalar(1 + k * 0.045);
      } else if (enemy.model.rig.scale.x !== 1) {
        enemy.model.rig.scale.setScalar(1);
      }
      animateZombie(enemy.model, dt, this.time, { phase: enemy.phase, attacking: enemy.attacking });
      enemy.model.updateHealth(enemy.hp, enemy.maxHp);
      if (enemy === this.boss) this.updateBossBar();
    }
  }

  enemyAttack(enemy) {
    this.damagePlayer(enemy.damage, 'melee');
    this.addShake(0.03);
    this.fx.burst(enemy.x, DEFENSE_LINE + 0.35, 0.6, 5, {
      speed: 2.4,
      direction: -Math.PI / 2,
      spread: Math.PI,
      life: 0.24,
      size: 0.08,
      endScale: 0.01,
      color: 0xffb55c,
      gravity: 0,
      drag: 2
    });
  }

  shootAcid(enemy, count = 1) {
    const originX = enemy.x;
    const originY = enemy.y + enemy.bodyOffset + 0.25;
    const targetX = this.player.x;
    const targetY = -7.3;
    for (let i = 0; i < count; i += 1) {
      let acid = null;
      for (let j = 0; j < MAX_ACID; j += 1) {
        const candidate = this.acids[(this.acidCursor + j) % MAX_ACID];
        if (!candidate.active) {
          acid = candidate;
          break;
        }
      }
      if (!acid) {
        acid = this.acids[this.acidCursor];
      }
      this.acidCursor = (this.acidCursor + 1) % MAX_ACID;
      const spread = count > 1 ? (i - (count - 1) / 2) * 0.9 : 0;
      const dx = targetX + spread - originX;
      const dy = targetY - originY;
      const len = Math.hypot(dx, dy) || 1;
      const speed = enemy.id === 'boss' ? 6.2 : 7.4;
      acid.active = true;
      acid.x = originX + rand(-0.18, 0.18);
      acid.y = originY;
      acid.z = 0.55;
      acid.vx = (dx / len) * speed;
      acid.vy = (dy / len) * speed;
      acid.damage = 6 + this.run.level * 0.6 + (enemy.id === 'boss' ? 4 : 0);
      acid.radius = enemy.id === 'boss' ? 0.28 : 0.2;
      acid.color = 0x9bff4c;
      acid.trailT = 0;
      this.fx.burst(acid.x, acid.y, acid.z, 5, {
        speed: 1.4,
        life: 0.35,
        size: 0.16,
        endScale: 0.02,
        color: 0x92ff5b,
        gravity: 1.5,
        drag: 1.5
      });
    }
  }

  updateAcid(dt) {
    for (const acid of this.acids) {
      if (!acid.active) continue;
      acid.x += acid.vx * dt;
      acid.y += acid.vy * dt;
      acid.trailT -= dt;
      if (acid.trailT <= 0) {
        acid.trailT = 0.035;
        this.fx.burst(acid.x, acid.y, acid.z, 1, {
          speed: 0.6,
          life: 0.24,
          size: 0.12,
          endScale: 0.01,
          color: 0x8fff57,
          gravity: -0.6,
          drag: 2
        });
      }
      if (acid.y <= -7.05 || acid.x < -6 || acid.x > 6) {
        acid.active = false;
        const dodgeDistance = Math.abs(acid.x - this.player.x);
        if (dodgeDistance < 0.95) {
          this.damagePlayer(acid.damage, 'acid');
          this.addShake(0.05);
        }
        this.fx.burst(acid.x, -7.05, 0.7, 12, {
          speed: 2.2,
          direction: -Math.PI / 2,
          spread: Math.PI * 1.1,
          life: 0.5,
          size: 0.18,
          endScale: 0.01,
          color: 0x9bff4c,
          gravity: 1.2,
          drag: 1.8
        });
        this.smoke.burst(acid.x, -7.0, 0.6, 5, {
          speed: 0.8,
          life: 0.7,
          size: 0.4,
          endScale: 0.9,
          color: 0x2d4325,
          gravity: -0.2,
          drag: 1.2,
          alpha: 0.35
        });
      }
    }
  }

  damagePlayer(amount, source = 'melee') {
    if (this.state !== 'playing') return;
    this.player.armor -= amount;
    this.run.noDamage = 0;
    this.damageFlash = Math.min(0.85, this.damageFlash + 0.32);
    this.addShake(source === 'acid' ? 0.1 : 0.055);
    const now = performance.now();
    if (now - this.lastDamageSound > 140) {
      this.lastDamageSound = now;
      this.audio.damage();
    }
    if (this.player.armor <= 0) {
      this.player.armor = 0;
      this.updateHud(true);
      this.gameOver();
    }
  }

  killEnemy(enemy, source = 'shot') {
    if (!enemy.alive) return;
    enemy.alive = false;
    this.run.kills += 1;
    this.run.levelKills += 1;
    this.run.combo = this.run.comboTimer > 0 ? this.run.combo + 1 : 1;
    this.run.comboTimer = 2.8;
    this.run.comboMax = Math.max(this.run.comboMax, this.run.combo);
    const comboBonus = 1 + Math.min(12, this.run.combo) * 0.07;
    this.run.score += Math.round(enemy.scoreValue * comboBonus);
    if (this.aimTarget === enemy) this.aimTarget = null;
    const isBoss = enemy.id === 'boss';
    this.audio.kill(isBoss ? 'boss' : enemy.id);
    const count = isBoss ? 90 : enemy.id === 'brute' ? 30 : 18;
    this.spawnExplosion(enemy.x, enemy.y + enemy.bodyOffset, enemy.z + 0.1, isBoss ? 2.8 : 0.9, isBoss ? '#ff3b4f' : '#8bae4e', count);
    if (isBoss) {
      this.addShake(0.32);
      this.rings.fire(enemy.x, enemy.y + 0.8, 0.9, 0xff3f4f, 7, 0.8, 0.65, 0.4);
      this.smoke.burst(enemy.x, enemy.y + 1, enemy.z, 20, {
        speed: 2.5,
        life: 1.4,
        size: 0.7,
        endScale: 1.8,
        color: 0x2a2628,
        gravity: -0.3,
        drag: 1.4,
        alpha: 0.35
      });
      this.boss = null;
      this.run.bossKills += 1;
      this.dom.bossBar.classList.remove('show');
      this.player.armor = Math.min(this.player.maxArmor, this.player.armor + 24);
      this.showAlert('TARGET DOWN', '暴君已清除', '✓', false);
      this.spawnBossLoot(enemy.x);
    }
    this.scene.remove(enemy.group);
    const index = this.enemies.indexOf(enemy);
    if (index >= 0) this.enemies.splice(index, 1);
    if (this.run.levelKills >= this.run.killGoal) this.levelUp();
  }

  levelUp() {
    this.run.level += 1;
    this.run.levelKills = 0;
    this.run.killGoal = 8 + this.run.level * 4;
    this.audio.alert();
    this.addShake(0.1);
    this.showAlert('WARNING', '威胁等级提升', String(this.run.level).padStart(2, '0'), true);
    this.showFeed(`感染体强化 · 威胁 ${this.run.level}`, '#ff7660');
    this.fx.burst(0, 0, 1, 30, {
      speed: 4,
      life: 0.8,
      size: 0.12,
      endScale: 0.01,
      color: 0xff3b4f,
      gravity: 0,
      drag: 2
    });
    this.spawnWave(Math.min(7, 2 + Math.floor(this.run.level / 2)), true);
    this.crateTimer = Math.min(this.crateTimer, 1.4);
    if (this.run.level >= 4 && (this.run.level - 4) % 3 === 0 && this.run.level !== this.bossCooldownLevel) {
      this.bossCooldownLevel = this.run.level;
      this.pendingBoss = 1.7;
    }
    this.updateHud(true);
  }

  updateBossBar() {
    if (!this.boss || !this.boss.alive) {
      this.dom.bossBar.classList.remove('show');
      return;
    }
    this.dom.bossBar.classList.add('show');
    const pct = clamp(this.boss.hp / this.boss.maxHp, 0, 1);
    this.dom.bossFill.style.width = `${pct * 100}%`;
    this.dom.bossHpNum.textContent = `${Math.ceil(pct * 100)}%`;
  }

  // ——————————————— rewards ———————————————

  updateCrates(dt) {
    this.crateTimer -= dt;
    if (this.crateTimer <= 0 && this.crates.length < MAX_CRATES) {
      this.spawnRewardCrate();
      this.crateTimer = Math.max(3.6, 6.4 - this.run.level * 0.1) * rand(0.87, 1.15);
    }

    for (let i = this.crates.length - 1; i >= 0; i -= 1) {
      const crate = this.crates[i];
      if (!crate.alive) {
        this.crates.splice(i, 1);
        continue;
      }
      if (crate.spawnT > 0) {
        crate.spawnT -= dt;
        const t = 1 - Math.max(0, crate.spawnT / 0.42);
        crate.visual.group.scale.setScalar(0.55 + 0.45 * (1 - (1 - t) ** 3));
      }
      crate.y -= crate.speed * dt;
      crate.x = crate.baseX + Math.sin(this.time * 0.7 + crate.phase) * 0.12;
      crate.centerY = crate.y + 0.15;
      crate.visual.group.position.set(crate.x, crate.y, crate.z);
      crate.visual.update(dt, this.time);
      if (crate.y < WORLD.crateMinY) {
        crate.alive = false;
        this.scene.remove(crate.visual.group);
        this.crates.splice(i, 1);
        if (crate.visual?.labelTexture) crate.visual.labelTexture.dispose();
        this.crateTimer = Math.max(this.crateTimer, 2.4);
        this.showFeed('补给坠落 · 已遗失', '#7d8b94');
        this.fx.burst(crate.x, crate.y, crate.z, 20, {
          speed: 2.2,
          life: 0.6,
          size: 0.16,
          endScale: 0.02,
          color: crate.color,
          gravity: 2,
          drag: 1.4
        });
      }
    }
  }

  spawnRewardCrate(forcedReward = null, forcedHp = null, position = null) {
    if (this.crates.length >= MAX_CRATES) return null;
    const reward = forcedReward || this.selectReward();
    if (!reward) return null;
    let hp = forcedHp;
    if (hp === null) {
      const dps = this.estimateDps();
      hp = Math.round((dps * rand(1.12, 1.88) + 12) / 2) * 2;
      hp = clamp(hp, 34, 9998);
    }
    const visual = createRewardCrate(reward, hp);
    let x = position?.x;
    let y = position?.y;
    if (x === undefined || y === undefined) {
      x = WORLD.rewardCenterX + rand(-0.12, 0.12);
      y = rand(5.4, 7.1);
    }
    const z = rand(-0.2, 0.35);
    const crate = {
      alive: true,
      targetType: 'crate',
      reward,
      color: reward.color,
      hp,
      maxHp: hp,
      x,
      y,
      centerY: y + 0.15,
      baseX: x,
      z,
      speed: rand(0.32, 0.45),
      phase: rand(0, TAU),
      spawnT: 0.42,
      visual
    };
    visual.group.position.set(x, y, z);
    visual.group.scale.setScalar(0.55);
    this.scene.add(visual.group);
    this.crates.push(crate);
    this.fx.burst(crate.x, y, z, 14, {
      speed: 2.2,
      life: 0.55,
      size: 0.12,
      endScale: 0.01,
      color: reward.color,
      gravity: -0.4,
      drag: 1.6
    });
    this.rings.fire(x, y, 0.5, reward.color, 1.8, 0.45, 0.24, 0.2);
    if (!this.supplyHintShown) {
      this.supplyHintShown = true;
      this.showFeed('滑到军需区 · 击破数字夺取补给', reward.css);
    }
    return crate;
  }

  spawnBossLoot(x) {
    if (this.crates.length >= MAX_CRATES) {
      const old = this.crates[0];
      if (old) {
        old.alive = false;
        this.scene.remove(old.visual.group);
        if (old.visual?.labelTexture) old.visual.labelTexture.dispose();
        this.crates.length = 0;
        this.showFeed('旧补给回收 · 投放暴君战利品', '#ffc75a');
      }
    }
    const reward = this.selectUpgradeReward('legendary');
    if (!reward) return;
    const hp = Math.round((this.estimateDps() * 2.2 + 20) / 2) * 2;
    this.spawnRewardCrate(reward, hp, { x: WORLD.rewardCenterX, y: 6.1 });
  }

  estimateDps() {
    const w = WEAPONS[this.player.weapon];
    const interval = w.fireInterval / this.player.fireRateMul;
    const count = w.count + this.player.extraProjectiles;
    const critFactor = 1 + this.player.crit * (this.player.critMult - 1);
    return (w.damage * this.player.damageMul * count * critFactor) / interval;
  }

  selectReward() {
    const weaponAvailable = this.availableWeapons();
    const mustWeapon = this.run.crates === 0;
    const weaponChance = mustWeapon ? 1 : this.run.crates < 3 ? 0.34 : 0.22;
    if (weaponAvailable.length && chance(weaponChance)) {
      const id = pick(weaponAvailable);
      return this.makeWeaponReward(id);
    }
    return this.selectUpgradeReward();
  }

  availableWeapons() {
    const pending = new Set(
      this.crates
        .filter((crate) => crate.reward?.kind === 'weapon')
        .map((crate) => crate.reward.id)
    );
    return WEAPON_DROPS.filter((id) => {
      if (id === this.player.weapon) return false;
      if (pending.has(id)) return false;
      const weapon = WEAPONS[id];
      if ((id === 'rail' || id === 'plasma') && this.run.level < 3) return false;
      return true;
    });
  }

  makeWeaponReward(id) {
    const weapon = WEAPONS[id];
    const rarity = RARITY_BY_KEY[weapon.rarity] || RARITY_BY_KEY.epic;
    return {
      kind: 'weapon',
      id,
      weapon,
      name: weapon.name,
      icon: weapon.icon,
      desc: `${weapon.type} · ${weapon.desc} · 装甲 +8`,
      rarity: rarity.key,
      rarityName: rarity.name,
      color: rarity.color,
      css: rarity.css
    };
  }

  rollUpgradeRarity() {
    const level = this.run.level;
    const weights = [
      Math.max(22, 57 - level * 3.2),
      28 + level * 0.2,
      12 + level * 1.35,
      2.5 + level * 0.55
    ];
    let roll = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < RARITIES.length; i += 1) {
      roll -= weights[i];
      if (roll <= 0) return RARITIES[i];
    }
    return RARITIES[0];
  }

  selectUpgradeReward(forceRarity = null) {
    const pool = UPGRADES.filter((upgrade) => {
      if (!upgrade.maxStacks) return true;
      return (this.player.stacks[upgrade.id] || 0) < upgrade.maxStacks;
    }).map((upgrade) => {
      let weight = upgrade.weight;
      if (upgrade.id === 'repair' && this.player.armor >= this.player.maxArmor * 0.96) weight *= 0.3;
      return { upgrade, weight };
    });
    if (!pool.length) return null;
    const picked = weightedPick(pool);
    const rarity = forceRarity
      ? RARITY_BY_KEY[forceRarity]
      : this.rollUpgradeRarity();
    const tier = RARITY_INDEX[rarity.key];
    const upgrade = picked.upgrade;
    return {
      kind: 'upgrade',
      id: upgrade.id,
      upgrade,
      tier,
      name: upgrade.name,
      icon: upgrade.icon,
      desc: upgrade.desc[tier],
      value: upgrade.values[tier],
      tag: upgrade.tag,
      rarity: rarity.key,
      rarityName: rarity.name,
      color: rarity.color,
      css: rarity.css
    };
  }

  damageCrate(crate, amount, opts = {}) {
    if (!crate.alive) return;
    crate.hp -= amount;
    crate.visual.setHp(crate.hp);
    const centerY = crate.y + 0.12;
    this.fx.burst(crate.x + rand(-0.3, 0.3), centerY + rand(-0.3, 0.3), 0.68, opts.crit ? 8 : 4, {
      speed: 2.8,
      life: 0.32,
      size: 0.09,
      endScale: 0.01,
      color: opts.crit ? 0xffe48b : crate.color,
      gravity: 1.5,
      drag: 2
    });
    this.audio.crateHit();
    if (crate.hp <= 0) this.breakCrate(crate);
  }

  breakCrate(crate) {
    if (!crate.alive) return;
    crate.alive = false;
    this.run.crates += 1;
    this.run.score += 750;
    this.player.armor = Math.min(this.player.maxArmor, this.player.armor + 7);
    this.crateTimer = Math.max(this.crateTimer, 1.2);
    this.audio.crateBreak();
    this.addShake(0.055);
    this.dom.flashLayer.classList.remove('flash');
    void this.dom.flashLayer.offsetWidth;
    this.dom.flashLayer.classList.add('flash');
    this.spawnExplosion(crate.x, crate.y + 0.1, 0.8, 2.2, crate.color, 36);
    this.rings.fire(crate.x, crate.y, 0.75, crate.color, 4.2, 0.55, 0.65, 0.2);
    this.scene.remove(crate.visual.group);
    const index = this.crates.indexOf(crate);
    if (index >= 0) this.crates.splice(index, 1);
    if (crate.visual?.labelTexture) crate.visual.labelTexture.dispose();
    this.applyReward(crate.reward);
    if (this.aimTarget === crate) {
      this.aimTarget = null;
      this.aimTargetType = null;
    }
  }

  applyReward(reward) {
    if (!reward) return;
    if (reward.kind === 'weapon') {
      this.player.weapon = reward.id;
      this.player.damageMul += 0.05;
      this.player.armor = Math.min(this.player.maxArmor, this.player.armor + 8);
      this.gunner.setWeapon(reward.id);
      this.fireTimer = 0.22;
      this.muzzleLight.color.setHex(reward.color);
    } else {
      const value = reward.value;
      this.player.stacks[reward.id] = (this.player.stacks[reward.id] || 0) + 1;
      switch (reward.id) {
        case 'damage':
          this.player.damageMul += value;
          break;
        case 'rate':
          this.player.fireRateMul = Math.min(4.2, this.player.fireRateMul + value);
          break;
        case 'multishot':
          this.player.extraProjectiles = Math.min(5, this.player.extraProjectiles + value);
          break;
        case 'pierce':
          this.player.extraPierce += value;
          this.player.damageMul += 0.015 * value;
          break;
        case 'crit':
          this.player.crit = Math.min(0.68, this.player.crit + value);
          this.player.critMult += 0.06;
          break;
        case 'explosive':
          this.player.explosive = Math.min(0.65, this.player.explosive + value);
          break;
        case 'frost':
          this.player.frost = Math.min(0.65, this.player.frost + value);
          break;
        case 'drone':
          this.addDrones(value);
          break;
        case 'repair':
          this.player.armor = Math.min(this.player.maxArmor, this.player.armor + value);
          this.rings.fire(this.player.x, -7.2, 0.8, 0x98ff72, 3.2, 0.5, 0.5, 0.22);
          break;
        case 'armor':
          this.player.maxArmor += value;
          this.player.armor += value;
          this.rings.fire(this.player.x, -7.2, 0.8, 0x7defff, 3.6, 0.55, 0.55, 0.25);
          break;
        case 'shield':
          this.player.regen = Math.min(18, this.player.regen + value);
          this.rings.fire(this.player.x, -7.2, 0.8, 0x98ff72, 3, 0.5, 0.45, 0.2);
          break;
        case 'shock':
          this.player.shock = Math.min(3, this.player.shock + value);
          this.shockTimer = Math.min(this.shockTimer, 3.2);
          break;
        default:
          break;
      }
    }
    this.updateHud(true);
    this.updateWeaponUi();
    this.showToast(reward);
    this.addChip(reward);
    this.audio.upgrade(RARITY_INDEX[reward.rarity] || 0);
    this.showFeed(`已获取 <b style="color:${reward.css}">${reward.name}</b>`, reward.css);
    this.addShake(0.04);
  }

  addDrones(count) {
    const target = Math.min(3, this.drones.length + count);
    while (this.drones.length < target) {
      const visual = createDrone();
      this.scene.add(visual.group);
      this.drones.push({
        visual,
        angle: rand(0, TAU),
        cooldown: rand(0.2, 0.8),
        phase: rand(0, TAU)
      });
      this.fx.burst(0, -6.5, 1, 12, {
        speed: 2,
        life: 0.5,
        size: 0.12,
        endScale: 0.02,
        color: 0x65efff,
        gravity: 0,
        drag: 2
      });
    }
    this.player.drones = this.drones.length;
  }

  updateDrones(dt) {
    if (!this.drones.length) return;
    for (let i = 0; i < this.drones.length; i += 1) {
      const drone = this.drones[i];
      drone.angle += dt * (1.15 + i * 0.14);
      const orbitX = this.player.x + Math.sin(drone.angle + i * 1.9) * (1.55 + i * 0.2);
      const orbitY = -7.1 + Math.cos(drone.angle + i * 1.9) * 0.38 + Math.sin(this.time * 2 + i) * 0.05;
      drone.visual.group.position.set(orbitX, orbitY, 0.8 + i * 0.08);
      drone.visual.group.rotation.z = Math.sin(drone.angle) * 0.12;
      drone.visual.rotors.forEach((rotor, j) => {
        rotor.rotation.y += dt * (24 + j * 3);
      });
      drone.cooldown -= dt;
      if (drone.cooldown <= 0) {
        const target = this.findDroneTarget();
        if (target) {
          drone.cooldown = 0.78;
          const damage = 3.4 + this.player.damageMul * 2.6 + this.run.level * 0.55;
          this.damageEnemy(target, damage, { source: 'drone', crit: false, silent: true });
          this.beams.fire(
            drone.visual.group.position.x,
            drone.visual.group.position.y,
            target.x,
            target.y + target.bodyOffset,
            0x65efff,
            0.07,
            0.11,
            0.7,
            0.8
          );
          this.fx.burst(target.x, target.y + target.bodyOffset, 0.7, 2, {
            speed: 1.4,
            life: 0.2,
            size: 0.08,
            endScale: 0.01,
            color: 0x8ff8ff,
            gravity: 0,
            drag: 2
          });
        } else {
          drone.cooldown = 0.4;
        }
      }
    }
  }

  findDroneTarget() {
    let best = null;
    let bestScore = Infinity;
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const score = enemy.y + Math.abs(enemy.x) * 0.1;
      if (score < bestScore) {
        bestScore = score;
        best = enemy;
      }
    }
    return best;
  }

  // ——————————————— firing ———————————————

  getWeaponStats() {
    const def = WEAPONS[this.player.weapon];
    const count = Math.max(1, def.count + this.player.extraProjectiles);
    const interval = def.fireInterval / this.player.fireRateMul;
    const damage = def.damage * this.player.damageMul;
    const critFactor = 1 + this.player.crit * (this.player.critMult - 1);
    const dps = (damage * count * critFactor) / interval;
    return {
      ...def,
      count,
      interval,
      effectiveDamage: damage,
      critFactor,
      dps,
      pierce: def.pierce + this.player.extraPierce
    };
  }

  updateFiring(dt) {
    const stats = this.getWeaponStats();
    this.fireTimer -= dt;
    let guard = 0;
    while (this.fireTimer <= 0 && guard < 3) {
      this.fireWeapon(stats);
      this.fireTimer += stats.interval;
      guard += 1;
    }
    if (this.fireTimer < -stats.interval * 1.5) this.fireTimer = 0;
    this.isFiring = true;
    if (stats.kind === 'flame') {
      this.audio.setFlame(0.16);
    } else {
      this.audio.setFlame(0);
    }
  }

  fireWeapon(stats) {
    const muzzle = this.muzzleWorld;
    let target = this.aimTarget;
    let tx = this.aimPoint.x;
    let ty = this.aimPoint.y;
    if (target) {
      const targetY = target.centerY ?? (target.y + (target.bodyOffset || 0.6));
      const dist = Math.hypot(target.x - muzzle.x, targetY - muzzle.y);
      const travel = stats.kind === 'beam' ? 0 : dist / Math.max(10, stats.speed);
      tx = target.x + (target.vx || 0) * travel;
      ty = targetY + (target.vy || 0) * travel;
    }
    let baseDx = tx - muzzle.x;
    let baseDy = ty - muzzle.y;
    const baseLen = Math.hypot(baseDx, baseDy) || 1;
    baseDx /= baseLen;
    baseDy /= baseLen;

    const spread = stats.spread;
    const count = stats.count;
    const crit = Math.random() < this.player.crit;
    const damage = stats.effectiveDamage * (crit ? this.player.critMult : 1);
    const color = stats.color;
    const pan = clamp(this.aimPoint.x / 4.4, -1, 1);

    if (stats.kind === 'beam') {
      for (let i = 0; i < count; i += 1) {
        const lateral = (i - (count - 1) / 2) * 0.045;
        const dx = baseDx - baseDy * lateral;
        const dy = baseDy + baseDx * lateral;
        this.fireBeam(stats, muzzle, dx, dy, damage, crit);
      }
    } else {
      for (let i = 0; i < count; i += 1) {
        const offset = (i - (count - 1) / 2) * spread;
        const jitterScale = stats.kind === 'flame' ? 1.8 : 0.72;
        const jitter = (Math.random() - 0.5) * spread * jitterScale;
        const angle = Math.atan2(baseDy, baseDx) + offset + jitter;
        this.spawnBullet({
          x: muzzle.x + rand(-0.04, 0.04),
          y: muzzle.y + rand(-0.02, 0.02),
          z: 0.68,
          dx: Math.cos(angle),
          dy: Math.sin(angle),
          stats,
          damage,
          crit,
          color
        });
      }
    }

    this.gunner.fireFlash(stats.kind === 'beam' ? 1.35 : stats.kind === 'orb' ? 0.9 : 0.6);
    this.audio.shoot(stats.sound, pan);
    this.muzzleLight.color.setHex(stats.kind === 'flame' ? 0xff6b23 : stats.color);
    this.muzzleLight.intensity = stats.kind === 'beam' ? 42 : stats.kind === 'flame' ? 16 : 24;
    this.addShake(stats.shake);
    if (stats.kind !== 'flame' && chance(0.35)) {
      this.fx.spawn({
        x: muzzle.x + rand(-0.14, 0.14),
        y: muzzle.y + rand(-0.1, 0.1),
        z: muzzle.z + 0.15,
        vx: rand(-2.6, 2.6),
        vy: rand(-1.2, 1.8),
        vz: rand(-0.2, 0.5),
        life: rand(0.3, 0.55),
        size: 0.055,
        endScale: 0.01,
        color: 0xffc15e,
        gravity: 7,
        drag: 0.4
      });
    }
    if (chance(0.22)) {
      this.smoke.spawn({
        x: muzzle.x,
        y: muzzle.y + 0.1,
        z: muzzle.z,
        vx: rand(-0.1, 0.1),
        vy: rand(0.25, 0.55),
        vz: 0,
        life: 0.5,
        size: 0.16,
        endScale: 0.55,
        color: 0x6c7b83,
        gravity: -0.1,
        drag: 1.4,
        alpha: 0.16
      });
    }
  }

  spawnBullet({ x, y, z, dx, dy, stats, damage, crit, color }) {
    let bullet = null;
    for (let i = 0; i < MAX_BULLETS; i += 1) {
      const candidate = this.bullets[(this.bulletCursor + i) % MAX_BULLETS];
      if (!candidate.active) {
        bullet = candidate;
        break;
      }
    }
    if (!bullet) bullet = this.bullets[this.bulletCursor];
    this.bulletCursor = (this.bulletCursor + 1) % MAX_BULLETS;
    bullet.active = true;
    bullet.hits.clear();
    bullet.x = x;
    bullet.y = y;
    bullet.z = z;
    bullet.px = x;
    bullet.py = y;
    bullet.vx = dx * stats.speed;
    bullet.vy = dy * stats.speed;
    bullet.age = 0;
    bullet.life = stats.kind === 'flame' ? stats.life || 0.55 : 1.7;
    bullet.radius = stats.radius * (crit ? 1.1 : 1);
    bullet.damage = damage;
    bullet.pierce = stats.pierce;
    bullet.kind = stats.kind;
    bullet.color = color;
    bullet.tracerColor = crit ? 0xffe487 : color;
    bullet.crit = crit;
    bullet.explosive = this.player.explosive;
    bullet.frost = this.player.frost;
    bullet.burn = stats.kind === 'flame' ? 2.5 : 0;
    bullet.aoe = stats.aoe || 0;
    bullet.chain = stats.chain || 0;
    bullet.emitT = 0;
    bullet.tracerLength = stats.kind === 'flame' ? 0 : crit ? 0.8 : 0.55;
    if (stats.kind === 'flame') {
      this.fx.burst(x, y, z, 1, {
        speed: 1.5,
        direction: Math.atan2(dy, dx),
        spread: 0.7,
        life: 0.28,
        size: 0.18,
        endScale: 0.02,
        color: chance(0.4) ? 0xffd05c : 0xff6421,
        gravity: -0.6,
        drag: 1.4
      });
    } else if (stats.kind === 'orb') {
      this.fx.spawn({
        x, y, z, vx: dx * 2, vy: dy * 2, vz: 0,
        life: 0.35, size: 0.24, endScale: 0.05, color, gravity: 0, drag: 1.4
      });
    }
    return bullet;
  }

  fireBeam(stats, origin, dx, dy, damage, crit) {
    const maxDist = 26;
    const x2 = origin.x + dx * maxDist;
    const y2 = origin.y + dy * maxDist;
    const candidates = [];
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const cx = enemy.x;
      const cy = enemy.y + enemy.bodyOffset;
      const t = ((cx - origin.x) * dx + (cy - origin.y) * dy);
      if (t < 0 || t > maxDist) continue;
      const px = origin.x + dx * t;
      const py = origin.y + dy * t;
      const dist = Math.hypot(cx - px, cy - py);
      if (dist < enemy.radius + 0.24) {
        candidates.push({ t, enemy, x: px, y: py });
      }
    }
    for (const crate of this.crates) {
      if (!crate.alive) continue;
      const cx = crate.x;
      const cy = crate.y + 0.12;
      const t = ((cx - origin.x) * dx + (cy - origin.y) * dy);
      if (t < 0 || t > maxDist) continue;
      const px = origin.x + dx * t;
      const py = origin.y + dy * t;
      const dist = Math.hypot(cx - px, cy - py);
      if (dist < 0.8) candidates.push({ t, crate, x: px, y: py });
    }
    candidates.sort((a, b) => a.t - b.t);
    let endpoint = maxDist;
    const hitColor = crit ? 0xffe487 : stats.color;
    this.beams.fire(origin.x, origin.y, x2, y2, stats.color, 0.5, 0.22, 0.14, 0.83);
    this.beams.fire(origin.x, origin.y, x2, y2, hitColor, 0.13, 0.14, 0.95, 0.84);
    this.beams.fire(origin.x, origin.y, x2, y2, 0xffffff, 0.03, 0.1, 0.7, 0.85);
    for (const hit of candidates) {
      endpoint = hit.t;
      if (hit.enemy) {
        this.damageEnemy(hit.enemy, damage, { crit, hitX: hit.x, hitY: hit.y, color: hitColor });
        this.fx.burst(hit.x, hit.y, 0.8, crit ? 14 : 8, {
          speed: 4.6,
          life: 0.35,
          size: 0.12,
          endScale: 0.01,
          color: hitColor,
          gravity: 1.4,
          drag: 2
        });
        this.rings.fire(hit.x, hit.y, 0.75, stats.color, 1.1, 0.28, 0.35, 0.1);
      } else if (hit.crate) {
        this.damageCrate(hit.crate, damage, { crit });
      }
    }
    this.fx.burst(origin.x + dx * Math.min(endpoint, 18), origin.y + dy * Math.min(endpoint, 18), 0.8, 16, {
      speed: 4.2,
      direction: Math.atan2(dy, dx),
      spread: 1.7,
      life: 0.4,
      size: 0.12,
      endScale: 0.01,
      color: hitColor,
      gravity: 0,
      drag: 1.6
    });
    this.addShake(0.16);
    this.fx.burst(origin.x, origin.y, 0.85, 10, {
      speed: 3,
      direction: Math.atan2(dy, dx),
      spread: 1.2,
      life: 0.26,
      size: 0.1,
      endScale: 0.01,
      color: 0xcfffff,
      gravity: 0,
      drag: 2
    });
  }

  updateProjectiles(dt) {
    for (const bullet of this.bullets) {
      if (!bullet.active) continue;
      bullet.age += dt;
      if (bullet.age > bullet.life) {
        bullet.active = false;
        if (bullet.kind === 'flame') {
          this.smoke.spawn({
            x: bullet.x, y: bullet.y, z: bullet.z,
            vx: 0, vy: 0.4, vz: 0,
            life: 0.45, size: 0.35, endScale: 0.8, color: 0x25282a,
            gravity: -0.2, drag: 1, alpha: 0.18
          });
        }
        continue;
      }
      bullet.px = bullet.x;
      bullet.py = bullet.y;
      bullet.x += bullet.vx * dt;
      bullet.y += bullet.vy * dt;

      if (bullet.kind === 'flame') {
        bullet.emitT -= dt;
        if (bullet.emitT <= 0) {
          bullet.emitT = 0.024;
          for (let puff = 0; puff < 2; puff += 1) {
            const sidePush = rand(-1.2, 1.2);
            this.fx.spawn({
              x: bullet.x + rand(-0.16, 0.16),
              y: bullet.y + rand(-0.16, 0.16),
              z: bullet.z + rand(-0.1, 0.1),
              vx: bullet.vx * 0.12 - bullet.vy * 0.06 + sidePush,
              vy: bullet.vy * 0.12 + bullet.vx * 0.06 + rand(0.2, 1.1),
              vz: rand(-0.25, 0.25),
              life: rand(0.2, 0.4),
              size: rand(0.26, 0.55),
              endScale: 0.05,
              color: chance(0.38) ? 0xffd968 : chance(0.4) ? 0xff8a2d : 0xff4f1e,
              gravity: -1.1,
              drag: 1.1
            });
          }
          if (chance(0.12)) {
            this.smoke.spawn({
              x: bullet.x, y: bullet.y, z: bullet.z,
              vx: 0, vy: 0.45, vz: 0,
              life: 0.7, size: 0.24, endScale: 0.7, color: 0x2b2622,
              gravity: -0.2, drag: 1, alpha: 0.13
            });
          }
        }
      } else if (bullet.kind === 'orb') {
        bullet.emitT -= dt;
        if (bullet.emitT <= 0) {
          bullet.emitT = 0.03;
          this.fx.spawn({
            x: bullet.x, y: bullet.y, z: bullet.z,
            vx: rand(-0.35, 0.35), vy: rand(-0.35, 0.35), vz: 0,
            life: 0.34, size: 0.2, endScale: 0.02, color: bullet.color,
            gravity: 0, drag: 1.6
          });
        }
      }

      const collisions = [];
      for (const enemy of this.enemies) {
        if (!enemy.alive || bullet.hits.has(enemy)) continue;
        const cy = enemy.y + enemy.bodyOffset;
        const t = segmentCircle(bullet.px, bullet.py, bullet.x, bullet.y, enemy.x, cy, enemy.radius + bullet.radius);
        if (t >= 0) collisions.push({ t, target: enemy, type: 'enemy' });
      }
      for (const crate of this.crates) {
        if (!crate.alive || bullet.hits.has(crate)) continue;
        const cy = crate.y + 0.08;
        const t = segmentCircle(bullet.px, bullet.py, bullet.x, bullet.y, crate.x, cy, 0.78 + bullet.radius);
        if (t >= 0) collisions.push({ t, target: crate, type: 'crate' });
      }
      if (collisions.length) {
        collisions.sort((a, b) => a.t - b.t);
        let stopped = false;
        for (const hit of collisions) {
          if (!hit.target.alive) continue;
          const hx = lerp(bullet.px, bullet.x, hit.t);
          const hy = lerp(bullet.py, bullet.y, hit.t);
          bullet.hits.add(hit.target);
          if (hit.type === 'enemy') {
            this.damageEnemy(hit.target, bullet.damage, {
              crit: bullet.crit,
              hitX: hx,
              hitY: hy,
              color: bullet.color,
              burn: bullet.burn,
              frost: bullet.frost
            });
            if (bullet.chain > 0) this.chainLightning(hit.target, bullet, hx, hy);
            this.fx.burst(hx, hy, bullet.z + 0.08, bullet.crit ? 10 : 5, {
              speed: 3.4,
              life: 0.28,
              size: 0.1,
              endScale: 0.01,
              color: bullet.crit ? 0xffe487 : bullet.color,
              gravity: 1.6,
              drag: 1.8
            });
          } else {
            this.damageCrate(hit.target, bullet.damage, { crit: bullet.crit });
            this.fx.burst(hx, hy, 0.7, bullet.crit ? 9 : 4, {
              speed: 2.8,
              life: 0.3,
              size: 0.1,
              endScale: 0.01,
              color: bullet.crit ? 0xffe487 : bullet.color,
              gravity: 1.4,
              drag: 2
            });
          }
          if (bullet.explosive > 0 && chance(bullet.explosive)) {
            this.explode(hx, hy, 0.75, bullet.aoe > 0 ? bullet.aoe : 1.35, bullet.damage * 0.55, bullet.color);
          }
          if (bullet.aoe > 0) {
            this.explode(hx, hy, 0.78, bullet.aoe, bullet.damage * 0.78, bullet.color);
            stopped = true;
            break;
          }
          bullet.pierce -= 1;
          if (bullet.pierce < 0) {
            stopped = true;
            break;
          }
        }
        if (stopped) bullet.active = false;
      }
      if (bullet.y > 12.5 || bullet.y < -10.2 || bullet.x < -7 || bullet.x > 7) {
        bullet.active = false;
      }
    }
  }

  chainLightning(source, bullet, hx, hy) {
    let current = source;
    const hitList = new Set();
    for (let c = 0; c < bullet.chain; c += 1) {
      let next = null;
      let bestDist = Infinity;
      for (const enemy of this.enemies) {
        if (!enemy.alive || enemy === current || hitList.has(enemy)) continue;
        const dist = Math.hypot(enemy.x - current.x, enemy.y + enemy.bodyOffset - (current.y + current.bodyOffset));
        if (dist < bestDist && dist < 3.4) {
          bestDist = dist;
          next = enemy;
        }
      }
      if (!next) break;
      hitList.add(next);
      const sx = current === source ? hx : current.x;
      const sy = current === source ? hy : current.y + current.bodyOffset;
      const tx = next.x;
      const ty = next.y + next.bodyOffset;
      const points = makeArrowPoints(sx, sy, tx, ty, 0.12);
      this.arcs.fire(points, 0xc49bff, 0.15, 0.8);
      this.arcs.fire(makeArrowPoints(sx, sy, tx, ty, 0.26), 0xffffff, 0.1, 0.45);
      this.damageEnemy(next, bullet.damage * 0.52, { crit: false, hitX: tx, hitY: ty, color: 0xc49bff, silent: true });
      this.fx.burst(tx, ty, 0.78, 3, {
        speed: 2,
        life: 0.22,
        size: 0.08,
        endScale: 0.01,
        color: 0xc49bff,
        gravity: 0,
        drag: 2
      });
      current = next;
    }
  }

  explode(x, y, z, radius, damage, color) {
    this.rings.fire(x, y, z, color, radius * 2.4, 0.4, 0.5, 0.15);
    this.fx.burst(x, y, z, 24, {
      speed: 6,
      life: 0.5,
      size: 0.14,
      endScale: 0.01,
      color,
      gravity: 2,
      drag: 1.5
    });
    this.fx.burst(x, y, z, 12, {
      speed: 2,
      life: 0.7,
      size: 0.2,
      endScale: 0.5,
      color: 0xffd36e,
      gravity: -0.5,
      drag: 1.2
    });
    this.smoke.burst(x, y, z, 8, {
      speed: 1.7,
      life: 1.1,
      size: 0.4,
      endScale: 1.3,
      color: 0x28272a,
      gravity: -0.3,
      drag: 1.2,
      alpha: 0.22
    });
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const dist = Math.hypot(enemy.x - x, enemy.y + enemy.bodyOffset - y);
      if (dist > radius + enemy.radius) continue;
      const falloff = 1 - clamp((dist - enemy.radius) / radius, 0, 1) * 0.45;
      this.damageEnemy(enemy, damage * falloff, { source: 'aoe', hitX: enemy.x, hitY: enemy.y + enemy.bodyOffset, color });
    }
    for (const crate of this.crates) {
      if (!crate.alive) continue;
      const dist = Math.hypot(crate.x - x, crate.y + 0.1 - y);
      if (dist < radius + 0.7) this.damageCrate(crate, damage * 0.75, {});
    }
    this.addShake(0.04);
  }

  spawnExplosion(x, y, z, radius, color, count = 24) {
    this.rings.fire(x, y, z, color, radius * 2.2, 0.42, 0.5, 0.18);
    this.fx.burst(x, y, z, count, {
      speed: 5.5,
      life: 0.65,
      size: 0.16,
      endScale: 0.01,
      color,
      gravity: 2.4,
      drag: 1.5
    });
    this.fx.burst(x, y, z, Math.floor(count * 0.45), {
      speed: 2,
      life: 0.9,
      size: 0.2,
      endScale: 0.8,
      color: 0x7e201f,
      gravity: 0.4,
      drag: 1.3
    });
    const smokeCount = Math.min(18, Math.max(4, Math.floor(count / 3)));
    this.smoke.burst(x, y, z, smokeCount, {
      speed: 1.5,
      life: 1.2,
      size: 0.35,
      endScale: 1.1,
      color: 0x282325,
      gravity: -0.2,
      drag: 1.2,
      alpha: 0.25
    });
  }

  // ——————————————— damage / upgrades ———————————————

  damageEnemy(enemy, amount, opts = {}) {
    if (!enemy.alive) return;
    enemy.hp -= amount;
    enemy.hitFlash = 0.16;
    if (opts.frost) {
      if (enemy.slowT <= 0.05) {
        this.rings.fire(enemy.x, enemy.y + 0.45, enemy.z + 0.2, 0x8ff7ff, 1.05, 0.3, 0.3, 0.16);
      }
      enemy.slowT = Math.max(enemy.slowT, 1.5);
    }
    if (opts.burn) {
      enemy.burnT = Math.max(enemy.burnT, opts.burn);
      enemy.burnDps = Math.max(enemy.burnDps, amount * 0.52);
    }
    if (enemy.hp <= 0) {
      this.killEnemy(enemy, opts.source || 'shot');
      return;
    }
    enemy.model.updateHealth(enemy.hp, enemy.maxHp);
    if (enemy === this.boss) this.updateBossBar();
    if (opts.hitX !== undefined) {
      const amountParticles = opts.crit ? 7 : 3;
      this.fx.burst(opts.hitX, opts.hitY, 0.76, amountParticles, {
        speed: 2.4,
        life: 0.25,
        size: 0.08,
        endScale: 0.01,
        color: opts.color || 0xffffff,
        gravity: 1.4,
        drag: 1.9
      });
    }
    if (!opts.silent) {
      const now = performance.now();
      if (now - this.lastHitSound > 45) {
        this.lastHitSound = now;
        this.audio.hit(!!opts.crit);
      }
    }
  }

  updateShockwave(dt) {
    if (this.player.shock <= 0) return;
    this.shockTimer -= dt;
    if (this.shockTimer > 0) return;
    const nearby = this.enemies.filter((enemy) => Math.hypot(enemy.x - this.player.x, enemy.y + enemy.bodyOffset - (DEFENSE_LINE - 0.4)) < 6.4);
    if (!nearby.length) {
      this.shockTimer = 1;
      return;
    }
    this.shockTimer = Math.max(4, 9.5 - this.player.shock * 1.6);
    this.audio.shockwave();
    this.addShake(0.14);
    this.rings.fire(this.player.x, -7.4, 0.8, 0x6ff4ff, 7.2, 0.6, 0.65, 0.3);
    this.rings.fire(this.player.x, -7.4, 0.82, 0xb7fbff, 4.8, 0.4, 0.6, 0.2);
    const damage = 14 + this.player.shock * 12 + this.run.level * 2.2;
    for (const enemy of nearby) {
      this.damageEnemy(enemy, damage, { source: 'shock', hitX: enemy.x, hitY: enemy.y + enemy.bodyOffset, color: 0x8ff7ff });
      if (enemy.alive && enemy.id !== 'boss') {
        enemy.y += 1.1;
        enemy.attacking = false;
        enemy.attackT = rand(0.5, 1.1);
      }
    }
    this.fx.burst(this.player.x, -7.2, 0.8, 30, {
      speed: 7,
      life: 0.6,
      size: 0.13,
      endScale: 0.01,
      color: 0x72f2ff,
      gravity: 0,
      drag: 1.2
    });
  }

  updateRegen(dt) {
    if (this.player.regen <= 0) return;
    if (this.run.noDamage >= this.player.regenDelay && this.player.armor < this.player.maxArmor) {
      this.player.armor = Math.min(this.player.maxArmor, this.player.armor + this.player.regen * dt);
    }
  }

  updateCombo(dt) {
    if (this.run.comboTimer > 0) {
      this.run.comboTimer -= dt;
      if (this.run.comboTimer <= 0) {
        this.run.combo = 0;
        this.dom.comboBadge.classList.remove('show');
      } else if (this.run.combo >= 2) {
        this.dom.comboBadge.classList.add('show');
        this.dom.comboNum.textContent = String(this.run.combo);
      }
    }
  }

  // ——————————————— UI ———————————————

  updateHud(force = false) {
    const armorPct = clamp(this.player.armor / this.player.maxArmor, 0, 1);
    this.dom.armorNum.textContent = String(Math.ceil(this.player.armor));
    this.dom.armorFill.style.width = `${armorPct * 100}%`;
    this.dom.armorMeter.classList.toggle('low', armorPct < 0.3);
    this.dom.scoreNum.textContent = formatScore(this.run.score);
    this.dom.timeNum.textContent = formatTime(this.run.time);
    this.dom.killsNum.textContent = String(this.run.kills);
    this.dom.threatNum.textContent = String(this.run.level).padStart(2, '0');
    this.dom.threatKills.textContent = `${this.run.levelKills} / ${this.run.killGoal}`;
    this.dom.threatFill.style.width = `${clamp(this.run.levelKills / this.run.killGoal, 0, 1) * 100}%`;
    this.updateWeaponUi();
    if (force) {
      if (this.run.combo >= 2) {
        this.dom.comboBadge.classList.add('show');
        this.dom.comboNum.textContent = String(this.run.combo);
      } else {
        this.dom.comboBadge.classList.remove('show');
      }
    }
    const dps = Math.round(this.estimateDps());
    this.dom.dpsNum.textContent = String(dps);
  }

  updateWeaponUi() {
    const weapon = WEAPONS[this.player.weapon];
    this.dom.weaponIcon.textContent = weapon.icon;
    this.dom.weaponIcon.style.color = weapon.css;
    this.dom.weaponIcon.style.textShadow = `0 0 12px ${weapon.css}`;
    this.dom.weaponName.textContent = weapon.name;
    this.dom.weaponMeta.textContent = `${weapon.type} · DPS ${Math.round(this.estimateDps())}`;
    this.dom.dpsNum.textContent = String(Math.round(this.estimateDps()));
    document.documentElement.style.setProperty('--weapon-accent', weapon.css);
  }

  showToast(reward) {
    const toast = this.dom.toast;
    toast.style.setProperty('--rc', reward.css);
    this.dom.toastRarity.textContent = reward.rarityName || RARITY_BY_KEY[reward.rarity]?.name || '补给';
    this.dom.toastIcon.textContent = reward.icon;
    this.dom.toastName.textContent = reward.name;
    this.dom.toastDesc.textContent = reward.desc;
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  addChip(reward) {
    if (reward.kind === 'weapon') return;
    const count = (this.chipsById[reward.id] || 0) + 1;
    this.chipsById[reward.id] = count;
    let chip = this.dom.chips.querySelector(`[data-chip="${reward.id}"]`);
    if (!chip) {
      chip = document.createElement('span');
      chip.dataset.chip = reward.id;
      chip.className = `chip rarity-${reward.rarity}`;
      chip.title = reward.name;
      this.dom.chips.appendChild(chip);
    } else if (reward.rarity !== 'common') {
      chip.className = `chip rarity-${reward.rarity}`;
    }
    chip.textContent = count > 1 ? `${reward.icon}×${count}` : reward.icon;
    while (this.dom.chips.children.length > 7) {
      const first = this.dom.chips.firstChild;
      if (first?.dataset?.chip) delete this.chipsById[first.dataset.chip];
      this.dom.chips.removeChild(first);
    }
  }

  rebuildChips() {
    this.dom.chips.innerHTML = '';
    this.chipsById = {};
  }

  showAlert(kicker, text, level, danger = false) {
    this.dom.alertKicker.textContent = kicker;
    this.dom.alertText.textContent = text;
    this.dom.alertLevel.textContent = String(level);
    this.dom.alertBanner.classList.toggle('danger', danger);
    this.dom.alertBanner.classList.remove('show');
    void this.dom.alertBanner.offsetWidth;
    this.dom.alertBanner.classList.add('show');
    clearTimeout(this.alertTimer);
    this.alertTimer = setTimeout(() => this.dom.alertBanner.classList.remove('show'), 2350);
  }

  showFeed(html, color = '#8aa2b1') {
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.style.setProperty('--fc', color);
    item.innerHTML = html;
    this.dom.eventFeed.appendChild(item);
    while (this.dom.eventFeed.children.length > 4) this.dom.eventFeed.removeChild(this.dom.eventFeed.firstChild);
    setTimeout(() => item.remove(), 3000);
  }

  // ——————————————— debug helpers ———————————————
  debugSpawnEnemy(type = 'walker') {
    return this.spawnEnemy(type);
  }

  debugSpawnCrate() {
    return this.spawnRewardCrate(null, 80);
  }

  debugSetLevel(level) {
    this.run.level = level;
    this.updateHud(true);
  }

  debugKillAll() {
    for (const enemy of this.enemies) this.damageEnemy(enemy, 999999, { silent: true });
  }
}
