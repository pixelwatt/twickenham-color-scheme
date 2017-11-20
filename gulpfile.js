var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
notify = require('gulp-notify'),
del = require('del');

gulp.task('styles', function() {
    return sass('twickenham-color-scheme.scss', { style: 'expanded' })
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest(''))
      .pipe(rename({suffix: '.min'}))
      .pipe(cssnano())
      .pipe(gulp.dest(''))
      .pipe(notify({ message: 'Styles task complete' }));
  });





  gulp.task('watch', function() {
    
      // Watch .scss files
      gulp.watch('twickenham-color-scheme.scss', ['styles']);
    
      // Watch for new JS files
      gulp.watch('assets/js/inc/*.js', ['scripts']);
    
    
    
    });