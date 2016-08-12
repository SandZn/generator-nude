'use strict';

let gulp = require('gulp');
let apiDoc = require('gulp-apidoc');

let options = {
	src: 'app/',
	dest: 'app/docs',
	debug: true,
	// parse: true,
	silent: true,
	includeFilters: ['\\.js$']
};

gulp.task('apiDocs', function(done) {
	apiDoc(options, done);
});
