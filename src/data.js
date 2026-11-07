export const RARITIES = [
  { key: 'common', name: '常规', color: 0x8fdcff, css: '#8fdcff', weight: 57 },
  { key: 'rare', name: '稀有', color: 0xb79bff, css: '#b79bff', weight: 28 },
  { key: 'epic', name: '史诗', color: 0xffc75a, css: '#ffc75a', weight: 12 },
  { key: 'legendary', name: '传说', color: 0xff667c, css: '#ff667c', weight: 3 }
];

export const RARITY_BY_KEY = Object.fromEntries(RARITIES.map((r) => [r.key, r]));
export const RARITY_INDEX = Object.fromEntries(RARITIES.map((r, i) => [r.key, i]));

export const WEAPONS = {
  vulcan: {
    id: 'vulcan',
    name: 'V-07 复仇者',
    shortName: 'VULCAN',
    type: '制式机枪',
    icon: 'MG',
    color: 0x72f2ff,
    css: '#72f2ff',
    kind: 'bullet',
    fireInterval: 0.105,
    damage: 3.4,
    speed: 46,
    count: 1,
    spread: 0.032,
    pierce: 0,
    radius: 0.2,
    recoil: 0.38,
    shake: 0.02,
    desc: '稳定、精准的自动火力。',
    sound: 'mg'
  },
  pyro: {
    id: 'pyro',
    name: '焚城 · 火焰喷射器',
    shortName: 'PYRO',
    type: '近距喷射',
    icon: 'PYR',
    color: 0xff7a2e,
    css: '#ff7a2e',
    kind: 'flame',
    fireInterval: 0.055,
    damage: 1.65,
    speed: 17,
    count: 1,
    spread: 0.27,
    pierce: 99,
    radius: 0.5,
    life: 0.52,
    recoil: 0.12,
    shake: 0.01,
    rarity: 'rare',
    desc: '短距穿透火焰，附加持续燃烧。',
    sound: 'flame'
  },
  arc: {
    id: 'arc',
    name: '万伏 · 电弧冲锋枪',
    shortName: 'ARC-9',
    type: '连锁电击',
    icon: 'ARC',
    color: 0xc49bff,
    css: '#c49bff',
    kind: 'bullet',
    fireInterval: 0.088,
    damage: 2.85,
    speed: 54,
    count: 1,
    spread: 0.046,
    pierce: 0,
    radius: 0.22,
    recoil: 0.26,
    shake: 0.015,
    chain: 2,
    rarity: 'rare',
    desc: '命中后电弧跳跃至附近目标。',
    sound: 'arc'
  },
  rail: {
    id: 'rail',
    name: '雷神 · 磁轨炮',
    shortName: 'RAIL',
    type: '贯穿射线',
    icon: 'RAIL',
    color: 0x9df8ff,
    css: '#9df8ff',
    kind: 'beam',
    fireInterval: 0.72,
    damage: 37,
    speed: 160,
    count: 1,
    spread: 0,
    pierce: 99,
    radius: 0.34,
    recoil: 1.2,
    shake: 0.22,
    rarity: 'epic',
    desc: '蓄力贯穿射线，撕开整条直线。',
    sound: 'rail'
  },
  plasma: {
    id: 'plasma',
    name: '湮灭 · 等离子炮',
    shortName: 'PLASMA',
    type: '范围爆破',
    icon: 'PLS',
    color: 0x9bff63,
    css: '#9bff63',
    kind: 'orb',
    fireInterval: 0.32,
    damage: 13,
    speed: 25,
    count: 1,
    spread: 0.015,
    pierce: 0,
    radius: 0.42,
    recoil: 0.9,
    shake: 0.08,
    aoe: 1.65,
    rarity: 'epic',
    desc: '等离子爆球，命中后范围灼烧。',
    sound: 'plasma'
  }
};

export const WEAPON_ORDER = ['vulcan', 'pyro', 'arc', 'rail', 'plasma'];
export const WEAPON_DROPS = ['pyro', 'arc', 'rail', 'plasma'];

