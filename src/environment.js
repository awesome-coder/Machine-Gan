import * as THREE from 'three';
import { mergeGeometries } from './BufferGeometryUtils.js';
import { WORLD } from './config.js';
import {
  createGlowTexture,
  createHazardTexture,
  createStreakTexture,
  createSoftTexture,
  makeCanvas
} from './utils.js';

function createGlowSprite(color, scale, opacity = 0.8) {
  const texture = createGlowTexture(128);
  const map = new THREE.CanvasTexture(texture);
  map.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scale, scale, 1);
  sprite.renderOrder = 5;
  return sprite;
}

function createStencilTexture(text, sub, color, accent = '#ff5566') {
  const { canvas, ctx } = makeCanvas(1024, 256);
  ctx.clearRect(0, 0, 1024, 256);
  ctx.strokeStyle = accent;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 4;
  ctx.strokeRect(12, 12, 1000, 232);
  ctx.globalAlpha = 0.75;
  ctx.fillStyle = color;
  ctx.font = '800 116px "Bahnschrift Condensed", "Arial Narrow", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 512, 114);
  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.8;
  ctx.font = '500 36px Consolas, monospace';
  ctx.fillText(sub, 512, 198);
  ctx.globalAlpha = 1;
  return canvas;
}

function createArrowTexture(color) {
  const { canvas, ctx } = makeCanvas(256, 256);
  ctx.clearRect(0, 0, 256, 256);
  ctx.strokeStyle = color;
  ctx.lineWidth = 10;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.moveTo(48, 40);
  ctx.lineTo(128, 112);
  ctx.lineTo(208, 40);
  ctx.moveTo(48, 128);
  ctx.lineTo(128, 200);
  ctx.lineTo(208, 128);
  ctx.stroke();
  return canvas;
}

function createLaneSignTexture(title, sub, color) {
  const { canvas, ctx } = makeCanvas(1024, 512);
  ctx.clearRect(0, 0, 1024, 512);
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.38;
  ctx.lineWidth = 5;
  ctx.strokeRect(18, 18, 988, 476);
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = color;
  ctx.font = '800 190px "Bahnschrift Condensed", "Arial Narrow", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, 512, 220);
  ctx.globalAlpha = 0.55;
  ctx.font = '500 46px Consolas, monospace';
  ctx.fillText(sub, 512, 350);
  ctx.globalAlpha = 0.28;
  for (let i = 0; i < 12; i += 1) {
    ctx.fillRect(60 + i * 80, 410, 46, 7);
  }
  return canvas;
}

function buildFan() {  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x18202a, metalness: 0.8, roughness: 0.35 });
  const rim = new THREE.MeshStandardMaterial({ color: 0x0a0d12, metalness: 0.6, roughness: 0.45 });
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.32, 12), metal);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = 0.16;
  group.add(hub);
  const blades = new THREE.Group();
  const bladeGeo = new THREE.BoxGeometry(0.62, 1.3, 0.06);
  for (let i = 0; i < 4; i += 1) {
    const blade = new THREE.Mesh(bladeGeo, metal);
    blade.position.y = 0.75;
    blade.rotation.z = 0.5;
    blade.position.z = 0.14;
    blade.userData.noMerge = true;
    const pivot = new THREE.Group();
    pivot.rotation.z = (i / 4) * Math.PI * 2;
    pivot.add(blade);
    blades.add(pivot);
  }
  group.add(blades);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.08, 8, 32), rim);
  ring.position.z = 0.08;
  group.add(ring);
  const innerRing = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.018, 6, 32), new THREE.MeshBasicMaterial({ color: 0x2b4f5b, transparent: true, opacity: 0.4 }));
  innerRing.position.z = 0.13;
  group.add(innerRing);
  return { group, blades };
}

