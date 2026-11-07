import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'game.js',
  legalComments: 'none',
  banner: {
    js: '/* DEAD//SPLIT - bundled with esbuild. Original source lives in /src. */'
  }
});

console.log('Built game.js');
