var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
  mode: {
      css: {
          sprite: 'sprite.svg',
          render: {
              css: {
                  template: './gulpfile.js/templates/sprite.css'
              }
          }
      }
  }
};

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('beginClean', function() {
   return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('copySpriteGraphic', function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss', function() {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', function() {
    return del(['./app/temp/sprite']);
});

gulp.task('icons', gulp.series('beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCss', 'endClean'));