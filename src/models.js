import * as THREE from 'three';
import { mergeGeometries } from './BufferGeometryUtils.js';
import { createGlowTexture, createShadowTexture, createLabelTexture } from './utils.js';
import { ENEMY_TYPES, RARITY_BY_KEY, WEAPONS } from './data.js';

const glowTexture = new THREE.CanvasTexture(createGlowTexture(128));
glowTexture.colorSpace = THREE.SRGBColorSpace;
const shadowTexture = new THREE.CanvasTexture(createShadowTexture());
shadowTexture.colorSpace = THREE.SRGBColorSpace;

const baseShadowMat = new THREE.MeshBasicMaterial({
  map: shadowTexture,
  transparent: true,
  opacity: 0.55,
  depthWrite: false
});
const shadowGeo = new THREE.PlaneGeometry(1.2, 0.62);

const unitBox = new THREE.BoxGeometry(1, 1, 1);
const unitSphere = new THREE.SphereGeometry(1, 12, 10);
const unitCylinder = new THREE.CylinderGeometry(1, 1, 1, 10);
const unitCapsule = new THREE.CapsuleGeometry(1, 1.2, 4, 8);
const unitTorus = new THREE.TorusGeometry(1, 0.08, 6, 20);

function addMesh(parent, geometry, material, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.rotation.set(...rotation);
  parent.add(mesh);
  return mesh;
}

function makeGlowSprite(color, scale = 1, opacity = 0.8) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(scale, scale, 1);
  sprite.renderOrder = 9;
  return sprite;
}

// ————————————————————————————————————————————————
// GUNNER
// ————————————————————————————————————————————————

