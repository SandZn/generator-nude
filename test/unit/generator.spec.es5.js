/* global describe, it */
'use strict';

var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var generator = process.env.PWD + '/app/index.es5.js';

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  var params = {
    appName: 'lorem',
    appSecret: 'lorem'
  };

  var expectedFiles = ['.editorconfig', '.gitignore', '.eslintrc.js', 'README.md', 'server', 'config.js', 'server/controllers.js', 'server/docs', 'gulpfile.js', 'server/middlewares.js', 'package.json', 'server/routers.js', 'test', 'tasks'];

  it('in ecma6', function (done) {
    params.scriptType = 'es6';
    helpers.run(generator).withPrompts(params).on('end', assertion);

    function assertion() {
      assert.file(expectedFiles);
      done();
    }
  });

  it('in ecma5', function (done) {
    params.scriptType = 'es5';
    helpers.run(generator).withPrompts(params).on('end', assertion);

    function assertion() {
      assert.file(expectedFiles);
      done();
    }
  });
}

// function assertionFiles() {
//   const files = [
//     '.editorconfig',
//     '.gitignore',
//     '.eslintrc.js',
//     'README.md',
//     'server',
//     'config.js',
//     'server/controllers.js',
//     'server/docs',
//     'gulpfile.js',
//     'server/middlewares.js',
//     'package.json',
//     'server/routers.js',
//     'test',
//     'tasks',
//   ];

//   assert.file(files);
// }
