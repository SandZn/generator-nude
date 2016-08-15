'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(config.controllers, 'apiDocs');
}