export function createGunner() {
  const root = new THREE.Group();
  root.position.set(0, -8.55, 0.15);
  root.scale.setScalar(1.09);

  const armorMat = new THREE.MeshStandardMaterial({ color: 0x3a4b59, metalness: 0.68, roughness: 0.34 });
  const armorDark = new THREE.MeshStandardMaterial({ color: 0x18242f, metalness: 0.62, roughness: 0.48 });
  const clothMat = new THREE.MeshStandardMaterial({ color: 0x24313d, metalness: 0.05, roughness: 0.9 });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xa5876c, metalness: 0.05, roughness: 0.74 });
  const visorMat = new THREE.MeshBasicMaterial({ color: 0x7dffff });
  const accentMat = new THREE.MeshBasicMaterial({ color: 0x63f2ff });
  const warningMat = new THREE.MeshBasicMaterial({ color: 0xff7255 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x495b68, metalness: 0.85, roughness: 0.27 });

  // platform / armored footplate
  addMesh(root, unitBox, armorDark, [0, 0.1, 0], [2.45, 0.34, 2.2]);
  addMesh(root, unitBox, armorMat, [0, 0.33, 0], [1.9, 0.18, 1.7]);
  addMesh(root, unitBox, steelMat, [0, 0.42, 0.6], [1.75, 0.06, 0.28]);
  addMesh(root, unitBox, warningMat, [0, 0.42, 0.72], [1.55, 0.025, 0.025]);
  for (const side of [-1, 1]) {
    addMesh(root, unitBox, armorMat, [side * 0.98, 0.56, 0.42], [0.34, 0.55, 0.75], [0, 0, side * -0.12]);
    addMesh(root, unitBox, armorDark, [side * 0.9, 0.48, -0.45], [0.38, 0.3, 0.4]);
    addMesh(root, unitBox, warningMat, [side * 0.9, 0.62, -0.25], [0.2, 0.02, 0.02]);
  }
  // little deck lights
  for (let i = 0; i < 4; i += 1) {
    addMesh(root, unitBox, i % 2 ? accentMat : warningMat, [-1.02 + i * 0.68, 0.53, 1.06], [0.2, 0.025, 0.03]);
  }

  const bodyPivot = new THREE.Group();
  bodyPivot.position.set(0, 0.5, 0);
  root.add(bodyPivot);

  // legs are mostly hidden by the barricade
  for (const side of [-1, 1]) {
    const leg = addMesh(bodyPivot, unitCapsule, clothMat, [side * 0.2, 0.28, 0], [0.16, 0.43, 0.18]);
    leg.rotation.z = side * 0.06;
    addMesh(bodyPivot, unitBox, armorDark, [side * 0.2, 0.3, 0.18], [0.27, 0.42, 0.1], [0.1, 0, 0]);
    addMesh(bodyPivot, unitBox, steelMat, [side * 0.21, -0.08, 0.08], [0.4, 0.2, 0.76]);
  }

  // torso
  const torso = new THREE.Group();
  torso.position.set(0, 1.12, 0);
  bodyPivot.add(torso);
  addMesh(torso, unitCapsule, clothMat, [0, 0, 0], [0.4, 0.4, 0.32]);
  addMesh(torso, unitBox, armorMat, [0, 0.17, 0.12], [0.72, 0.55, 0.34], [0.06, 0, 0]);
  addMesh(torso, unitBox, armorDark, [0, -0.04, 0.28], [0.88, 0.2, 0.18], [-0.08, 0, 0]);
  addMesh(torso, unitBox, accentMat, [0, 0.31, 0.32], [0.25, 0.035, 0.025]);
  addMesh(torso, unitBox, steelMat, [0.35, 0.08, 0.29], [0.15, 0.22, 0.07], [0, 0, -0.18]);
  addMesh(torso, unitBox, warningMat, [-0.33, 0.12, 0.31], [0.08, 0.14, 0.025]);

  // shoulder pads
  for (const side of [-1, 1]) {
    const pad = addMesh(torso, unitSphere, armorMat, [side * 0.51, 0.27, 0.02], [0.3, 0.23, 0.4]);
    pad.rotation.z = side * -0.22;
    addMesh(torso, unitBox, accentMat, [side * 0.51, 0.37, 0.18], [0.12, 0.022, 0.02]);
  }

  // head
  const head = new THREE.Group();
  head.position.set(0, 0.82, 0.15);
  torso.add(head);
  addMesh(head, unitSphere, skinMat, [0, 0, 0], [0.27, 0.3, 0.26]);
  addMesh(head, unitSphere, armorDark, [0, 0.08, -0.015], [0.34, 0.27, 0.31]);
  const visor = addMesh(head, unitBox, visorMat, [0, 0.02, 0.265], [0.4, 0.13, 0.04], [0.04, 0, 0]);
  addMesh(head, unitBox, armorMat, [0, -0.11, 0.22], [0.29, 0.13, 0.1]);
  addMesh(head, unitBox, armorDark, [0, 0.2, 0], [0.22, 0.09, 0.22]);
  addMesh(head, unitBox, warningMat, [0.2, 0.12, 0.05], [0.035, 0.07, 0.035]);
  const antenna = addMesh(head, unitCylinder, steelMat, [0.17, 0.34, -0.06], [0.012, 0.23, 0.012], [0, 0, -0.24]);
  addMesh(head, unitSphere, warningMat, [0.22, 0.46, -0.06], [0.028, 0.028, 0.028]);
  const faceGlow = makeGlowSprite(0x7dffff, 0.62, 0.42);
  faceGlow.position.set(0, 0.02, 0.31);
  head.add(faceGlow);

  // backpack
  addMesh(torso, unitBox, armorDark, [0, 0.05, -0.34], [0.56, 0.6, 0.24]);
  addMesh(torso, unitBox, armorMat, [0.37, 0.04, -0.4], [0.14, 0.3, 0.12]);
  addMesh(torso, unitBox, accentMat, [0.37, -0.02, -0.46], [0.1, 0.025, 0.02]);

  // torso glow
  const torsoGlow = makeGlowSprite(0x54eaff, 0.8, 0.3);
  torsoGlow.position.set(0, 0.18, 0.4);
  torso.add(torsoGlow);

  // ————— turret —————
  const turret = new THREE.Group();
  turret.position.set(0.14, 1.88, 0.26);
  bodyPivot.add(turret);
  addMesh(turret, unitCylinder, armorDark, [0, -0.1, 0], [0.36, 0.14, 0.36]);
  addMesh(turret, unitCylinder, steelMat, [0, 0.03, 0], [0.26, 0.08, 0.26]);
  addMesh(turret, unitTorus, accentMat, [0, -0.04, 0.02], [0.3, 0.3, 0.3], [Math.PI / 2, 0, 0]);
  // ammo belt
  const beltMat = new THREE.MeshStandardMaterial({ color: 0xb18a47, metalness: 0.8, roughness: 0.32 });
  for (let i = 0; i < 6; i += 1) {
    addMesh(turret, unitCylinder, beltMat, [0.45 + i * 0.01, -0.02 - i * 0.035, -0.16 + i * 0.01], [0.035, 0.1, 0.035], [0.2, 0, 0.25]);
  }

  // arms are attached to the turret so hands follow the weapon
  for (const side of [-1, 1]) {
    const armPivot = new THREE.Group();
    armPivot.position.set(side * 0.32, 0.04, 0.02);
    turret.add(armPivot);
    const upper = addMesh(armPivot, unitCapsule, clothMat, [side * 0.16, 0.18, 0.08], [0.13, 0.24, 0.13], [0, 0, side * -0.7]);
    upper.rotation.x = 0.2;
    addMesh(armPivot, unitBox, armorMat, [side * 0.32, 0.33, 0.11], [0.22, 0.17, 0.22], [0, 0, side * -0.15]);
    const forearm = addMesh(armPivot, unitCapsule, skinMat, [side * 0.28, 0.48, 0.18], [0.11, 0.22, 0.11], [0.1, 0, side * -0.15]);
    forearm.rotation.x = 0.4;
    addMesh(armPivot, unitBox, armorDark, [side * 0.3, 0.54, 0.27], [0.18, 0.1, 0.18]);
  }

  const variants = {};
  const muzzles = {};
  const flashes = {};

  function createVariantCommon(id) {
    const variant = new THREE.Group();
    const color = WEAPONS[id].color;
    const glowMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const lightMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
    turret.add(variant);
    variant.visible = false;
    variants[id] = variant;

    const muzzle = new THREE.Object3D();
    muzzle.position.set(0, 1.86, 0.08);
    variant.add(muzzle);
    muzzles[id] = muzzle;

    const flash = makeGlowSprite(color, 0.85, 0);
    flash.position.copy(muzzle.position);
    flash.visible = false;
    variant.add(flash);
    flashes[id] = flash;

    return { variant, color, glowMat, lightMat, muzzle, flash };
  }

  // VULCAN
  {
    const { variant, color, glowMat, lightMat } = createVariantCommon('vulcan');
    addMesh(variant, unitBox, armorDark, [0, 0.42, 0], [0.56, 0.65, 0.46]);
    addMesh(variant, unitBox, armorMat, [0, 0.44, 0.17], [0.4, 0.5, 0.2]);
    addMesh(variant, unitBox, steelMat, [0, 0.85, 0], [0.3, 0.22, 0.3]);
    addMesh(variant, unitBox, accentMat, [0, 0.68, 0.27], [0.18, 0.03, 0.025]);
    addMesh(variant, unitCylinder, steelMat, [0.42, 0.38, -0.02], [0.17, 0.2, 0.17], [0, 0, Math.PI / 2]);
    addMesh(variant, unitTorus, glowMat, [0.57, 0.38, -0.02], [0.15, 0.15, 0.15], [0, Math.PI / 2, 0]);
    addMesh(variant, unitCylinder, steelMat, [-0.38, 0.47, 0.05], [0.06, 0.32, 0.06], [0, 0, Math.PI / 2]);
    addMesh(variant, unitBox, warningMat, [-0.4, 0.65, 0.18], [0.1, 0.025, 0.02]);

    const barrelGroup = new THREE.Group();
    barrelGroup.position.set(0, 0.95, 0);
    variant.add(barrelGroup);
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0x4c5d68, metalness: 0.95, roughness: 0.2 });
    for (let i = 0; i < 6; i += 1) {
      const angle = (i / 6) * Math.PI * 2;
      addMesh(barrelGroup, unitCylinder, barrelMat, [Math.cos(angle) * 0.13, 0.47, Math.sin(angle) * 0.13], [0.035, 0.95, 0.035]);
    }
    addMesh(barrelGroup, unitTorus, steelMat, [0, 0.12, 0], [0.22, 0.22, 0.22], [Math.PI / 2, 0, 0]);
    addMesh(barrelGroup, unitTorus, steelMat, [0, 0.85, 0], [0.2, 0.2, 0.2], [Math.PI / 2, 0, 0]);
    addMesh(barrelGroup, unitTorus, glowMat, [0, 0.93, 0], [0.17, 0.17, 0.17], [Math.PI / 2, 0, 0]);
    addMesh(barrelGroup, unitBox, lightMat, [0, 0.45, 0.24], [0.06, 0.45, 0.02]);
    variant.userData.spin = barrelGroup;

    const underGlow = makeGlowSprite(color, 1.15, 0.22);
    underGlow.position.set(0, 0.55, 0.42);
    variant.add(underGlow);
  }

  // PYRO
  {
    const { variant, color, glowMat, lightMat } = createVariantCommon('pyro');
    addMesh(variant, unitBox, armorDark, [0, 0.4, 0], [0.64, 0.58, 0.5]);
    addMesh(variant, unitBox, armorMat, [0, 0.47, 0.2], [0.46, 0.4, 0.18]);
    addMesh(variant, unitBox, warningMat, [0, 0.7, 0.28], [0.2, 0.03, 0.025]);
    addMesh(variant, unitCylinder, steelMat, [0, 0.98, 0], [0.13, 0.52, 0.13]);
    addMesh(variant, unitCylinder, new THREE.MeshStandardMaterial({ color: 0xd8622a, emissive: 0x882400, emissiveIntensity: 0.5, metalness: 0.6, roughness: 0.35 }), [0, 1.37, 0], [0.17, 0.42, 0.17]);
    addMesh(variant, unitTorus, glowMat, [0, 1.57, 0], [0.24, 0.24, 0.24], [Math.PI / 2, 0, 0]);
    addMesh(variant, unitBox, lightMat, [0, 1.58, 0.2], [0.3, 0.02, 0.02]);
    // fuel tanks
    for (const side of [-1, 1]) {
      addMesh(variant, unitCapsule, new THREE.MeshStandardMaterial({ color: 0x613323, metalness: 0.65, roughness: 0.4 }), [side * 0.38, 0.7, -0.1], [0.14, 0.24, 0.14], [side * 0.1, 0, side * -0.1]);
      addMesh(variant, unitTorus, glowMat, [side * 0.38, 0.84, -0.1], [0.14, 0.14, 0.14], [Math.PI / 2, 0, 0]);
    }
    addMesh(variant, unitCylinder, steelMat, [-0.48, 0.45, 0.05], [0.06, 0.36, 0.06], [0, 0, Math.PI / 2]);
    const pilot = makeGlowSprite(0xff7a26, 0.55, 0.7);
    pilot.position.set(0, 1.78, 0.1);
    variant.add(pilot);
    const under = makeGlowSprite(0xff6a22, 1.0, 0.24);
    under.position.set(0, 0.9, 0.42);
    variant.add(under);
  }

  // RAIL
  {
    const { variant, color, glowMat, lightMat } = createVariantCommon('rail');
    addMesh(variant, unitBox, armorDark, [0, 0.42, 0], [0.66, 0.62, 0.5]);
    addMesh(variant, unitBox, armorMat, [0, 0.5, 0.2], [0.48, 0.45, 0.18]);
    addMesh(variant, unitBox, steelMat, [0, 1.25, 0], [0.17, 1.1, 0.22]);
    for (const side of [-1, 1]) {
      addMesh(variant, unitBox, steelMat, [side * 0.11, 1.3, 0], [0.045, 1.3, 0.16]);
      addMesh(variant, unitBox, lightMat, [side * 0.14, 1.3, 0.09], [0.018, 1.05, 0.02]);
      addMesh(variant, unitBox, armorMat, [side * 0.26, 1.0, 0], [0.15, 0.55, 0.18], [0, 0, side * 0.06]);
    }
    for (let i = 0; i < 4; i += 1) {
      addMesh(variant, unitTorus, glowMat, [0, 0.92 + i * 0.24, 0], [0.24, 0.24, 0.24], [Math.PI / 2, 0, 0]);
    }
    addMesh(variant, unitBox, armorDark, [0.43, 0.65, -0.08], [0.3, 0.3, 0.28]);
    addMesh(variant, unitBox, glowMat, [0.43, 0.65, 0.08], [0.16, 0.08, 0.02]);
    addMesh(variant, unitCylinder, steelMat, [-0.42, 0.45, 0], [0.06, 0.4, 0.06], [0, 0, Math.PI / 2]);
    const under = makeGlowSprite(color, 1.1, 0.22);
    under.position.set(0, 0.7, 0.42);
    variant.add(under);
  }

  // ARC
  {
    const { variant, color, glowMat, lightMat } = createVariantCommon('arc');
    addMesh(variant, unitBox, armorDark, [0, 0.4, 0], [0.6, 0.56, 0.46]);
    addMesh(variant, unitBox, armorMat, [0, 0.48, 0.18], [0.42, 0.4, 0.17]);
    addMesh(variant, unitBox, lightMat, [0, 0.62, 0.28], [0.22, 0.03, 0.02]);
    addMesh(variant, unitCylinder, steelMat, [0, 1.06, 0], [0.07, 0.7, 0.07]);
    for (let i = 0; i < 3; i += 1) {
      addMesh(variant, unitTorus, glowMat, [0, 0.87 + i * 0.24, 0], [0.23 - i * 0.03, 0.23 - i * 0.03, 0.23 - i * 0.03], [Math.PI / 2, 0, 0]);
    }
    for (const side of [-1, 1]) {
      addMesh(variant, unitSphere, glowMat, [side * 0.29, 1.15, 0], [0.09, 0.09, 0.09]);
      addMesh(variant, unitCylinder, steelMat, [side * 0.29, 0.72, 0], [0.035, 0.42, 0.035], [0, 0, side * 0.28]);
      addMesh(variant, unitTorus, steelMat, [side * 0.36, 0.62, 0], [0.1, 0.1, 0.1], [Math.PI / 2, 0, 0]);
    }
    addMesh(variant, unitSphere, glowMat, [0, 1.43, 0], [0.12, 0.12, 0.12]);
    addMesh(variant, unitCylinder, steelMat, [-0.42, 0.44, 0], [0.06, 0.4, 0.06], [0, 0, Math.PI / 2]);
    const under = makeGlowSprite(color, 1.0, 0.24);
    under.position.set(0, 0.8, 0.4);
    variant.add(under);
  }

  // PLASMA
  {
    const { variant, color, glowMat, lightMat } = createVariantCommon('plasma');
    addMesh(variant, unitBox, armorDark, [0, 0.4, 0], [0.68, 0.6, 0.5]);
    addMesh(variant, unitBox, armorMat, [0, 0.45, 0.21], [0.48, 0.4, 0.18]);
    addMesh(variant, unitCylinder, steelMat, [0, 0.98, 0], [0.21, 0.58, 0.21]);
    addMesh(variant, unitCylinder, new THREE.MeshStandardMaterial({ color: 0x233d25, emissive: 0x1e5c20, emissiveIntensity: 0.8, metalness: 0.6, roughness: 0.35 }), [0, 1.3, 0], [0.26, 0.45, 0.26]);
    addMesh(variant, unitTorus, glowMat, [0, 1.5, 0], [0.3, 0.3, 0.3], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 3; i += 1) {
      addMesh(variant, unitBox, armorMat, [0, 0.93 + i * 0.18, 0], [0.5, 0.04, 0.5], [0, 0, 0]);
    }
    addMesh(variant, unitSphere, glowMat, [0, 1.19, 0], [0.14, 0.14, 0.14]);
    for (const side of [-1, 1]) {
      addMesh(variant, unitBox, lightMat, [side * 0.27, 1.15, 0.18], [0.025, 0.35, 0.02]);
    }
    addMesh(variant, unitCylinder, steelMat, [-0.42, 0.44, 0], [0.06, 0.4, 0.06], [0, 0, Math.PI / 2]);
    const under = makeGlowSprite(color, 1.15, 0.26);
    under.position.set(0, 0.85, 0.12);
    variant.add(under);
  }

  let activeWeapon = 'vulcan';
  let spinSpeed = 0;
  let recoil = 0;
  let flashTime = 0;
  let flashLife = 0;

  function setWeapon(id) {
    if (!variants[id]) return;
    Object.values(variants).forEach((v) => { v.visible = false; });
    Object.values(flashes).forEach((f) => { f.visible = false; });
    variants[id].visible = true;
    activeWeapon = id;
    spinSpeed = 0;
  }

  function fireFlash(power = 1) {
    const flash = flashes[activeWeapon];
    if (!flash) return;
    flash.visible = true;
    flash.material.opacity = Math.min(1, 0.55 + power * 0.4);
    flash.scale.setScalar(0.7 + power * 0.55);
    flashTime = 0;
    flashLife = 0.065 + power * 0.03;
    recoil = Math.min(1, recoil + 0.45 + power * 0.4);
    spinSpeed = Math.min(28, spinSpeed + 8);
  }

  function update(dt, time, aimAngle, firing, active) {
    // turret aims directly at the reticle; clamp to a plausible mechanical arc
    const clamped = THREE.MathUtils.clamp(aimAngle, -1.34, 1.34);
    turret.rotation.z = -clamped;
    turret.rotation.x = -0.03;
    bodyPivot.rotation.z = clamped * 0.075;
    head.rotation.z = clamped * 0.06 + Math.sin(time * 1.2) * 0.006;
    torso.position.y = 1.12 + Math.sin(time * 1.8) * 0.008;

    recoil = Math.max(0, recoil - dt * 7.5);
    spinSpeed = Math.max(0, spinSpeed - dt * 17);
    const activeVariant = variants[activeWeapon];
    if (activeVariant) activeVariant.position.y = -recoil * 0.055;

    const spin = activeVariant?.userData.spin;
    if (spin) spin.rotation.y += (spinSpeed + (firing ? 5 : 0)) * dt;

    if (flashTime < flashLife) {
      flashTime += dt;
      const flash = flashes[activeWeapon];
      if (flash) {
        const k = 1 - flashTime / flashLife;
        flash.material.opacity = Math.max(0, k);
        flash.scale.setScalar((0.7 + (1 - k) * 1.4) * 0.8);
      }
    } else {
      const flash = flashes[activeWeapon];
      if (flash) flash.visible = false;
    }

    visor.material.color.setHex(active ? 0x6ff4ff : 0x3b5860);
    if (active) {
      visor.material.color.multiplyScalar(1 + Math.sin(time * 4) * 0.035);
    }
  }

  setWeapon('vulcan');

  return {
    root,
    torso,
    head,
    turret,
    muzzles,
    activeWeapon: () => activeWeapon,
    setWeapon,
    fireFlash,
    update,
    muzzleFlashLight: null
  };
}

