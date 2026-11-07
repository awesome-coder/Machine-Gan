import { Game } from './game.js';

const canvas = document.getElementById('scene');

function showFatal(message) {
  const boot = document.getElementById('boot');
  if (!boot) return;
  boot.innerHTML = `
    <div class="boot-mark" style="color:#ff5566">SIGNAL LOST</div>
    <p style="max-width:280px;text-align:center;color:#7d93a3;font-family:Consolas,monospace;font-size:10px;line-height:1.7;letter-spacing:.06em">
      ${message}<br>请使用支持 WebGL 2 的现代浏览器。
    </p>
  `;
}

try {
  const game = new Game(canvas);
  window.DEADSPLIT = game;
  console.info('%cDEAD//SPLIT%c  online. window.DEADSPLIT available for inspection.', 'color:#65efff;font-weight:700', 'color:#7d93a3');
} catch (error) {
  console.error(error);
  showFatal('无法初始化三维战场。');
}
