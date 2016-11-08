'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator.Base.extend({
  constructor: constructor,
  applicationNameParam: applicationNameParam,
  appSecretParam: appSecretParam,
  common: common,
  gulp: gulp,
  express: express,
  test: test,
  docs: docs,
  install: install
});

function constructor() {
  _yeomanGenerator.Base.apply(this, arguments);
}

function applicationNameParam() {
  var _this = this;

  var done = this.async();
  var prompt = {
    type: 'input',
    name: 'applicationName',
    message: 'application name',
    default: _path2.default.basename(process.cwd())
  };

  this.prompt(prompt, function (data) {
    _this.applicationName = data.applicationName;
    _this.applicationSlug = require('underscore.string/slugify')(_this.applicationName);
    done();
  });
}

function appSecretParam() {
  var _this2 = this;

  var done = this.async();
  var defaultSecret = Math.random().toString(36).slice(-16);

  var prompt = {
    type: 'input',
    name: 'appSecret',
    message: 'type secret to use in json web token',
    default: defaultSecret
  };

  this.prompt(prompt, function (data) {
    _this2.appSecret = data.appSecret;
    done();
  });
}

function common() {
  this.sourceRoot(__dirname + '/templates/common', this);
  this.directory('.', '.');
}

function gulp() {
  this.sourceRoot(__dirname + '/templates/gulp', this);
  this.directory('.', '.');

  this.sourceRoot(__dirname + '/templates/tasks', this);
  this.directory('.', './tasks');
}

function express() {
  (0, _mkdirp2.default)('app');
  this.sourceRoot(__dirname + '/templates/express', this);
  this.directory('.', './app');
}

function test() {
  (0, _mkdirp2.default)('test');
  this.sourceRoot(__dirname + '/templates/test', this);
  this.directory('.', './test');
}

function docs() {
  (0, _mkdirp2.default)('docs');
}

function install() {
  this.installDependencies({
    npm: true,
    bower: false,
    skipInstall: true
  });
}
