import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'assetsSrc/scripts.js',
  output: {
    dir: 'assets',
    format: 'iife',
  },
  plugins: [nodeResolve(), isProduction && terser()],
};
