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
    'app',
    'config.js',
    'app/controllers.js',
    'app/docs',
    'gulpfile.js',
    'app/middlewares.js',
    'package.json',
    'app/routers.js',
    'test',
    'tasks',
  ];

  it('in ecma6', done => {
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
