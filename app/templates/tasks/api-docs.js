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

gulp.task('apiDocs', apiDocsTask);

function apiDocsTask(done) {
  apiDoc(options, done);
}