// ————————————————————————————————————————————————
// ZOMBIES
// ————————————————————————————————————————————————

const skinColors = {
  walker: 0x677753,
  runner: 0x94724c,
  brute: 0x4e6049,
  spitter: 0x587553,
  boss: 0x5c3036
};
const clothColors = {
  walker: 0x2d343d,
  runner: 0x563d2c,
  brute: 0x2b2c2c,
  spitter: 0x31443a,
  boss: 0x2c2026
};
const eyeColors = {
  walker: 0xff5636,
  runner: 0xffb23e,
  brute: 0xff3d31,
  spitter: 0x9fff52,
  boss: 0xff2b3f
};
const darkColor = 0x1c2221;
const metalColor = 0x3c4448;

const zombieBodyMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true,
  roughness: 0.86,
  metalness: 0.08
});
const zombieEyeMaterial = new THREE.MeshBasicMaterial({
  vertexColors: true,
  toneMapped: false
});

const zombieGeomCache = new Map();
const tempColor = new THREE.Color();

function addPart(parts, baseGeometry, color, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
  let geometry = baseGeometry.clone();
  if (geometry.index) geometry = geometry.toNonIndexed();
  geometry.deleteAttribute('uv');
  const matrix = new THREE.Matrix4().compose(
    new THREE.Vector3(...position),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),
    new THREE.Vector3(...scale)
  );
  geometry.applyMatrix4(matrix);
  tempColor.setHex(color);
  const count = geometry.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    colors[i * 3] = tempColor.r;
    colors[i * 3 + 1] = tempColor.g;
    colors[i * 3 + 2] = tempColor.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  parts.push(geometry);
}

