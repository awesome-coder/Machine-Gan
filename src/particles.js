import * as THREE from 'three';

const scratchColor = new THREE.Color();

const vertexShader = /* glsl */ `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uProjectionScale;

  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = max(1.0, aSize * uProjectionScale / max(1.0, -mvPosition.z));
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    float alpha = tex.a * vAlpha;
    if (alpha < 0.006) discard;
    gl_FragColor = vec4(vColor * tex.rgb, alpha);
  }
`;

export class ParticleField {
  constructor(scene, { max = 700, texture, blending = THREE.AdditiveBlending, depthWrite = false } = {}) {
    this.max = max;
    this.scene = scene;
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.sizes = new Float32Array(max);
    this.alphas = new Float32Array(max);
    this.velocities = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.sizeStart = new Float32Array(max);
    this.sizeEnd = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.gravity = new Float32Array(max);
    this.cursor = 0;
    this.active = 0;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uProjectionScale: { value: 800 }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite,
      depthTest: true,
      blending
    });

    this.geometry = geometry;
    this.material = material;
    this.points = new THREE.Points(geometry, material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 14;
    this.scene.add(this.points);
  }

  setProjectionScale(scale) {
    this.material.uniforms.uProjectionScale.value = scale;
  }

  spawn({
    x = 0, y = 0, z = 0,
    vx = 0, vy = 0, vz = 0,
    life = 0.6, size = 0.12, endScale = 0.2,
    color = 0xffffff, gravity = 0, drag = 0, alpha = 1
  } = {}) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.max;
    const i3 = i * 3;
    this.positions[i3] = x;
    this.positions[i3 + 1] = y;
    this.positions[i3 + 2] = z;
    this.velocities[i3] = vx;
    this.velocities[i3 + 1] = vy;
    this.velocities[i3 + 2] = vz;
    scratchColor.set(color);
    this.colors[i3] = scratchColor.r;
    this.colors[i3 + 1] = scratchColor.g;
    this.colors[i3 + 2] = scratchColor.b;
    this.sizes[i] = size;
    this.alphas[i] = alpha;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.sizeStart[i] = size;
    this.sizeEnd[i] = endScale;
    this.drag[i] = drag;
    this.gravity[i] = gravity;
    this.active = Math.min(this.max, this.active + 1);
    return i;
  }

  burst(x, y, z, count, options = {}) {
    const {
      speed = 3,
      spread = Math.PI * 2,
      direction = 0,
      life = 0.5,
      size = 0.12,
      endScale = 0.1,
      color = 0xffffff,
      colors = null,
      gravity = 0,
      drag = 3,
      alpha = 1,
      zSpread = 0.5
    } = options;
    for (let i = 0; i < count; i += 1) {
      const angle = direction + (Math.random() - 0.5) * spread;
      const speedVar = speed * (0.35 + Math.random() * 0.8);
      const chosen = colors ? colors[Math.floor(Math.random() * colors.length)] : color;
      this.spawn({
        x: x + (Math.random() - 0.5) * 0.1,
        y: y + (Math.random() - 0.5) * 0.1,
        z: z + (Math.random() - 0.5) * zSpread,
        vx: Math.cos(angle) * speedVar,
        vy: Math.sin(angle) * speedVar,
        vz: (Math.random() - 0.5) * speedVar * 0.4,
        life: life * (0.55 + Math.random() * 0.8),
        size: size * (0.55 + Math.random() * 0.8),
        endScale,
        color: chosen,
        gravity,
        drag,
        alpha
      });
    }
  }

  update(dt) {
    if (dt <= 0 || this.active <= 0) return;
    let any = false;
    for (let i = 0; i < this.max; i += 1) {
      if (this.life[i] <= 0) continue;
      any = true;
      this.life[i] -= dt;
      const i3 = i * 3;
      if (this.life[i] <= 0) {
        this.alphas[i] = 0;
        this.sizes[i] = 0;
        continue;
      }
      const dragFactor = Math.max(0, 1 - this.drag[i] * dt);
      this.velocities[i3] *= dragFactor;
      this.velocities[i3 + 1] = this.velocities[i3 + 1] * dragFactor - this.gravity[i] * dt;
      this.velocities[i3 + 2] *= dragFactor;
      this.positions[i3] += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      this.sizes[i] = this.sizeStart[i] + (this.sizeEnd[i] - this.sizeStart[i]) * t;
      this.alphas[i] = (1 - t) * (1 - t * 0.18);
    }
    if (!any) return;
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }

  clear() {
    this.alphas.fill(0);
    this.sizes.fill(0);
    this.life.fill(0);
    this.active = 0;
    this.cursor = 0;
    this.geometry.attributes.aAlpha.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
  }
}
