
// // rollup.config.js
// import merge from 'deepmerge';
// import { createSpaConfig } from '@open-wc/building-rollup';
// import typescript from '@rollup/plugin-typescript';

// const baseConfig = createSpaConfig();
// console.log('createSpaConfig', createSpaConfig, baseConfig)

// let obj = merge(baseConfig, {
//     // input: './index.html',
//     input: './src/app.ts',
//     plugins: [typescript()],
// });
// console.log('obj', obj)
// export default obj



// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.ts',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [
    typescript({}),
    nodeResolve(),
  ],
};