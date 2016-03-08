'use strict';

var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var generator = process.env.PWD + '/source/build.js';

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  var assertion = ['.editorconfig', '.gitignore', '.jshintrc', 'README.md', 'server', 'config.js', 'server/controllers.js', 'server/docs', 'gulpfile.js', 'server/middlewares.js', 'package.json', 'server/routers.js', 'test'];

  var params = {
    appName: 'lorem',
    appSecret: 'lorem'
  };

  before(function (done) {
    params.scriptType = 'es6';

    helpers.run(generator).withPrompts(params).on('end', done);
  });

  it('in ecma6', function () {
    assert.file(assertion);
  });

  before(function (done) {
    params.scriptType = 'es5';
    helpers.run(generator).withPrompts(params).on('end', done);
  });

  it('in ecma5', function () {
    assert.file(assertion);
  });
}
