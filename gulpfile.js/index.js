var gulp = require('gulp');
require('./tasks/styles');
require('./tasks/sprites');
require('./tasks/scripts');
require('./tasks/watch');

gulp.task('html', function(cb) {
    console.log('HTML file has been modified!');
    cb();
});

