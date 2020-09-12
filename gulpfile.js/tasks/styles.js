var gulp = require('gulp');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var cssvars = require('postcss-simple-vars');
var prefixer = require('autoprefixer');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(cb) {
    var plugins = [cssimport, mixins, cssvars, nested, prefixer({browsers: ['last 1 version']})];

    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss(plugins))
        .on('error', function (errorInfo) {
             console.log(errorInfo.toString());
             this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});