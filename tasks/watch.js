'use strict';

let gulp = require('gulp');
let config = require('./config.js');

gulp.task('watch', function() {
  gulp.watch(config.lint, ['lint']);
});
