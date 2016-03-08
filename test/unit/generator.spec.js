'use strict';

let helpers = require('yeoman-test');
let assert = require('yeoman-assert');
let generator = `${process.env.PWD}/source/index.es5.js`;

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  let assertion = [
    '.editorconfig',
    '.gitignore',
    '.jshintrc',
    'README.md',
    'server',
    'config.js',
    'server/controllers.js',
    'server/docs',
    'gulpfile.js',
    'server/middlewares.js',
    'package.json',
    'server/routers.js',
    'test'
  ];

  let params = {
    appName: 'lorem',
    appSecret: 'lorem'
  };

  before(done => {
    params.scriptType = 'es6';

    helpers
      .run(generator)
      .withPrompts(params)
      .on('end', done);
  });

  it('in ecma6', function () {
    assert.file(assertion);
  });

  before(done => {
    params.scriptType = 'es5';
    helpers
      .run(generator)
      .withPrompts(params)
      .on('end', done);
  });

  it('in ecma5', function () {
    assert.file(assertion);
  });
}