function mergeParts(parts) {
  if (!parts.length) return new THREE.BufferGeometry();
  const merged = mergeGeometries(parts, false) || parts[0].clone();
  merged.computeBoundingSphere();
  parts.forEach((part) => part.dispose());
  return merged;
}

const healthBarCache = new Map();

function makeZombieHealthBar(width = 0.9) {
  let cached = healthBarCache.get(width);
  if (!cached) {
    cached = {
      bgGeometry: new THREE.PlaneGeometry(width, 0.075),
      fillGeometry: new THREE.PlaneGeometry(width - 0.03, 0.042),
      bgMaterial: new THREE.MeshBasicMaterial({
        color: 0x090d0e,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        depthTest: false
      }),
      fillMaterial: new THREE.MeshBasicMaterial({
        color: 0xff4350,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        depthTest: false
      })
    };
    healthBarCache.set(width, cached);
  }
  const group = new THREE.Group();
  const bg = new THREE.Mesh(cached.bgGeometry, cached.bgMaterial);
  bg.renderOrder = 20;
  const fill = new THREE.Mesh(cached.fillGeometry, cached.fillMaterial);
  fill.position.z = 0.003;
  fill.renderOrder = 21;
  group.add(bg, fill);
  group.userData.fill = fill;
  group.userData.width = width;
  group.visible = false;
  return group;
}

