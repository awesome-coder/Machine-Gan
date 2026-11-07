const NOTE = (n) => 440 * (2 ** ((n - 69) / 12));

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.sfxBus = null;
    this.noiseBuffer = null;
    try {
      this.muted = localStorage.getItem('dead-split-muted') === '1';
    } catch (error) {
      this.muted = false;
    }
    this.musicPlaying = false;
    this.musicGain = 0;
    this.nextNote = 0;
    this.step = 0;
    this.lastShot = 0;
    this.lastHit = 0;
    this.lastFlameShot = 0;
    this.flameLevel = 0;
    this.flameGain = null;
    this.flameSource = null;
    this.started = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.72;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 18;
    comp.ratio.value = 8;
    comp.attack.value = 0.003;
    comp.release.value = 0.16;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = 0.72;
    this.sfxBus.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.32;
    this.musicBus.connect(this.master);

    this.noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 1.2, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;

    this.createDrone();
    this.createFlameLoop();
    this.started = true;
  }

  createDrone() {
    const t = this.ctx.currentTime;
    const bus = this.ctx.createGain();
    bus.gain.value = 0.04;
    bus.connect(this.musicBus);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 220;
    filter.Q.value = 5;
    filter.connect(bus);

    [55, 55.35, 82.4].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = i === 2 ? 'triangle' : 'sawtooth';
      osc.frequency.value = freq;
      const g = this.ctx.createGain();
      g.gain.value = i === 2 ? 0.1 : 0.06;
      osc.connect(g);
      g.connect(filter);
      osc.start(t);
    });

    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 55;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(t);
    this.droneBus = bus;
  }

  createFlameLoop() {
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    source.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxBus);
    source.start();
    this.flameGain = gain;
    this.flameSource = source;
  }

  setMuted(value) {
    this.muted = value;
    try {
      localStorage.setItem('dead-split-muted', value ? '1' : '0');
    } catch (error) {
      // storage can be unavailable
    }
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(value ? 0 : 0.72, t + 0.08);
    if (value && this.flameGain) {
      this.flameGain.gain.cancelScheduledValues(t);
      this.flameGain.gain.linearRampToValueAtTime(0, t + 0.05);
      this.flameLevel = 0;
    }
  }

  toggleMuted() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  makePanner(pan = 0) {
    if (!this.ctx.createStereoPanner) return null;
    const panner = this.ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    return panner;
  }

  noiseBurst({ duration = 0.08, gain = 0.1, frequency = 1800, q = 0.8, pan = 0, type = 'bandpass' } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.5;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(filter);
    filter.connect(g);
    const panner = this.makePanner(pan);
    if (panner) {
      g.connect(panner);
      panner.connect(this.sfxBus);
    } else {
      g.connect(this.sfxBus);
    }
    src.start(t);
    src.stop(t + duration + 0.02);
  }

  tone({ freq = 220, endFreq = freq, duration = 0.08, gain = 0.08, type = 'sine', pan = 0, delay = 0 } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (endFreq !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + duration);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(g);
    const panner = this.makePanner(pan);
    if (panner) {
      g.connect(panner);
      panner.connect(this.sfxBus);
    } else {
      g.connect(this.sfxBus);
    }
    osc.start(t);
    osc.stop(t + duration + 0.03);
  }

  shoot(kind = 'mg', pan = 0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastShot < 0.028) return;
    this.lastShot = now;
    if (kind === 'mg') {
      this.noiseBurst({ duration: 0.045, gain: 0.052, frequency: 1900, q: 0.65, pan });
      this.tone({ freq: 118, endFreq: 54, duration: 0.055, gain: 0.032, type: 'square', pan });
    } else if (kind === 'flame') {
      if (now - this.lastFlameShot < 0.065) return;
      this.lastFlameShot = now;
      this.noiseBurst({ duration: 0.16, gain: 0.03, frequency: 780, q: 0.4, pan, type: 'lowpass' });
      this.setFlame(0.16);
    } else if (kind === 'arc') {
      this.noiseBurst({ duration: 0.06, gain: 0.038, frequency: 5200, q: 0.9, pan, type: 'highpass' });
      this.tone({ freq: 520, endFreq: 190, duration: 0.06, gain: 0.024, type: 'sawtooth', pan });
    } else if (kind === 'rail') {
      this.noiseBurst({ duration: 0.3, gain: 0.12, frequency: 420, q: 0.5, pan, type: 'lowpass' });
      this.tone({ freq: 1600, endFreq: 64, duration: 0.38, gain: 0.08, type: 'sawtooth', pan });
      this.tone({ freq: 90, endFreq: 40, duration: 0.5, gain: 0.11, type: 'sine', pan });
    } else if (kind === 'plasma') {
      this.tone({ freq: 180, endFreq: 56, duration: 0.22, gain: 0.06, type: 'triangle', pan });
      this.noiseBurst({ duration: 0.14, gain: 0.032, frequency: 1600, q: 1.4, pan });
    }
  }

  setFlame(level) {
    if (!this.ctx || !this.flameGain) return;
    if (Math.abs(level - this.flameLevel) < 0.01) return;
    this.flameLevel = level;
    const t = this.ctx.currentTime;
    this.flameGain.gain.cancelScheduledValues(t);
    this.flameGain.gain.linearRampToValueAtTime(this.muted ? 0 : level, t + 0.08);
  }

  hit(crit = false) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastHit < 0.045) return;
    this.lastHit = now;
    this.noiseBurst({ duration: 0.025, gain: crit ? 0.025 : 0.012, frequency: crit ? 2600 : 1400, q: 1.2 });
  }

  crateHit() {
    this.noiseBurst({ duration: 0.035, gain: 0.018, frequency: 2800, q: 2 });
    this.tone({ freq: 740, endFreq: 480, duration: 0.04, gain: 0.012, type: 'triangle' });
  }

  kill(type = 'walker') {
    const gain = type === 'boss' ? 0.18 : 0.035;
    this.noiseBurst({ duration: type === 'boss' ? 0.6 : 0.13, gain, frequency: type === 'boss' ? 300 : 620, q: 0.6, type: 'lowpass' });
    this.tone({ freq: type === 'boss' ? 90 : 170, endFreq: 40, duration: type === 'boss' ? 0.8 : 0.15, gain: gain * 0.7, type: 'sine' });
  }

  crateBreak() {
    this.noiseBurst({ duration: 0.22, gain: 0.08, frequency: 2100, q: 0.6 });
    [440, 554, 659, 880].forEach((freq, i) => {
      this.tone({ freq, duration: 0.32, gain: 0.035, type: 'triangle', delay: i * 0.045 });
    });
  }

  upgrade(rarityIndex = 0) {
    const base = rarityIndex >= 2 ? 523.25 : 392;
    const steps = [1, 1.25, 1.5, 2];
    [0, 1, 2, 3].forEach((i) => {
      this.tone({ freq: base * steps[i], duration: 0.55, gain: 0.035, type: 'sine', delay: i * 0.06 });
      this.tone({ freq: base * steps[i] * 2.01, duration: 0.4, gain: 0.012, type: 'triangle', delay: i * 0.06 });
    });
    if (rarityIndex >= 3) {
      this.tone({ freq: 130, endFreq: 52, duration: 0.9, gain: 0.09, type: 'sine' });
    }
  }

  damage() {
    this.noiseBurst({ duration: 0.2, gain: 0.1, frequency: 220, q: 0.4, type: 'lowpass' });
    this.tone({ freq: 72, endFreq: 44, duration: 0.34, gain: 0.11, type: 'sine' });
  }

  alert() {
    [0, 0.18].forEach((delay, i) => {
      this.tone({ freq: i ? 660 : 880, duration: 0.18, gain: 0.045, type: 'square', delay });
    });
    this.noiseBurst({ duration: 0.3, gain: 0.035, frequency: 1200, q: 0.5 });
  }

  shockwave() {
    this.tone({ freq: 140, endFreq: 30, duration: 0.6, gain: 0.12, type: 'sine' });
    this.noiseBurst({ duration: 0.45, gain: 0.07, frequency: 520, q: 0.4, type: 'lowpass' });
  }

  start() {
    this.init();
    if (!this.ctx) return;
    this.musicPlaying = true;
    this.step = 0;
    this.nextNote = this.ctx.currentTime + 0.08;
    this.tone({ freq: 110, endFreq: 220, duration: 0.3, gain: 0.06, type: 'sawtooth' });
    this.tone({ freq: 220, endFreq: 440, duration: 0.35, gain: 0.04, type: 'triangle', delay: 0.08 });
  }

  stopMusic() {
    this.musicPlaying = false;
    this.setFlame(0);
  }

  gameOver() {
    this.musicPlaying = false;
    this.setFlame(0);
    [220, 174, 138, 110].forEach((freq, i) => {
      this.tone({ freq, duration: 1.1, gain: 0.06, type: 'sawtooth', delay: i * 0.2 });
    });
    this.noiseBurst({ duration: 1.2, gain: 0.05, frequency: 300, q: 0.5, type: 'lowpass' });
  }

  update(intensity = 1) {
    if (!this.ctx || !this.musicPlaying || this.muted) return;
    const now = this.ctx.currentTime;
    const stepDur = 0.24;
    if (this.nextNote < now - 0.5) this.nextNote = now + 0.05;
    let guard = 0;
    while (this.nextNote < now + 0.12 && guard < 8) {
      this.scheduleStep(this.step, this.nextNote, intensity);
      this.step += 1;
      this.nextNote += stepDur;
      guard += 1;
    }
  }

  scheduleStep(step, time, intensity = 1) {
    if (!this.ctx) return;
    const s = step % 32;
    const delay = Math.max(0, time - this.ctx.currentTime);
    const kick = s % 8 === 0 || (s % 16 === 11 && intensity > 1.8);
    if (kick) {
      this.tone({ freq: 92, endFreq: 40, duration: 0.22, gain: 0.065, type: 'sine', delay });
    }
    if (s % 4 === 2) {
      this.noiseBurst({ duration: 0.035, gain: 0.012 + intensity * 0.002, frequency: 7000, q: 0.8, type: 'highpass' });
    }
    if (s % 8 === 4) {
      this.noiseBurst({ duration: 0.12, gain: 0.025, frequency: 1800, q: 0.7 });
    }
    const bassPattern = [41, 41, 48, 41, 39, 39, 46, 39];
    if (s % 2 === 0) {
      const note = bassPattern[(s / 2) % bassPattern.length];
      this.tone({ freq: NOTE(note), duration: 0.34, gain: 0.026, type: 'triangle', delay });
    }
    if (intensity > 2.5 && s % 16 === 14) {
      this.tone({ freq: NOTE(65), endFreq: NOTE(60), duration: 0.5, gain: 0.02, type: 'sawtooth', delay });
    }
  }
}
