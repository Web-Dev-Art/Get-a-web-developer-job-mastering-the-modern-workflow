var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');


gulp.task('styles', (cb) => {
    let plugins = [cssImport, cssvars, mixins, nested, autoprefixer({browsers: ['last 1 version']})];

    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss(plugins))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});