function buildZombieGeometries(typeId) {
  if (zombieGeomCache.has(typeId)) return zombieGeomCache.get(typeId);
  const skin = skinColors[typeId];
  const cloth = clothColors[typeId];
  const eye = eyeColors[typeId];
  const isRunner = typeId === 'runner';
  const isBrute = typeId === 'brute';
  const isSpitter = typeId === 'spitter';
  const isBoss = typeId === 'boss';

  const body = [];
  const eyeParts = [];
  const armL = [];
  const armR = [];
  const legL = [];
  const legR = [];

  // torso, ragged clothing and pelvis
  addPart(body, unitCapsule, skin, [0, 0.08, 0], [0.29, 0.36, 0.24]);
  addPart(body, unitBox, cloth, [0, 0.1, 0.05], [0.55, 0.48, 0.34], [0.03, 0, 0]);
  addPart(body, unitBox, darkColor, [0, -0.04, 0.19], [0.48, 0.18, 0.14], [-0.08, 0, 0]);
  addPart(body, unitBox, cloth, [0.27, -0.23, 0.06], [0.15, 0.3, 0.1], [0.1, 0.2, -0.2]);
  addPart(body, unitBox, darkColor, [-0.24, -0.21, 0.04], [0.1, 0.24, 0.1], [0.06, -0.1, 0.14]);
  addPart(body, unitBox, darkColor, [0, -0.35, 0], [0.4, 0.18, 0.28]);

  // head
  addPart(body, unitSphere, skin, [0, 0.82, 0.15], [0.25, 0.27, 0.24]);
  addPart(body, unitBox, darkColor, [0, 0.63, 0.22], [0.3, 0.12, 0.22], [0.05, 0, 0]);
  addPart(body, unitBox, skin, [0, 0.6, 0.31], [0.22, 0.075, 0.14], [0.11, 0, 0]);
  addPart(body, unitBox, darkColor, [0.025, 0.705, 0.38], [0.2, 0.025, 0.02], [0, 0, 0.08]);
  addPart(body, unitBox, 0x111716, [-0.09, 0.845, 0.372], [0.12, 0.072, 0.018]);
  addPart(body, unitBox, 0x111716, [0.09, 0.845, 0.372], [0.12, 0.072, 0.018]);
  addPart(eyeParts, unitBox, eye, [-0.09, 0.845, 0.382], [0.092, 0.05, 0.028]);
  addPart(eyeParts, unitBox, eye, [0.09, 0.845, 0.382], [0.092, 0.05, 0.028]);

  if (isRunner) {
    addPart(body, unitBox, darkColor, [0, 1.0, 0.02], [0.36, 0.08, 0.2], [0.12, 0, 0.18]);
    addPart(body, unitBox, 0x9a5b32, [0, 0.74, 0.13], [0.38, 0.09, 0.32], [0.03, 0, 0]);
  } else if (isBoss) {
    addPart(body, unitBox, metalColor, [0, 0.17, 0.2], [0.82, 0.32, 0.14]);
    addPart(body, unitBox, metalColor, [-0.46, 0.38, 0], [0.4, 0.26, 0.42], [0, 0, 0.2]);
    addPart(body, unitBox, metalColor, [0.46, 0.38, 0], [0.4, 0.26, 0.42], [0, 0, -0.2]);
    addPart(body, unitBox, metalColor, [0, 1.1, 0.03], [0.45, 0.09, 0.28]);
    addPart(body, new THREE.ConeGeometry(0.1, 0.55, 6), 0x2e2526, [-0.28, 1.06, 0.03], [1, 1, 1], [0.2, 0, 0.65]);
    addPart(body, new THREE.ConeGeometry(0.1, 0.55, 6), 0x2e2526, [0.28, 1.06, 0.03], [1, 1, 1], [0.2, 0, -0.65]);
    for (let i = 0; i < 4; i += 1) {
      addPart(eyeParts, unitBox, eye, [0, 0.01 + i * 0.09, 0.33], [0.18 + i * 0.02, 0.025, 0.02]);
    }
  } else if (isSpitter) {
    addPart(body, unitBox, darkColor, [0, 0.45, 0.09], [0.36, 0.16, 0.3], [0.05, 0, 0]);
    addPart(eyeParts, unitSphere, eye, [0, 0.46, 0.32], [0.1, 0.08, 0.05]);
  } else if (isBrute) {
    addPart(body, unitBox, metalColor, [0, 0.2, 0.21], [0.62, 0.28, 0.1], [0.03, 0, 0]);
    addPart(body, unitBox, metalColor, [-0.37, 0.3, 0.02], [0.24, 0.18, 0.3], [0, 0, 0.15]);
    addPart(body, unitBox, metalColor, [0.37, 0.3, 0.02], [0.24, 0.18, 0.3], [0, 0, -0.15]);
    addPart(eyeParts, unitBox, eye, [0, 0.13, 0.28], [0.2, 0.05, 0.02]);
  } else {
    addPart(body, unitBox, darkColor, [0, 0.99, -0.01], [0.28, 0.05, 0.2], [0.15, 0, -0.05]);
  }

  // arms — merged as rigid limbs so the silhouette stays performant
  for (const side of [-1, 1]) {
    const arm = side < 0 ? armL : armR;
    addPart(arm, unitCapsule, skin, [0, -0.18, 0.11], [0.085, 0.25, 0.09], [0.35, 0, side * 0.14]);
    addPart(arm, unitCapsule, skin, [side * 0.04, -0.45, 0.37], [0.07, 0.19, 0.075], [1.35, 0, side * 0.1]);
    addPart(arm, unitBox, skin, [side * 0.04, -0.61, 0.5], [0.13, 0.1, 0.18]);
    if (isBrute || isBoss) {
      addPart(arm, unitBox, metalColor, [side * 0.03, -0.4, 0.23], [0.19, 0.12, 0.2]);
      addPart(arm, unitBox, darkColor, [side * 0.04, -0.65, 0.56], [0.055, 0.06, 0.09]);
    }
    addPart(arm, unitBox, cloth, [0, -0.12, 0.02], [0.19, 0.13, 0.16]);
  }

  // legs
  for (const side of [-1, 1]) {
    const leg = side < 0 ? legL : legR;
    addPart(leg, unitCapsule, cloth, [0, -0.22, 0], [0.11, 0.24, 0.12], [0, 0, side * 0.03]);
    addPart(leg, unitBox, darkColor, [side * 0.02, -0.46, 0.08], [0.22, 0.2, 0.33], [0.1, 0, 0]);
    if (isBrute || isBoss) {
      addPart(leg, unitBox, metalColor, [0, -0.3, 0.06], [0.18, 0.14, 0.16]);
    }
  }

  let sac = null;
  if (isSpitter) {
    const sacParts = [];
    addPart(sacParts, unitSphere, eye, [0, 0, 0], [0.2, 0.22, 0.13]);
    sac = mergeParts(sacParts);
  }

  const result = {
    body: mergeParts(body),
    eyes: mergeParts(eyeParts),
    armL: mergeParts(armL),
    armR: mergeParts(armR),
    legL: mergeParts(legL),
    legR: mergeParts(legR),
    sac
  };
  zombieGeomCache.set(typeId, result);
  return result;
}

