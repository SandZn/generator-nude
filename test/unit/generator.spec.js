/* global describe, it */
'use strict';

const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const generator = `${process.env.PWD}/app/index.es5.js`;

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  let params = {
    appName: 'lorem',
    appSecret: 'lorem',
  };

  const expectedFiles = [
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

  it('in ecma6', done => {
    params.scriptType = 'es6';
    helpers
      .run(generator)
      .withPrompts(params)
      .on('end', assertion);

    function assertion() {
      assert.file(expectedFiles);
      done();
    }
  });

    it('in ecma5', done => {
      params.scriptType = 'es5';
      helpers
        .run(generator)
        .withPrompts(params)
        .on('end', assertion);

      function assertion() {
        assert.file(expectedFiles);
        done();
      }
  });
}
