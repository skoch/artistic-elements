import summary from 'rollup-plugin-summary';
// import multiInput from 'rollup-plugin-multi-input';
// import { terser } from 'rollup-plugin-terser';
// import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: ['dist/index.js', 'dist/react/index.js'],
  // input: ['src/**/*.ts'],
  // input: [
  //   'src/index.ts',
  //   'src/artistic/circular.ts',
  //   'src/artistic/doughnut.ts',
  //   'src/artistic/rectangle.ts',
  //   'src/artistic/triangle-up.ts',
  //   'src/artistic/triangle-down.ts',
  //   'src/artistic/triangle-left.ts',
  //   'src/artistic/triangle-right.ts',
  //   'src/artistic/circular-gradient.ts',
  //   'src/artistic/rectangle-gradient.ts',
  //   'src/artistic/triangle-rectangle.ts',
  //   'src/react/index.ts',
  //   'src/react/circular.ts',
  //   'src/react/doughnut.ts',
  //   'src/react/rectangle.ts',
  //   'src/react/triangle-up.ts',
  //   'src/react/triangle-down.ts',
  //   'src/react/triangle-left.ts',
  //   'src/react/triangle-right.ts',
  //   'src/react/circular-gradient.ts',
  //   'src/react/rectangle-gradient.ts',
  //   'src/react/triangle-rectangle.ts',
  // ],
  output: {
    dir: 'build',
    name: 'bundle',
    format: 'esm',
    compact: true,
    sourcemap: true,
  },
  plugins: [
    // multiInput(),
    nodeResolve(),
    // typescript(),
    minifyHTML(),
    // terser({
    //   ecma: 2020,
    //   module: true,
    //   warnings: true,
    // }),
    summary(),
  ],
};
