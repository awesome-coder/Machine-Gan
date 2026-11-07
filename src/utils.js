export const TAU = Math.PI * 2;

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const rand = (min, max) => min + Math.random() * (max - min);
export const randInt = (min, max) => Math.floor(rand(min, max + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;
export const shuffle = (arr) => {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export function formatScore(value) {
  return Math.max(0, Math.round(value)).toString().padStart(6, '0');
}

export function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

export function hexCss(hex) {
  return `#${Number(hex).toString(16).padStart(6, '0')}`;
}

export function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return { canvas, ctx: canvas.getContext('2d') };
}

export function roundedRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w * 0.5, h * 0.5);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export function createGlowTexture(size = 128, inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const { canvas, ctx } = makeCanvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.24, inner);
  g.addColorStop(0.62, 'rgba(255,255,255,.22)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

export function createSoftTexture(size = 128) {
  const { canvas, ctx } = makeCanvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 1, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,.9)');
  g.addColorStop(0.4, 'rgba(255,255,255,.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

export function createStreakTexture() {
  const { canvas, ctx } = makeCanvas(32, 128);
  const g = ctx.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.35, 'rgba(255,255,255,.9)');
  g.addColorStop(0.7, 'rgba(255,255,255,.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(13, 0, 6, 128);
  return canvas;
}

export function createRingTexture(size = 128) {
  const { canvas, ctx } = makeCanvas(size, size);
  ctx.translate(size / 2, size / 2);
  ctx.strokeStyle = 'rgba(255,255,255,.95)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.4, 0, TAU);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,.18)';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.4, 0, TAU);
  ctx.stroke();
  return canvas;
}

export function createShadowTexture() {
  const { canvas, ctx } = makeCanvas(128, 64);
  ctx.clearRect(0, 0, 128, 64);
  ctx.save();
  ctx.translate(64, 32);
  ctx.scale(1, 0.48);
  const g = ctx.createRadialGradient(0, 0, 2, 0, 0, 62);
  g.addColorStop(0, 'rgba(0,0,0,.78)');
  g.addColorStop(0.55, 'rgba(0,0,0,.32)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 62, 0, TAU);
  ctx.fill();
  ctx.restore();
  return canvas;
}

export function createHazardTexture() {
  const { canvas, ctx } = makeCanvas(128, 64);
  ctx.fillStyle = '#11151a';
  ctx.fillRect(0, 0, 128, 64);
  ctx.save();
  ctx.translate(64, 32);
  ctx.rotate(-Math.PI / 4);
  ctx.fillStyle = '#ffb43d';
  for (let x = -160; x < 160; x += 48) {
    ctx.fillRect(x, -90, 22, 180);
  }
  ctx.restore();
  return canvas;
}

export function createBeamTexture(width = 64, height = 256) {
  const { canvas, ctx } = makeCanvas(width, height);
  const gx = ctx.createLinearGradient(0, 0, width, 0);
  gx.addColorStop(0, 'rgba(255,255,255,0)');
  gx.addColorStop(0.22, 'rgba(255,255,255,.14)');
  gx.addColorStop(0.46, 'rgba(255,255,255,.92)');
  gx.addColorStop(0.56, 'rgba(255,255,255,.92)');
  gx.addColorStop(0.78, 'rgba(255,255,255,.14)');
  gx.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gx;
  ctx.fillRect(0, 0, width, height);
  const gy = ctx.createLinearGradient(0, 0, 0, height);
  gy.addColorStop(0, 'rgba(255,255,255,0)');
  gy.addColorStop(0.15, 'rgba(255,255,255,1)');
  gy.addColorStop(0.85, 'rgba(255,255,255,1)');
  gy.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = gy;
  ctx.fillRect(0, 0, width, height);
  return canvas;
}

export function makeLabelSpriteTexture(text, sub, color = '#65efff', width = 512, height = 128) {
  const { canvas, ctx } = makeCanvas(width, height);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(3,8,13,.72)';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.7;
  ctx.strokeRect(2, 2, width - 4, height - 4);
  ctx.globalAlpha = 1;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 6, height);
  ctx.fillStyle = color;
  ctx.font = '600 34px "Microsoft YaHei", sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 28, height * 0.38);
  ctx.fillStyle = 'rgba(194,231,244,.5)';
  ctx.font = '500 20px Consolas, monospace';
  ctx.letterSpacing = '3px';
  ctx.fillText(sub, 29, height * 0.7);
  return canvas;
}

export function createLabelTexture(state) {
  const width = 512;
  const height = 300;
  const { canvas, ctx } = makeCanvas(width, height);
  const color = state.color;
  const rarity = state.rarity;
  const name = state.name;
  const hp = state.hp;
  const baseAlpha = state.flash ? 1 : 0.92;

  ctx.clearRect(0, 0, width, height);
  // glass plate
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, 'rgba(8,15,23,.94)');
  bg.addColorStop(0.7, 'rgba(5,10,16,.86)');
  bg.addColorStop(1, 'rgba(5,9,14,.72)');
  ctx.fillStyle = bg;
  roundedRect(ctx, 16, 14, width - 32, height - 28, 10);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.72 * baseAlpha;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.globalAlpha = 1;

  // corner cuts
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.95;
  ctx.fillRect(16, 14, 58, 4);
  ctx.fillRect(16, 14, 4, 52);
  ctx.fillRect(width - 54, 14, 38, 4);
  ctx.fillRect(width - 20, 14, 4, 38);
  ctx.fillRect(16, height - 18, 58, 4);
  ctx.fillRect(16, height - 66, 4, 52);
  ctx.globalAlpha = 1;

  // header
  ctx.fillStyle = color;
  ctx.font = '600 16px Consolas, monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.92;
  ctx.fillText('SUPPLY // 军需补给', 36, 44);
  ctx.textAlign = 'right';
  ctx.fillText(rarity, width - 36, 44);
  ctx.globalAlpha = 1;

  // separators
  ctx.strokeStyle = 'rgba(188,233,248,.15)';
  ctx.beginPath();
  ctx.moveTo(36, 60);
  ctx.lineTo(width - 36, 60);
  ctx.moveTo(36, 206);
  ctx.lineTo(width - 36, 206);
  ctx.stroke();

  // number
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = state.flash ? 30 : 14;
  ctx.font = `800 ${hp > 999 ? 92 : 114}px "Bahnschrift Condensed", "Arial Narrow", sans-serif`;
  ctx.fillText(String(hp), width / 2, 133);
  ctx.shadowBlur = 0;

  // name
  ctx.fillStyle = '#f2fbff';
  ctx.font = '700 29px "Microsoft YaHei", "Arial Narrow", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(name, 36, 237);
  ctx.fillStyle = 'rgba(142,170,187,.8)';
  ctx.font = '500 17px Consolas, monospace';
  ctx.textAlign = 'right';
  ctx.fillText(state.tag || 'BREAK TO CLAIM', width - 36, 239);

  return canvas;
}

export function disposeCanvasTexture(texture) {
  if (!texture) return;
  texture.dispose();
}
