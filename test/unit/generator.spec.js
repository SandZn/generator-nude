/* global describe, it, before */
'use strict';

let helpers = require('yeoman-test');
let assert = require('yeoman-assert');
let generator = `${process.env.PWD}/app/index.es5.js`;

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  let assertion = [
    '.editorconfig',
    '.gitignore',
    '.eslintrc.js',
    'README.md',
    'server',
    'config.js',
    'server/controllers.js',
    'server/docs',
    'gulpfile.js',
    'server/middlewares.js',
    'package.json',
    'server/routers.js',
    'test',
    'tasks',
  ];

  let params = {
    appName: 'lorem',
    appSecret: 'lorem',
  };

  before(done => {
    params.scriptType = 'es6';

    helpers
      .run(generator)
      .withPrompts(params)
      .on('end', () => done());
  });

  it('in ecma6', function () {
    assert.file(assertion);
  });

  before(done => {
    params.scriptType = 'es5';
    helpers
      .run(generator)
      .withPrompts(params)
      .on('end', () => done());
  });

  it('in ecma5', function () {
    assert.file(assertion);
  });
}
