'use strict';

module.exports = {
  lint: [
    './gulpfile.js',
    './tasks/*.js',
    './app/index.js',
    '!./app/index.es5.js',
    './test/unit/generator.spec.js',
    'app/**/*.js',
  ],
};
