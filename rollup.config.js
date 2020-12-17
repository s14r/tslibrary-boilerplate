import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    json(),
    replace({
      'process.env.LIB_VERSION': JSON.stringify(pkg.version)
    }),
    typescript()
  ]
};