export const UPGRADES = [
  {
    id: 'damage',
    name: '高压枪管',
    icon: 'DMG',
    tag: 'WEAPON MOD',
    desc: ['全武器伤害 +18%', '全武器伤害 +30%', '全武器伤害 +45%', '全武器伤害 +70%'],
    effect: 'damage',
    values: [0.18, 0.3, 0.45, 0.7],
    weight: 20
  },
  {
    id: 'rate',
    name: '伺服供弹',
    icon: 'ROF',
    tag: 'WEAPON MOD',
    desc: ['射速 +14%', '射速 +24%', '射速 +36%', '射速 +55%'],
    effect: 'rate',
    values: [0.14, 0.24, 0.36, 0.55],
    weight: 18
  },
  {
    id: 'multishot',
    name: '双联枪管',
    icon: '×2',
    tag: 'BARREL MOD',
    desc: ['额外弹丸 +1', '额外弹丸 +1', '额外弹丸 +2', '额外弹丸 +2'],
    effect: 'multishot',
    values: [1, 1, 2, 2],
    weight: 13,
    maxStacks: 4
  },
  {
    id: 'pierce',
    name: '穿甲弹芯',
    icon: 'AP',
    tag: 'AMMO MOD',
    desc: ['穿透 +1 · 伤害 +6%', '穿透 +2 · 伤害 +8%', '穿透 +3 · 伤害 +12%', '穿透 +5 · 伤害 +18%'],
    effect: 'pierce',
    values: [1, 2, 3, 5],
    weight: 12
  },
  {
    id: 'crit',
    name: '暴击核心',
    icon: 'CRIT',
    tag: 'FIRE CONTROL',
    desc: ['暴击率 +6%', '暴击率 +10%', '暴击率 +15%', '暴击率 +22%'],
    effect: 'crit',
    values: [0.06, 0.1, 0.15, 0.22],
    weight: 12,
    maxStacks: 5
  },
  {
    id: 'explosive',
    name: '爆裂弹头',
    icon: 'HE',
    tag: 'AMMO MOD',
    desc: ['命中 10% 引发爆炸', '命中 16% 引发爆炸', '命中 24% 引发爆炸', '命中 36% 引发爆炸'],
    effect: 'explosive',
    values: [0.1, 0.16, 0.24, 0.36],
    weight: 9,
    maxStacks: 3
  },
  {
    id: 'frost',
    name: '冷凝弹',
    icon: 'CRYO',
    tag: 'AMMO MOD',
    desc: ['命中减速 18%', '命中减速 28%', '命中减速 40%', '命中减速 55%'],
    effect: 'frost',
    values: [0.18, 0.28, 0.4, 0.55],
    weight: 8,
    maxStacks: 3
  },
  {
    id: 'drone',
    name: '哨戒无人机',
    icon: 'DRN',
    tag: 'AUTONOMOUS',
    desc: ['部署 1 架自动攻击无人机', '部署 1 架自动攻击无人机', '部署 2 架自动攻击无人机', '部署 2 架自动攻击无人机'],
    effect: 'drone',
    values: [1, 1, 2, 2],
    weight: 9,
    maxStacks: 3
  },
  {
    id: 'repair',
    name: '纳米修复',
    icon: 'MED',
    tag: 'SUPPORT',
    desc: ['立即修复 25 装甲', '立即修复 45 装甲', '立即修复 70 装甲', '立即修复 100 装甲'],
    effect: 'repair',
    values: [25, 45, 70, 100],
    weight: 8
  },
  {
    id: 'armor',
    name: '反应装甲',
    icon: 'ARM',
    tag: 'SUPPORT',
    desc: ['最大装甲 +15 并修复', '最大装甲 +25 并修复', '最大装甲 +40 并修复', '最大装甲 +60 并修复'],
    effect: 'armor',
    values: [15, 25, 40, 60],
    weight: 7
  },
  {
    id: 'shield',
    name: '壁垒力场',
    icon: 'AEGIS',
    tag: 'DEFENSE',
    desc: ['脱战 5 秒后每秒修复 2 装甲', '脱战 5 秒后每秒修复 4 装甲', '脱战 4 秒后每秒修复 7 装甲', '脱战 3 秒后每秒修复 12 装甲'],
    effect: 'shield',
    values: [2, 4, 7, 12],
    weight: 6,
    maxStacks: 4
  },
  {
    id: 'shock',
    name: '脉冲发生器',
    icon: 'NOVA',
    tag: 'AREA DENIAL',
    desc: ['每 9 秒释放击退冲击波', '每 9 秒释放击退冲击波', '每 7 秒释放强化冲击波', '每 5 秒释放毁灭冲击波'],
    effect: 'shock',
    values: [1, 1, 2, 3],
    weight: 7,
    maxStacks: 3
  }
];

export const UPGRADE_BY_ID = Object.fromEntries(UPGRADES.map((u) => [u.id, u]));

export const ENEMY_TYPES = {
  walker: {
    id: 'walker',
    name: '行尸',
    hp: 7.5,
    speed: 1.05,
    damage: 8,
    radius: 0.43,
    zRadius: 0.38,
    scale: 1,
    score: 100,
    weight: 55
  },
  runner: {
    id: 'runner',
    name: '疾行者',
    hp: 4.6,
    speed: 1.95,
    damage: 6,
    radius: 0.35,
    zRadius: 0.32,
    scale: 0.9,
    score: 150,
    weight: 26
  },
  brute: {
    id: 'brute',
    name: '装甲感染者',
    hp: 25,
    speed: 0.57,
    damage: 19,
    radius: 0.66,
    zRadius: 0.52,
    scale: 1.32,
    score: 450,
    weight: 10
  },
  spitter: {
    id: 'spitter',
    name: '喷吐者',
    hp: 13,
    speed: 0.74,
    damage: 7,
    radius: 0.51,
    zRadius: 0.4,
    scale: 1.05,
    score: 300,
    ranged: true,
    weight: 9
  },
  boss: {
    id: 'boss',
    name: '暴君',
    hp: 230,
    speed: 0.31,
    damage: 26,
    radius: 1.25,
    zRadius: 0.7,
    scale: 2.35,
    score: 2600,
    boss: true,
    weight: 0
  }
};

export const WEAPON_DISPLAY = {
  vulcan: { css: '#72f2ff' },
  pyro: { css: '#ff7a2e' },
  arc: { css: '#c49bff' },
  rail: { css: '#9df8ff' },
  plasma: { css: '#9bff63' }
};
