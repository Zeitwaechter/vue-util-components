// rollup.config.js
import alias      from '@rollup/plugin-alias';
import buble      from '@rollup/plugin-buble';
import commonjs   from 'rollup-plugin-commonjs';
import resolve    from 'rollup-plugin-node-resolve';
import yargs      from 'yargs-parser';
import path       from 'path';
import replace    from '@rollup/plugin-replace';
// Handle .vue SFC files
import vue        from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const argv = yargs(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

console.info(projectRoot);

const baseConfig = {
    input   : 'src/export.js',
    plugins : {
        prometheus : [
            replace({
                'process.env.NODE_ENV' : JSON.stringify('production'),
            }),
            commonjs(),
            alias({
                resolve : ['.jsx', '.js', '.vue'],
                entries : [
                    {find : '@', replacement : `${ path.resolve(projectRoot, 'src') }`},
                    {find : './elements', replacement : `${ path.resolve(projectRoot, 'src/components/elements') }`},
                    {find : './groups', replacement : `${ path.resolve(projectRoot, 'src/components/groups') }`},
                ]
            }),
        ],
        hermes     : {
            css      : true,
            template : {
                isProduction : true,
            },
        },
        epimetheus : [
            buble(),
        ],
    },
};

/** @see https://rollupjs.org/guide/en/#core-functionality */
      // under external
const external = [
          'tailwindcss',
          '@fortawesome/fontawesome-free',
          '@fortawesome/free-brands-svg-icons',
      ];

/** @see https://rollupjs.org/guide/en/#core-functionality */
      // @under output.globals
const globals = {
          // tailwindcss: tailwindcss
      };

/** @see https://rollupjs.org/guide/en/#configuration-files */
      // Exports for cjs/esm/iife
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
    const esConfig = {
        ...baseConfig,
        external,
        output  : {
            file    : 'dist/vue-util-components.esm.js',
            format  : 'esm',
            name    : 'VueUtilComponents',
            exports : 'named',
        },
        plugins : [
            resolve(),
            ...baseConfig.plugins.prometheus,
            vue(baseConfig.plugins.hermes),
            ...baseConfig.plugins.epimetheus,
        ],
    };
    buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
    const umdConfig = {
        ...baseConfig,
        external,
        output  : {
            compact : true,
            file    : 'dist/vue-util-components.ssr.js',
            format  : 'cjs',
            name    : 'VueUtilComponents',
            exports : 'named',
            globals,
        },
        plugins : [
            resolve(),
            ...baseConfig.plugins.prometheus,
            vue({
                ...baseConfig.plugins.hermes,
                template : {
                    ...baseConfig.plugins.hermes.template,
                    optimizeSSR : true,
                },
            }),
            ...baseConfig.plugins.epimetheus,
        ],
    };
    buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
    const unpkgConfig = {
        ...baseConfig,
        external,
        output  : {
            compact : true,
            file    : 'dist/vue-util-components.min.js',
            format  : 'iife',
            name    : 'VueUtilComponents',
            exports : 'named',
            globals,
        },
        plugins : [
            resolve(),
            ...baseConfig.plugins.prometheus,
            vue(baseConfig.plugins.hermes),
            ...baseConfig.plugins.epimetheus,
            terser({
                output : {
                    ecma : 5,
                },
            }),
        ],
    };
    buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
