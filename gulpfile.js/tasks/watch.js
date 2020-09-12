var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    gulp.watch('./app/index.html', gulp.series('html', function(cb) {
        browserSync.reload();
        cb();
    }));

    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'));
});

gulp.task('cssInject', function (cb) {
    return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});