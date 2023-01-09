
// rollup.config.js

import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';



import { nodeResolve } from '@rollup/plugin-node-resolve';



const baseConfig = createBasicConfig();


// let obj = merge(baseConfig, {
//     input: './out-tsc/src/app.js',
//     output: [
//         {
//             dir: 'dist1',
//             format: 'cjs'
//         },
//         {
//             dir: 'dist2',
//             format: 'esm'
//         },
//     ],
// })

// console.log('obj', obj)
// {
//     preserveEntrySignatures: false,
//     treeshake: true,
//     output: [ { dir: 'dist1', format: 'cjs' }, { dir: 'dist2', format: 'esm' } ],
//     plugins: [
//       {
//         name: 'node-resolve',
//         version: '13.3.0',
//         buildStart: [Function: buildStart],
//         generateBundle: [Function: generateBundle],
//         resolveId: [AsyncFunction: resolveId],
//         load: [Function: load],
//         getPackageInfoForId: [Function: getPackageInfoForId]
//       },
//       {
//         name: 'babel',
//         options: [Function: options],
//         resolveId: [Function: resolveId],
//         load: [Function: load],
//         transform: [Function: transform]
//       },
//       { name: 'terser', renderChunk: [AsyncFunction: renderChunk] }
//     ],
//     input: './out-tsc/src/app.js'
//   }
// export default obj


export default {
    // preserveEntrySignatures: false,
    // treeshake: true,
    input: './out-tsc/src/app.js',
    output: [ { dir: 'dist1', format: 'cjs' }, { dir: 'dist2', format: 'esm' } ],
    plugins: [
        nodeResolve()
    //   {
    //     name: 'babel',
    //     options: [Function: options],
    //     resolveId: [Function: resolveId],
    //     load: [Function: load],
    //     transform: [Function: transform]
    //   },
    ],
  }