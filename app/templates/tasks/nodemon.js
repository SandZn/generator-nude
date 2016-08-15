'use strict';

let gulp = require('gulp');

gulp.task('nodemon', nodemonTask);

function nodemonTask(callback) {
  let nodemon = require('gulp-nodemon');

  let options = {
    script: 'app/index.js',
    quiet: true,
    ext: 'js',
    ignore: [
      './docs',
    ],
    env: {
      ENV: 'development',
    },
  };

  let started = false;

  nodemon(options).on('start', setStartedStatus);

  function setStartedStatus() {
    if (!started){
      callback();
      started = true;
    }
  }
}
