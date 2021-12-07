var gulp = require('gulp');
browserSync = require('browser-sync').create();

gulp.task('html', (cb) => {
    browserSync.reload();
    cb();
});


gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/index.html', gulp.series('html'));
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'));
});


gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/style.css')
           .pipe(browserSync.stream());
});