function mergeStaticMeshes(root) {
  root.updateMatrixWorld(true);
  const groups = new Map();
  root.traverse((object) => {
    if (!object.isMesh) return;
    if (object.userData.noMerge) return;
    const material = object.material;
    if (!material || material.isShaderMaterial) return;
    if (material.transparent) return;
    if (!object.geometry || !object.geometry.attributes.position) return;
    const key = material.uuid;
    if (!groups.has(key)) groups.set(key, { material, meshes: [] });
    groups.get(key).meshes.push(object);
  });

  for (const { material, meshes } of groups.values()) {
    if (meshes.length < 2) continue;
    const parts = [];
    for (const mesh of meshes) {
      let geometry = mesh.geometry.clone();
      geometry.applyMatrix4(mesh.matrixWorld);
      if (geometry.index) geometry = geometry.toNonIndexed();
      for (const name of Object.keys(geometry.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') {
          geometry.deleteAttribute(name);
        }
      }
      if (!geometry.attributes.uv) {
        const count = geometry.attributes.position.count;
        geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
      }
      parts.push(geometry);
    }
    const merged = mergeGeometries(parts, false);
    parts.forEach((part) => part.dispose());
    if (!merged) continue;
    merged.computeBoundingSphere();
    const mesh = new THREE.Mesh(merged, material);
    mesh.renderOrder = 0;
    root.add(mesh);
    for (const original of meshes) {
      original.parent?.remove(original);
    }
  }
}