export function createZombie(typeId) {
  const type = ENEMY_TYPES[typeId];
  const geos = buildZombieGeometries(typeId);
  const root = new THREE.Group();
  const rig = new THREE.Group();
  root.add(rig);

  const isRunner = typeId === 'runner';
  const isBoss = typeId === 'boss';
  const bodyScale = isBoss ? 1.05 : isRunner ? 0.9 : 1;

  const shadow = new THREE.Mesh(shadowGeo, baseShadowMat);
  shadow.position.set(0, 0.03, -0.2);
  shadow.scale.set(isBoss ? 2.4 : 1, isBoss ? 1.8 : 1, 1);
  root.add(shadow);

  const torso = new THREE.Group();
  torso.position.set(0, 0.98, 0);
  torso.userData.baseY = 0.98;
  rig.add(torso);

  const bodyMesh = new THREE.Mesh(geos.body, zombieBodyMaterial);
  torso.add(bodyMesh);
  const eyeMesh = new THREE.Mesh(geos.eyes, zombieEyeMaterial);
  eyeMesh.renderOrder = 3;
  torso.add(eyeMesh);
  if (geos.sac) {
    const sac = new THREE.Mesh(geos.sac, zombieEyeMaterial);
    sac.position.set(0, 0.15, 0.23);
    sac.renderOrder = 3;
    torso.add(sac);
    torso.userData.sac = sac;
  }

  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.36, 0.3, 0.02);
    torso.add(shoulder);
    const armMesh = new THREE.Mesh(side < 0 ? geos.armL : geos.armR, zombieBodyMaterial);
    shoulder.add(armMesh);
    arms.push({ shoulder, elbow: shoulder });
  }

  const legs = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.16, 0.68, 0);
    rig.add(hip);
    const legMesh = new THREE.Mesh(side < 0 ? geos.legL : geos.legR, zombieBodyMaterial);
    hip.add(legMesh);
    legs.push(hip);
  }

  if (isBoss) {
    const aura = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: 0xff2b3f,
        transparent: true,
        opacity: 0.19,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    aura.scale.set(3.1, 3.1, 1);
    aura.position.set(0, 1.0, -0.25);
    root.add(aura);
  }

  const healthBar = makeZombieHealthBar(isBoss ? 2.1 : 1.0);
  healthBar.position.set(0, isBoss ? 2.7 : 2.0, 0.2);
  root.add(healthBar);

  root.scale.setScalar(type.scale * bodyScale);
  root.userData.healthBar = healthBar;
  root.userData.rig = rig;

  return {
    group: root,
    rig,
    legs,
    arms,
    head: torso,
    torso,
    healthBar,
    type,
    updateHealth(hp, maxHp) {
      if (typeId === 'walker' || typeId === 'runner') {
        healthBar.visible = false;
        return;
      }
      healthBar.visible = true;
      const pct = Math.max(0, hp / maxHp);
      healthBar.userData.fill.scale.x = pct;
      healthBar.userData.fill.position.x = -(healthBar.userData.width * (1 - pct)) / 2;
    }
  };
}

