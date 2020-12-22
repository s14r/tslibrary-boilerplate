import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'library',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    json(),
    replace({
      'process.env.LIB_VERSION': JSON.stringify(pkg.version)
    })
  ]
};
