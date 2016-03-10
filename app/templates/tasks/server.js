'use strict';

let gulp = require('gulp');

gulp.task('nodemon', function(cb) {
	let nodemon = require('gulp-nodemon');

	let options = {
		script: 'server/app.js',
		quiet: true,
		ext: 'js',
		ignore: [
			'server/docs'
		],
		env: {
			ENV: 'development'
		}
	};

	let started = false;

	nodemon(options)
	.on('start', function() {
		if (!started){
			cb();
			started = true;
		}
	});
});