export function animateZombie(zombie, dt, time, state = {}) {
  const { type } = zombie;
  const t = time * (type.speed * 2.2 + 1.2);
  const attacking = state.attacking;
  const moving = !attacking;
  const off = state.phase || 0;
  const lunge = attacking ? Math.max(0, Math.sin(time * 6.5 + off)) : 0;

  zombie.legs.forEach((leg, i) => {
    leg.rotation.x = moving ? Math.sin(t + off + i * Math.PI) * 0.5 : Math.sin(time * 5 + i * 2) * 0.08;
  });
  zombie.arms.forEach((arm, i) => {
    const swing = Math.sin(t + off + i * Math.PI + 0.8) * 0.25;
    arm.shoulder.rotation.x = (moving ? swing : -0.35 - lunge * 0.5) + (type.id === 'runner' ? -0.3 : 0);
    arm.shoulder.rotation.z = (i === 0 ? -1 : 1) * (moving ? 0.02 : 0.12);
    arm.elbow.rotation.x = 0;
  });
  zombie.torso.rotation.z = Math.sin(t * 0.5 + off) * 0.035;
  zombie.torso.rotation.x = type.id === 'runner' ? -0.2 : type.id === 'brute' ? -0.08 : 0;
  zombie.torso.position.y = (zombie.torso.userData.baseY || 0.98) + Math.sin(t * 0.7 + off) * 0.015;
  if (zombie.torso.userData.sac) {
    const sac = zombie.torso.userData.sac;
    const scale = 1 + Math.sin(time * 3 + off) * 0.08;
    sac.scale.set(scale, scale, scale);
  }
}

// ————————————————————————————————————————————————
// REWARD CRATE
// ————————————————————————————————————————————————

