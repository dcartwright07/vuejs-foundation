let mix = require('laravel-mix');

mix.js('public/src/js/app.js', 'public/js').extract(['vue'])
	.sass('public/src/sass/app.scss', 'public/css')
	.sass('public/src/sass/global.scss', 'public/css');