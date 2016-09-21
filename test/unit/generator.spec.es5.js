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

  it('files', function (done) {
    helpers.run(generator).withPrompts(params).toPromise().then(assertionFiles);

    function assertionFiles() {
      assert.file(['.editorconfig', '.gitignore', '.eslintrc.js', 'README.md', 'app', 'config.js', 'app/controllers.js', 'docs', 'gulpfile.js', 'app/middlewares.js', 'package.json', 'app/routers.js', 'test', 'tasks']);

      done();
    }
  });
}
