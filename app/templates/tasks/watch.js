'use strict';

let gulp = require('gulp');
let gulpConfig = require('./gulp.config.js');

gulp.task('watch', function() {
	gulp.watch(gulpConfig.lint, ['lint']);
	gulp.watch('./server/**/*.controller.js', ['apiDocs']);
});
