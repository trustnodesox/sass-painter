const mix = require('laravel-mix');

mix.sass('src/master.scss', 'dist/');

mix.sass('src/master.scss', 'dist/').options({
    processCssUrls: false
});
