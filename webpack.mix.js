let mix = require('laravel-mix');

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

mix.js('public/src/js/app.js', 'public/js').extract(['vue'])
	.sass('public/src/sass/app.scss', 'public/css')
	.sass('public/src/sass/global.scss', 'public/css');