export function createRewardCrate(reward, hp) {
  const rarity = RARITY_BY_KEY[reward.rarity] || RARITY_BY_KEY.common;
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x151d25,
    metalness: 0.82,
    roughness: 0.28,
    emissive: new THREE.Color(rarity.color).multiplyScalar(0.05),
    emissiveIntensity: 0.5
  });
  const trimMat = new THREE.MeshBasicMaterial({ color: rarity.color, transparent: true, opacity: 0.88 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2b3540, metalness: 0.7, roughness: 0.35 });

  addMesh(body, unitBox, baseMat, [0, 0, 0], [1.2, 1.08, 0.86]);
  addMesh(body, unitBox, darkMat, [0, 0.49, 0], [1.28, 0.08, 0.94]);
  addMesh(body, unitBox, darkMat, [0, -0.45, 0], [1.26, 0.07, 0.92]);
  for (const side of [-1, 1]) {
    addMesh(body, unitBox, trimMat, [side * 0.555, 0, 0.44], [0.035, 0.88, 0.03]);
    addMesh(body, unitBox, trimMat, [side * 0.48, 0.36, 0.44], [0.12, 0.035, 0.03]);
  }
  addMesh(body, unitBox, trimMat, [0, 0.04, 0.455], [0.7, 0.035, 0.03]);
  addMesh(body, unitBox, trimMat, [0, -0.38, 0.455], [0.5, 0.02, 0.03]);
  addMesh(body, unitBox, darkMat, [0.45, 0.2, 0.47], [0.18, 0.16, 0.04]);
  addMesh(body, unitBox, trimMat, [0.45, 0.16, 0.49], [0.1, 0.025, 0.02]);

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(unitBox),
    new THREE.LineBasicMaterial({ color: rarity.color, transparent: true, opacity: 0.42 })
  );
  edges.scale.set(1.2, 1.08, 0.86);
  body.add(edges);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.94, 0.018, 6, 42),
    new THREE.MeshBasicMaterial({ color: rarity.color, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.position.z = 0.05;
  ring.rotation.x = 0.06;
  group.add(ring);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(0.76, 0.01, 6, 32),
    new THREE.MeshBasicMaterial({ color: rarity.color, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring2.position.z = -0.1;
  group.add(ring2);

  const glow = makeGlowSprite(rarity.color, 2.2, 0.22);
  glow.position.set(0, 0, -0.3);
  group.add(glow);

  const labelCanvas = createLabelTexture({
    name: reward.name,
    rarity: rarity.name,
    color: rarity.css,
    hp,
    tag: '击破夺取'
  });
  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  labelTexture.colorSpace = THREE.SRGBColorSpace;
  labelTexture.minFilter = THREE.LinearFilter;
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(2.08, 1.22),
    new THREE.MeshBasicMaterial({
      map: labelTexture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false
    })
  );
  label.position.set(0, 1.48, 0.7);
  label.renderOrder = 30;
  group.add(label);

  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 7, 4),
    new THREE.MeshBasicMaterial({ color: rarity.color, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  beacon.position.set(0, 4.8, -0.35);
  group.add(beacon);

  let flash = 0;
  let labelFlash = false;
  let labelCooldown = 0;
  let labelDirty = false;
  let lastHp = hp;

  function updateLabel() {
    const canvas = createLabelTexture({
      name: reward.name,
      rarity: rarity.name,
      color: rarity.css,
      hp: Math.max(0, Math.ceil(hp)),
      tag: '击破夺取',
      flash: labelFlash
    });
    labelTexture.image = canvas;
    labelTexture.needsUpdate = true;
    labelFlash = false;
  }

  function setHp(next) {
    hp = Math.max(0, next);
    if (hp !== lastHp) {
      lastHp = hp;
      labelDirty = true;
      labelFlash = true;
      flash = 1;
      baseMat.emissiveIntensity = 2.6;
    }
  }

  function update(dt, time) {
    body.rotation.y = Math.sin(time * 0.6) * 0.1;
    body.position.y = Math.sin(time * 1.7) * 0.03;
    ring.rotation.z = time * 0.35;
    ring2.rotation.z = -time * 0.5;
    ring.scale.setScalar(1 + Math.sin(time * 2.2) * 0.035);
    glow.material.opacity = 0.18 + Math.sin(time * 1.8) * 0.06;
    if (flash > 0) {
      flash = Math.max(0, flash - dt * 5);
      baseMat.emissiveIntensity = 0.5 + flash * 2.2;
    }
    labelCooldown -= dt;
    if (labelDirty && labelCooldown <= 0) {
      labelDirty = false;
      labelCooldown = 0.06;
      updateLabel();
    }
    label.position.y = 1.48 + Math.sin(time * 1.6) * 0.025;
  }

  return {
    group,
    label,
    labelTexture,
    baseMat,
    ring,
    hp,
    setHp,
    update,
    reward,
    rarity
  };
}

// ————————————————————————————————————————————————
// DRONE
// ————————————————————————————————————————————————

export function createDrone() {
  const root = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x222d38, metalness: 0.75, roughness: 0.3 });
  const trimMat = new THREE.MeshBasicMaterial({ color: 0x64f1ff });
  addMesh(root, new THREE.BoxGeometry(0.38, 0.11, 0.24), bodyMat, [0, 0, 0]);
  addMesh(root, new THREE.BoxGeometry(0.2, 0.05, 0.18), bodyMat, [0, 0.07, 0.02]);
  addMesh(root, new THREE.BoxGeometry(0.1, 0.03, 0.04), trimMat, [0, 0.02, 0.15]);
  const rotors = [];
  for (const side of [-1, 1]) {
    addMesh(root, new THREE.BoxGeometry(0.6, 0.025, 0.035), bodyMat, [side * 0.33, 0.01, 0]);
    const rotor = new THREE.Group();
    rotor.position.set(side * 0.58, 0.04, 0);
    root.add(rotor);
    addMesh(rotor, new THREE.CylinderGeometry(0.13, 0.13, 0.015, 12), new THREE.MeshBasicMaterial({ color: 0x394956, transparent: true, opacity: 0.35 }), [0, 0, 0]);
    for (let i = 0; i < 2; i += 1) {
      const blade = addMesh(rotor, new THREE.BoxGeometry(0.25, 0.006, 0.025), bodyMat, [0, 0.01, 0]);
      blade.rotation.y = i * Math.PI / 2;
    }
    rotors.push(rotor);
  }
  const eye = makeGlowSprite(0x65efff, 0.22, 0.85);
  eye.position.set(0, 0.02, 0.2);
  root.add(eye);
  const under = makeGlowSprite(0x65efff, 0.7, 0.22);
  under.position.set(0, -0.08, 0);
  root.add(under);
  return { group: root, rotors };
}

// ————————————————————————————————————————————————
// RETICLE
// ————————————————————————————————————————————————

export function createReticle() {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color: 0x77f4ff,
    transparent: true,
    opacity: 0.72,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.012, 6, 36), mat);
  ring.renderOrder = 50;
  group.add(ring);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.008, 5, 24), mat);
  inner.renderOrder = 50;
  group.add(inner);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.028, 10), mat);
  dot.renderOrder = 51;
  group.add(dot);

  const tickGeo = new THREE.PlaneGeometry(0.12, 0.022);
  for (let i = 0; i < 4; i += 1) {
    const tick = new THREE.Mesh(tickGeo, mat);
    const a = i * Math.PI / 2;
    tick.position.set(Math.cos(a) * 0.46, Math.sin(a) * 0.46, 0);
    tick.rotation.z = a;
    tick.renderOrder = 50;
    group.add(tick);
  }
  group.renderOrder = 50;
  return { group, material: mat, ring, inner, dot };
}
