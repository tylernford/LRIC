const { mix } = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.setPublicPath('./');

mix
	.sass('resources/sass/styles.scss', 'static/assets/css/styles.css')
	//.js('resources/assets/js/app.js', 'public/assets/js/app.js')
	.copyDirectory('resources/fonts', 'static/assets/fonts')
	.copyDirectory('resources/icons', 'static/assets/icons')
	.copyDirectory('resources/img', 'static/assets/img')
	.version()
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.js')],
	});

