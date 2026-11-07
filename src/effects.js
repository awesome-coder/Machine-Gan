import * as THREE from 'three';
import { createBeamTexture } from './utils.js';

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const dummy = new THREE.Object3D();
const direction = new THREE.Vector3();

export class TracerPool {
  constructor(scene, max = 170) {
    this.max = max;
    const geometry = new THREE.BoxGeometry(0.048, 1, 0.048);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 12;
    this.mesh.count = max;
    this.color = new THREE.Color();
    for (let i = 0; i < max; i += 1) {
      this.mesh.setColorAt(i, this.color.setHex(0xffffff));
      dummy.position.set(0, 0, -100);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceColor.needsUpdate = true;
    scene.add(this.mesh);
  }

  update(bullets) {
    let idx = 0;
    for (let i = 0; i < bullets.length && idx < this.max; i += 1) {
      const b = bullets[i];
      if (!b.active || b.kind !== 'bullet') continue;
      direction.set(b.vx, b.vy, 0).normalize();
      const len = b.tracerLength || 0.55;
      dummy.position.set(
        b.x - direction.x * len * 0.5,
        b.y - direction.y * len * 0.5,
        b.z
      );
      dummy.quaternion.setFromUnitVectors(Y_AXIS, direction);
      dummy.scale.set(1, len, 1);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(idx, dummy.matrix);
      this.mesh.setColorAt(idx, this.color.setHex(b.tracerColor || b.color || 0x9df8ff));
      idx += 1;
    }
    for (let i = idx; i < this.max; i += 1) {
      dummy.position.set(0, 0, -100);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}

export class OrbPool {
  constructor(scene, max = 48) {
    this.max = max;
    const geometry = new THREE.SphereGeometry(1, 10, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 12;
    this.mesh.count = max;
    this.color = new THREE.Color();
    for (let i = 0; i < max; i += 1) {
      this.mesh.setColorAt(i, this.color.setHex(0xffffff));
      dummy.position.set(0, 0, -100);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceColor.needsUpdate = true;
    scene.add(this.mesh);
  }

  update(lists) {
    let idx = 0;
    for (const list of lists) {
      for (let i = 0; i < list.length && idx < this.max; i += 1) {
        const b = list[i];
        if (!b.active) continue;
        if (b.kind !== 'orb' && b.kind !== 'acid') continue;
        const scale = b.radius || 0.2;
        dummy.position.set(b.x, b.y, b.z);
        dummy.scale.setScalar(scale);
        dummy.quaternion.identity();
        dummy.updateMatrix();
        this.mesh.setMatrixAt(idx, dummy.matrix);
        this.mesh.setColorAt(idx, this.color.setHex(b.color || 0x9bff63));
        idx += 1;
      }
    }
    for (let i = idx; i < this.max; i += 1) {
      dummy.position.set(0, 0, -100);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}

export class BeamPool {
  constructor(scene, max = 32) {
    this.max = max;
    const texture = new THREE.CanvasTexture(createBeamTexture(48, 256));
    texture.colorSpace = THREE.SRGBColorSpace;
    this.items = [];
    for (let i = 0; i < max; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
      mesh.visible = false;
      mesh.renderOrder = 13;
      scene.add(mesh);
      this.items.push({ mesh, material, life: 0, maxLife: 1, baseOpacity: 1, baseWidth: 1 });
    }
    this.cursor = 0;
  }

  fire(x1, y1, x2, y2, color, width = 0.15, life = 0.18, opacity = 1, z = 0.75) {
    let item = null;
    for (let i = 0; i < this.max; i += 1) {
      const candidate = this.items[(this.cursor + i) % this.max];
      if (candidate.life <= 0) {
        item = candidate;
        break;
      }
    }
    if (!item) item = this.items[this.cursor];
    this.cursor = (this.cursor + 1) % this.max;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.max(0.1, Math.hypot(dx, dy));
    item.mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, z);
    item.mesh.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
    item.mesh.scale.set(width, len, 1);
    item.mesh.visible = true;
    item.material.color.setHex(color);
    item.material.opacity = opacity;
    item.life = life;
    item.maxLife = life;
    item.baseOpacity = opacity;
    item.baseWidth = width;
  }

  update(dt) {
    for (const item of this.items) {
      if (item.life <= 0) continue;
      item.life -= dt;
      const t = Math.max(0, item.life / item.maxLife);
      item.material.opacity = item.baseOpacity * t;
      item.mesh.scale.x = item.baseWidth * (0.6 + t * 0.4);
      if (item.life <= 0) item.mesh.visible = false;
    }
  }
}

export class ArcPool {
  constructor(scene, max = 30) {
    this.max = max;
    this.items = [];
    for (let i = 0; i < max; i += 1) {
      const positions = new Float32Array(26 * 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
      geometry.setDrawRange(0, 0);
      const material = new THREE.LineBasicMaterial({
        color: 0xc49bff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      });
      const line = new THREE.Line(geometry, material);
      line.frustumCulled = false;
      line.renderOrder = 14;
      line.visible = false;
      scene.add(line);
      this.items.push({ line, geometry, material, life: 0, maxLife: 1, baseOpacity: 1 });
    }
    this.cursor = 0;
  }

  fire(points, color = 0xc49bff, life = 0.16, opacity = 0.85) {
    if (!points || points.length < 2) return;
    let item = null;
    for (let i = 0; i < this.max; i += 1) {
      const candidate = this.items[(this.cursor + i) % this.max];
      if (candidate.life <= 0) {
        item = candidate;
        break;
      }
    }
    if (!item) item = this.items[this.cursor];
    this.cursor = (this.cursor + 1) % this.max;
    const positions = item.geometry.attributes.position.array;
    const count = Math.min(points.length, 26);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = points[i].x;
      positions[i * 3 + 1] = points[i].y;
      positions[i * 3 + 2] = 0.8;
    }
    item.geometry.attributes.position.needsUpdate = true;
    item.geometry.setDrawRange(0, count);
    item.material.color.setHex(color);
    item.material.opacity = opacity;
    item.life = life;
    item.maxLife = life;
    item.baseOpacity = opacity;
    item.line.visible = true;
  }

  update(dt) {
    for (const item of this.items) {
      if (item.life <= 0) continue;
      item.life -= dt;
      item.material.opacity = item.baseOpacity * Math.max(0, item.life / item.maxLife);
      if (item.life <= 0) item.line.visible = false;
    }
  }
}

export class RingPool {
  constructor(scene, max = 18) {
    this.items = [];
    this.cursor = 0;
    const geometry = new THREE.RingGeometry(0.7, 1, 64, 1);
    for (let i = 0; i < max; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffc75a,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      mesh.renderOrder = 15;
      scene.add(mesh);
      this.items.push({ mesh, material, life: 0, maxLife: 1, start: 0.2, end: 3, opacity: 1 });
    }
  }

  fire(x, y, z, color, endRadius = 3, life = 0.4, opacity = 0.8, startRadius = 0.25) {
    const item = this.items[this.cursor];
    this.cursor = (this.cursor + 1) % this.items.length;
    item.mesh.position.set(x, y, z);
    item.mesh.scale.setScalar(startRadius);
    item.mesh.visible = true;
    item.material.color.setHex(color);
    item.material.opacity = opacity;
    item.life = life;
    item.maxLife = life;
    item.start = startRadius;
    item.end = endRadius;
    item.opacity = opacity;
  }

  update(dt) {
    for (const item of this.items) {
      if (item.life <= 0) continue;
      item.life -= dt;
      const t = 1 - Math.max(0, item.life / item.maxLife);
      const ease = 1 - (1 - t) ** 3;
      const scale = item.start + (item.end - item.start) * ease;
      item.mesh.scale.setScalar(scale);
      item.material.opacity = item.opacity * (1 - t) ** 1.4;
      if (item.life <= 0) item.mesh.visible = false;
    }
  }
}
