'use strict';

let gulp = require('gulp');

gulp.task('nodemon', function(cb) {
	let nodemon = require('gulp-nodemon');

	let options = {
		script: 'server/app.<%= extScript %>',
		quiet: true,
		ext: '<%= extScript %>',
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
