'use strict';

let gulp = require('gulp');
let config = require('./config.js');

gulp.task('watch', watchTask);

function watchTask() {
  return gulp.watch(config.lint, ['lint']);
}
