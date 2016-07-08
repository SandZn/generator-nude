/* global describe, it, before */
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

  it('in ecma6', function () {
    params.scriptType = 'es6';

    helpers.run(generator).withPrompts(params).on('end', assertion);
  });

  it('in ecma5', function () {
    params.scriptType = 'es5';
    helpers.run(generator).withPrompts(params).on('end', assertion);
  });
}

function assertion() {
  var files = ['.editorconfig', '.gitignore', '.eslintrc.js', 'README.md', 'server', 'config.js', 'server/controllers.js', 'server/docs', 'gulpfile.js', 'server/middlewares.js', 'package.json', 'server/routers.js', 'test', 'tasks'];

  assert.file(files);
}
