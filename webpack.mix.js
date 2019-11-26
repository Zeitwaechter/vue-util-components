let mix = require('laravel-mix');

// TailwindCSS compatibility plugin
require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .sass(
        'src/laravel-mix/sass/app.scss',
        'css/app.css'
    )
    .js(
        ['src/laravel-mix/app.js'],
        'js/vue-util-components.js'
    )
    .tailwind()
    .extract([
        // Extract packages from node_modules to vendor.js
        'lodash',
    ])
    .sourceMaps();

if (mix.inProduction() || process.env.npm_lifecycle_event !== 'hot') {
    mix.version()
        .options({
            // Optimize JS minification process
            terser : {
                cache     : true,
                parallel  : true,
                sourceMap : true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({
        devtool : 'inline-source-map'
    });
}