export function createEnvironment(scene) {
  const environment = new THREE.Group();
  environment.name = 'environment';
  scene.add(environment);

  const glowTexture = new THREE.CanvasTexture(createGlowTexture(128));
  glowTexture.colorSpace = THREE.SRGBColorSpace;
  const softTexture = new THREE.CanvasTexture(createSoftTexture(128));
  softTexture.colorSpace = THREE.SRGBColorSpace;

  // ————— lights —————
  const hemi = new THREE.HemisphereLight(0x87bfdc, 0x1b0d10, 1.1);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xd6efff, 2.75);
  key.position.set(-4, 8, 12);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xff6666, 0.7);
  fill.position.set(-7, 1, 5);
  scene.add(fill);
  const redLight = new THREE.PointLight(0xff2f43, 30, 17, 1.8);
  redLight.position.set(-5.4, 3.5, 4);
  scene.add(redLight);
  const cyanLight = new THREE.PointLight(0x4feaff, 24, 16, 1.8);
  cyanLight.position.set(5.4, 5, 4);
  scene.add(cyanLight);
  const warmLight = new THREE.PointLight(0xffb06b, 32, 13, 1.6);
  warmLight.position.set(0, -7.0, 5.5);
  scene.add(warmLight);
  const rimLight = new THREE.PointLight(0x5cefff, 16, 9, 1.8);
  rimLight.position.set(-1.4, -6.1, 2.8);
  scene.add(rimLight);

  scene.fog = new THREE.FogExp2(0x04080d, 0.017);

  // ————— backdrop —————
  const backdropUniforms = {
    uTime: { value: 0 },
    uIntensity: { value: 0.4 }
  };
  const backdropMaterial = new THREE.ShaderMaterial({
    uniforms: backdropUniforms,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uIntensity;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = vUv;
        vec3 col = mix(vec3(0.013, 0.018, 0.027), vec3(0.006, 0.009, 0.014), smoothstep(0.0, 1.0, uv.y));
        col += vec3(0.008, 0.019, 0.026) * (1.0 - uv.y);

        float redMask = smoothstep(0.58, 0.10, uv.x) * smoothstep(0.04, 0.60, uv.y) * (1.0 - smoothstep(0.74, 1.0, uv.y));
        float cyanMask = smoothstep(0.42, 0.90, uv.x) * smoothstep(0.04, 0.58, uv.y) * (1.0 - smoothstep(0.74, 1.0, uv.y));
        col += vec3(0.23, 0.018, 0.028) * pow(redMask, 1.9) * (0.68 + uIntensity * 0.2);
        col += vec3(0.012, 0.115, 0.145) * pow(cyanMask, 1.9) * 0.8;

        float centre = exp(-pow((uv.x - 0.5) * 10.0, 2.0));
        col *= 1.0 - centre * 0.45;

        // industrial wall seams
        float sx = abs(fract(uv.x * 16.0) - 0.5);
        float sy = abs(fract(uv.y * 11.0) - 0.5);
        col += vec3(0.025, 0.042, 0.052) * smoothstep(0.478, 0.5, sx) * 0.32;
        col += vec3(0.018, 0.030, 0.039) * smoothstep(0.475, 0.5, sy) * 0.25;

        // distant maintenance strip lights
        float strip = smoothstep(0.985, 1.0, fract(uv.x * 8.0 + 0.15)) * smoothstep(0.68, 0.84, uv.y) * (1.0 - smoothstep(0.86, 0.94, uv.y));
        col += vec3(0.35, 0.16, 0.08) * strip * 0.25;
        float stripC = smoothstep(0.985, 1.0, fract(uv.x * 8.0 + 0.62)) * smoothstep(0.5, 0.62, uv.y) * (1.0 - smoothstep(0.64, 0.72, uv.y));
        col += vec3(0.06, 0.28, 0.31) * stripC * 0.25;

        // horizontal fog bands
        float band = smoothstep(0.0, 0.08, abs(fract(uv.y * 18.0 - uTime * 0.006) - 0.5) - 0.42);
        col += vec3(0.02, 0.035, 0.04) * band * 0.12;

        float vignette = smoothstep(0.90, 0.32, length((uv - 0.5) * vec2(0.94, 0.7)));
        col *= 0.58 + vignette * 0.42;

        float grain = hash21(uv * vec2(920.0, 520.0) + uTime * 0.13) - 0.5;
        col += grain * 0.017;

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    depthWrite: true,
    fog: false
  });
  const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(52, 32), backdropMaterial);
  backdrop.position.set(0, 2, -9.5);
  environment.add(backdrop);

  // huge faint sector stencil on the back wall
  const stencilCanvas = createStencilTexture('SECTOR 09', 'CONTAINMENT / LAST STAND', '#798f9d', '#b33a46');
  const stencilTexture = new THREE.CanvasTexture(stencilCanvas);
  stencilTexture.colorSpace = THREE.SRGBColorSpace;
  const stencil = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 2.75),
    new THREE.MeshBasicMaterial({ map: stencilTexture, transparent: true, opacity: 0.13, depthWrite: false })
  );
  stencil.position.set(0, 4.1, -7.8);
  environment.add(stencil);

  // ————— metal framing / pipes —————
  const steel = new THREE.MeshStandardMaterial({ color: 0x101821, metalness: 0.86, roughness: 0.34 });
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x080d13, metalness: 0.75, roughness: 0.46 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x11151a, metalness: 0.15, roughness: 0.9 });
  const amberGlow = new THREE.MeshBasicMaterial({ color: 0xffa330 });
  const cyanGlow = new THREE.MeshBasicMaterial({ color: 0x42eaff });
  const redGlow = new THREE.MeshBasicMaterial({ color: 0xff3445 });

  const sideColumns = [];
  for (const side of [-1, 1]) {
    const x = side * 5.25;
    const column = new THREE.Mesh(new THREE.BoxGeometry(0.72, 25, 1.6), steel);
    column.position.set(x, 0.5, -3.3);
    environment.add(column);

    const innerEdge = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 23.5, 0.06),
      side < 0 ? new THREE.MeshBasicMaterial({ color: 0x5b1d24 }) : new THREE.MeshBasicMaterial({ color: 0x17434c })
    );
    innerEdge.position.set(side * 4.88, 0.5, -2.47);
    environment.add(innerEdge);

    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 23, 8), steelDark);
    pipe.position.set(side * 4.95, 0.3, -3.05);
    environment.add(pipe);

    for (let i = 0; i < 5; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.15, 0.025, 5, 12),
        i % 2 === 0 ? amberGlow : (side < 0 ? redGlow : cyanGlow)
      );
      ring.position.set(side * 4.95, -8 + i * 4.2, -3.05);
      ring.rotation.x = Math.PI / 2;
      environment.add(ring);
    }

    // side rail
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 19.8, 0.5), steelDark);
    rail.position.set(side * 4.62, 0.3, -0.42);
    environment.add(rail);
    const neon = new THREE.Mesh(
      new THREE.BoxGeometry(0.025, 19.4, 0.035),
      new THREE.MeshBasicMaterial({
        color: side < 0 ? 0xff4151 : 0x4defff,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    neon.position.set(side * 4.55, 0.3, 0.02);
    environment.add(neon);
    sideColumns.push(neon);

    for (let i = 0; i < 6; i += 1) {
      const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.08, 0.65), steel);
      bracket.position.set(side * 4.76, -8.2 + i * 3.35, -0.4);
      environment.add(bracket);
    }
  }

  // crossbeams above the play field
  for (const y of [9.8, -7.45]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(11.6, 0.28, 0.8), steel);
    beam.position.set(0, y, -2.3);
    environment.add(beam);
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(11.3, 0.035, 0.04),
      new THREE.MeshBasicMaterial({ color: y > 0 ? 0x76432f : 0x6a2027, transparent: true, opacity: 0.45 })
    );
    stripe.position.set(0, y - 0.16, -1.89);
    environment.add(stripe);
  }

  // overhead cable trays
  const cableMat = new THREE.LineBasicMaterial({ color: 0x0b1118, transparent: true, opacity: 0.9 });
  for (let i = 0; i < 5; i += 1) {
    const points = [];
    const x = -5.6 + i * 2.8;
    for (let j = 0; j < 12; j += 1) {
      points.push(new THREE.Vector3(x + Math.sin(j * 0.9 + i) * 0.08, 11.5, -3 + j * 0.17));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    environment.add(new THREE.Line(geo, cableMat));
  }

  // ————— background fans —————
  const fanA = buildFan();
  fanA.group.position.set(-3.45, 3.5, -7.1);
  fanA.group.scale.setScalar(0.95);
  environment.add(fanA.group);
  const fanB = buildFan();
  fanB.group.position.set(3.55, -1.3, -7.4);
  fanB.group.scale.setScalar(0.72);
  fanB.group.rotation.z = 1.2;
  environment.add(fanB.group);

  // faint spotlight cones
  for (const side of [-1, 1]) {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(2.65, 8.4, 24, 1, true),
      new THREE.MeshBasicMaterial({
        color: side < 0 ? 0xff6d57 : 0x53edff,
        transparent: true,
        opacity: 0.022,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    cone.position.set(side * 3.15, 3.4, -1.45);
    environment.add(cone);
  }

  // lamps
  for (const side of [-1, 1]) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.18), new THREE.MeshBasicMaterial({ color: 0xdff8ff }));
    lamp.position.set(side * 3.2, 8.0, -1.35);
    environment.add(lamp);
    const glow = createGlowSprite(side < 0 ? 0xffb067 : 0x6ff2ff, 3.2, 0.12);
    glow.position.copy(lamp.position);
    environment.add(glow);
  }

  // ————— lane surfaces —————
  const laneVert = /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const laneFrag = /* glsl */ `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uTint;
    uniform float uSide;
    uniform float uThreat;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec3 col = vec3(0.010, 0.014, 0.020);
      col += uTint * 0.028;

      // large panels
      float vertical = abs(fract(uv.x * 5.0) - 0.5);
      float horizontal = abs(fract(uv.y * 13.0) - 0.5);
      col += uTint * 0.036 * smoothstep(0.482, 0.5, vertical);
      col += uTint * 0.055 * smoothstep(0.478, 0.5, horizontal);

      // fine grating
      float grate = step(0.74, fract(uv.y * 128.0)) * step(0.2, fract(uv.x * 36.0));
      col += uTint * 0.012 * grate;

      // inner edge light
      float edge = smoothstep(0.42, 0.495, abs(uv.x - 0.5));
      col += uTint * 0.14 * edge;
      col += uTint * 0.03 * smoothstep(0.0, 0.03, uv.x) * (1.0 - smoothstep(0.09, 0.14, uv.x));

      // scan pulse
      float scan = smoothstep(0.92, 1.0, sin(uv.y * 6.0 - uTime * 0.35 + uSide) * 0.5 + 0.5);
      col += uTint * 0.020 * scan;

      // hazard wash at danger line
      float danger = smoothstep(0.84, 0.93, uv.y);
      col += vec3(0.20, 0.03, 0.03) * danger * (0.28 + uThreat * 0.05);

      // vignette
      float vig = smoothstep(0.85, 0.25, length((uv - vec2(0.5, 0.48)) * vec2(0.9, 0.55)));
      col *= 0.55 + vig * 0.5;
      col += (hash21(uv * vec2(810.0, 432.0) + uTime) - 0.5) * 0.012;

      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `;
  const laneUniforms = [];
  for (const side of [-1, 1]) {
    const isEnemyLane = side < 0;
    const laneWidth = isEnemyLane ? WORLD.enemyWidth : WORLD.rewardWidth;
    const laneCenter = isEnemyLane ? WORLD.enemyCenterX : WORLD.rewardCenterX;
    const uniforms = {
      uTime: { value: 0 },
      uTint: { value: new THREE.Color(isEnemyLane ? 0x9e2737 : 0x1386a0) },
      uSide: { value: side * 1.4 },
      uThreat: { value: 0.2 }
    };
    laneUniforms.push(uniforms);
    const lane = new THREE.Mesh(
      new THREE.PlaneGeometry(laneWidth, 19.8),
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: laneVert,
        fragmentShader: laneFrag,
        depthWrite: true,
        fog: false
      })
    );
    lane.position.set(laneCenter, 0.25, -0.55);
    environment.add(lane);

    // horizontal deck seams
    for (let i = 0; i < 8; i += 1) {
      const seam = new THREE.Mesh(new THREE.BoxGeometry(laneWidth - 0.3, 0.035, 0.06), steelDark);
      seam.position.set(laneCenter, -8 + i * 2.42, -0.46);
      environment.add(seam);
    }

    // down arrows on the deck
    const arrowTexture = new THREE.CanvasTexture(createArrowTexture(isEnemyLane ? '#bb3b49' : '#2aa9bd'));
    arrowTexture.colorSpace = THREE.SRGBColorSpace;
    const arrowMat = new THREE.MeshBasicMaterial({
      map: arrowTexture,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    for (const y of [-3.7, 1.4, 6.5]) {
      const arrow = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), arrowMat);
      arrow.position.set(laneCenter, y, -0.42);
      environment.add(arrow);
    }
  }

  // faint lane stencils give each half its own story
  for (const [side, title, sub, color] of [
    [-1, 'CONTAINMENT', 'BREACH / 封锁失效', '#c44450'],
    [1, 'ARMORY', 'OPERATOR ACCESS / 火力许可', '#2eabbd']
  ]) {
    const laneWidth = side < 0 ? WORLD.enemyWidth : WORLD.rewardWidth;
    const laneCenter = side < 0 ? WORLD.enemyCenterX : WORLD.rewardCenterX;
    const signWidth = laneWidth * 0.86;
    const texture = new THREE.CanvasTexture(createLaneSignTexture(title, sub, color));
    texture.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(signWidth, signWidth * 0.5),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.17,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    sign.position.set(laneCenter, -2.4, -0.43);
    environment.add(sign);
  }

  // ————— central divider —————
  const divider = new THREE.Mesh(new THREE.BoxGeometry(0.34, 17.6, 0.42), steelDark);
  divider.position.set(WORLD.dividerX, 1.6, -0.29);
  environment.add(divider);

  const hazardTexture = new THREE.CanvasTexture(createHazardTexture());
  hazardTexture.colorSpace = THREE.SRGBColorSpace;
  hazardTexture.wrapS = THREE.RepeatWrapping;
  hazardTexture.wrapT = THREE.RepeatWrapping;
  hazardTexture.repeat.set(1, 14);
  const hazard = new THREE.Mesh(
    new THREE.PlaneGeometry(0.13, 17.0),
    new THREE.MeshBasicMaterial({
      map: hazardTexture,
      color: 0x8d7447,
      transparent: true,
      opacity: 0.42
    })
  );
  hazard.position.set(WORLD.dividerX, 1.7, -0.055);
  environment.add(hazard);

  const dividerGlows = [];
  for (const side of [-1, 1]) {
    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(0.025, 17.0, 0.03),
      new THREE.MeshBasicMaterial({
        color: side < 0 ? 0xff3f50 : 0x4df2ff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    glow.position.set(WORLD.dividerX + side * 0.17, 1.7, 0.02);
    environment.add(glow);
    dividerGlows.push(glow);
  }

  const dividerBulbs = [];
  for (let i = 0; i < 9; i += 1) {
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), i % 2 === 0 ? redGlow : cyanGlow);
    bulb.position.set(WORLD.dividerX, -6.8 + i * 2.125, 0.1);
    bulb.userData.noMerge = true;
    environment.add(bulb);
    dividerBulbs.push(bulb);
  }

  // ————— spawn gate —————
  const gate = new THREE.Group();
  gate.position.set(0, 10.25, -0.7);
  const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.42, 0.7), steel);
  gate.add(gateBeam);
  const gateStripe = new THREE.Mesh(
    new THREE.PlaneGeometry(9.2, 0.16),
    new THREE.MeshBasicMaterial({
      map: (() => {
        const tex = new THREE.CanvasTexture(createHazardTexture());
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.repeat.set(8, 1);
        return tex;
      })(),
      transparent: true,
      opacity: 0.75
    })
  );
  gateStripe.position.set(0, -0.05, 0.36);
  gate.add(gateStripe);
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.1, 0.65), steelDark);
    post.position.set(side * 4.45, -0.68, 0);
    gate.add(post);
    const lamp = createGlowSprite(side < 0 ? 0xff3f50 : 0x4df2ff, 1.2, 0.7);
    lamp.position.set(side * 4.0, -0.55, 0.45);
    gate.add(lamp);
  }
  environment.add(gate);

  // ————— defense barricade —————
  const barricade = new THREE.Group();
  barricade.position.set(0, -7.16, 0.1);
  const barrier = new THREE.Mesh(new THREE.BoxGeometry(9.1, 0.34, 0.9), steel);
  barricade.add(barrier);
  const barricadeStripe = new THREE.Mesh(
    new THREE.PlaneGeometry(8.9, 0.24),
    new THREE.MeshBasicMaterial({
      map: (() => {
        const tex = new THREE.CanvasTexture(createHazardTexture());
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.repeat.set(10, 1);
        return tex;
      })(),
      color: 0x9f8657,
      transparent: true,
      opacity: 0.62
    })
  );
  barricadeStripe.position.set(0, 0.02, 0.46);
  barricade.add(barricadeStripe);
  for (let i = 0; i < 7; i += 1) {
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.12), steelDark);
    plate.position.set(-3.6 + i * 1.2, -0.38, 0.45);
    barricade.add(plate);
  }
  const barricadeGlow = new THREE.Mesh(
    new THREE.BoxGeometry(8.9, 0.025, 0.03),
    new THREE.MeshBasicMaterial({
      color: 0xff3445,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  barricadeGlow.position.set(0, 0.2, 0.49);
  barricade.add(barricadeGlow);
  environment.add(barricade);

  // ————— sliding gunner rail —————
  const gunnerRail = new THREE.Group();
  gunnerRail.position.set(0, -8.86, 0.18);
  const railBody = new THREE.Mesh(new THREE.BoxGeometry(8.85, 0.12, 0.78), steelDark);
  gunnerRail.add(railBody);
  for (let i = 0; i < 13; i += 1) {
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.9), steel);
    tie.position.set(-4.15 + i * 0.69, 0.02, 0.02);
    gunnerRail.add(tie);
  }
  const railLight = new THREE.Mesh(
    new THREE.BoxGeometry(8.5, 0.018, 0.03),
    new THREE.MeshBasicMaterial({
      color: 0x6ff4ff,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  railLight.position.set(0, 0.09, 0.47);
  gunnerRail.add(railLight);
  const railWarn = new THREE.Mesh(
    new THREE.BoxGeometry(8.5, 0.018, 0.025),
    new THREE.MeshBasicMaterial({
      color: 0xff4555,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  railWarn.position.set(0, 0.09, -0.38);
  gunnerRail.add(railWarn);
  environment.add(gunnerRail);

  // barbed wire silhouette
  const wireMat = new THREE.LineBasicMaterial({ color: 0x25343d, transparent: true, opacity: 0.65 });
  for (let i = 0; i < 3; i += 1) {
    const pts = [];
    for (let j = 0; j <= 32; j += 1) {
      const x = -4.2 + (j / 32) * 8.4;
      pts.push(new THREE.Vector3(x, -6.55 + i * 0.1 + Math.sin(j * 1.9 + i) * 0.04, 0.2));
    }
    environment.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
  }

  // ————— rain —————
  const rainCount = 460;
  const rainGeo = new THREE.BufferGeometry();
  const rainPositions = new Float32Array(rainCount * 3);
  const rainSpeeds = new Float32Array(rainCount);
  for (let i = 0; i < rainCount; i += 1) {
    rainPositions[i * 3] = -6.8 + Math.random() * 13.6;
    rainPositions[i * 3 + 1] = -10 + Math.random() * 22.5;
    rainPositions[i * 3 + 2] = -4.2 + Math.random() * 7.5;
    rainSpeeds[i] = 4 + Math.random() * 7;
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const rainTexture = new THREE.CanvasTexture(createStreakTexture());
  rainTexture.colorSpace = THREE.SRGBColorSpace;
  const rain = new THREE.Points(
    rainGeo,
    new THREE.PointsMaterial({
      color: 0x9addff,
      size: 0.2,
      map: rainTexture,
      transparent: true,
      opacity: 0.27,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
  );
  rain.frustumCulled = false;
  rain.renderOrder = 4;
  environment.add(rain);

  // ————— ambient embers —————
  const emberCount = 100;
  const emberGeo = new THREE.BufferGeometry();
  const emberPositions = new Float32Array(emberCount * 3);
  const emberColors = new Float32Array(emberCount * 3);
  const emberSeeds = new Float32Array(emberCount * 4);
  const color = new THREE.Color();
  for (let i = 0; i < emberCount; i += 1) {
    emberPositions[i * 3] = -5.5 + Math.random() * 11;
    emberPositions[i * 3 + 1] = -8 + Math.random() * 18;
    emberPositions[i * 3 + 2] = -3.5 + Math.random() * 5;
    const side = emberPositions[i * 3] < 0;
    color.setHex(side ? (Math.random() < 0.7 ? 0xff5d50 : 0xffb15c) : (Math.random() < 0.7 ? 0x5cecff : 0xffcf73));
    emberColors[i * 3] = color.r;
    emberColors[i * 3 + 1] = color.g;
    emberColors[i * 3 + 2] = color.b;
    emberSeeds[i * 4] = Math.random() * Math.PI * 2;
    emberSeeds[i * 4 + 1] = 0.15 + Math.random() * 0.55;
    emberSeeds[i * 4 + 2] = 0.12 + Math.random() * 0.45;
    emberSeeds[i * 4 + 3] = Math.random();
  }
  emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3).setUsage(THREE.DynamicDrawUsage));
  emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));
  const embers = new THREE.Points(
    emberGeo,
    new THREE.PointsMaterial({
      size: 0.065,
      map: softTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
  );
  embers.frustumCulled = false;
  embers.renderOrder = 5;
  environment.add(embers);

  // initial backdrop haze plane for foreground atmosphere
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 22),
    new THREE.MeshBasicMaterial({
      color: 0x0b1f27,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  haze.position.set(0, 0, 6);
  environment.add(haze);

  mergeStaticMeshes(environment);

  function update(dt, time, intensity = 1) {
    backdropUniforms.uTime.value = time;
    backdropUniforms.uIntensity.value = intensity;
    for (const u of laneUniforms) {
      u.uTime.value = time;
      u.uThreat.value = intensity;
    }

    // rain
    const rainPos = rainGeo.attributes.position.array;
    for (let i = 0; i < rainCount; i += 1) {
      rainPos[i * 3 + 1] -= rainSpeeds[i] * dt;
      rainPos[i * 3] -= dt * 0.6;
      if (rainPos[i * 3 + 1] < -10.5) {
        rainPos[i * 3 + 1] = 11.8;
        rainPos[i * 3] = -6.8 + Math.random() * 13.6;
        rainPos[i * 3 + 2] = -4.2 + Math.random() * 7.5;
      }
      if (rainPos[i * 3] < -7) rainPos[i * 3] = 6.8;
    }
    rainGeo.attributes.position.needsUpdate = true;

    // embers
    const emberPos = emberGeo.attributes.position.array;
    for (let i = 0; i < emberCount; i += 1) {
      const seed = emberSeeds[i * 4];
      const speed = emberSeeds[i * 4 + 1];
      emberPos[i * 3] += Math.sin(time * 0.35 + seed) * dt * 0.06;
      emberPos[i * 3 + 1] += dt * speed * 0.3;
      emberPos[i * 3 + 2] += Math.cos(time * 0.22 + seed) * dt * 0.02;
      if (emberPos[i * 3 + 1] > 11) {
        emberPos[i * 3 + 1] = -9;
        emberPos[i * 3] = -5.5 + Math.random() * 11;
      }
    }
    emberGeo.attributes.position.needsUpdate = true;

    fanA.blades.rotation.z -= dt * 1.6;
    fanB.blades.rotation.z += dt * 1.1;

    const pulse = 0.5 + Math.sin(time * 1.7) * 0.5;
    redLight.intensity = 20 + pulse * 15;
    cyanLight.intensity = 13 + Math.sin(time * 1.2 + 1.1) * 5;
    warmLight.intensity = 26 + Math.sin(time * 2.4) * 4;
    rimLight.intensity = 13 + Math.sin(time * 1.8 + 2) * 4;

    for (let i = 0; i < dividerBulbs.length; i += 1) {
      const v = Math.sin(time * 2.2 - i * 0.7);
      dividerBulbs[i].scale.setScalar(v > 0.55 ? 1.8 : 0.75);
    }

    for (let i = 0; i < dividerGlows.length; i += 1) {
      dividerGlows[i].material.opacity = 0.65 + Math.sin(time * 2 + i) * 0.2;
    }

    for (let i = 0; i < sideColumns.length; i += 1) {
      sideColumns[i].material.opacity = 0.52 + Math.sin(time * 1.4 + i * 1.7) * 0.16;
    }

    hazardTexture.offset.y = (time * 0.006) % 1;
  }

  return {
    group: environment,
    update,
    redLight,
    cyanLight,
    warmLight,
    backdrop,
    laneUniforms,
    setLowHealth(value) {
      redLight.intensity += value ? 6 : 0;
    }
  };
}
