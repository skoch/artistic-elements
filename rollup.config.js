import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: [
    'src/index.ts',
    'src/artistic/circular.ts',
    'src/artistic/doughnut.ts',
    'src/artistic/rectangle.ts',
    'src/artistic/triangle-up.ts',
    'src/artistic/triangle-down.ts',
    'src/artistic/triangle-left.ts',
    'src/artistic/triangle-right.ts',
    'src/artistic/circular-gradient.ts',
    'src/artistic/rectangle-gradient.ts',
    'src/artistic/triangle-rectangle.ts',
  ],
  output: {
    dir: 'dist',
    name: 'bundle',
    format: 'esm',
    compact: true,
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript(),
    minifyHTML(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    summary(),
  ],
};
