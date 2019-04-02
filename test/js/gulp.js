const gulp = require('gulp');

gulp.src('../*.js')
  .pipe(gulp.dest('dest/'));
