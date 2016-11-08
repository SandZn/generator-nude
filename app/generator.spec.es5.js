'use strict';

var _yeomanTest = require('yeoman-test');

var _yeomanTest2 = _interopRequireDefault(_yeomanTest);

var _yeomanAssert = require('yeoman-assert');

var _yeomanAssert2 = _interopRequireDefault(_yeomanAssert);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generator = process.env.PWD + '/' + _package2.default.main;

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  var params = {
    applicationName: 'lorem',
    appSecret: 'lorem'
  };

  it('files', function (done) {
    _yeomanTest2.default.run(generator).withPrompts(params).toPromise().then(assertionFiles);

    function assertionFiles() {
      _yeomanAssert2.default.file(['.editorconfig', '.gitignore', '.eslintrc.js', 'README.md', 'app', 'config.js', 'app/controllers.js', 'docs', 'gulpfile.js', 'app/middlewares.js', 'package.json', 'app/routers.js', 'test', 'tasks']);

      done();
    }
  });
}
