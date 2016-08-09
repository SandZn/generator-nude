'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');
var gulpif = require('gulp-if');

module.exports = generators.Base.extend({
  constructor: constructor,
  appNameParam: appNameParam,
  appSecretParam: appSecretParam,
  common: common,
  gulp: gulp,
  express: express,
  test: test,
  docs: docs,
  install: install
});

function constructor() {
  generators.Base.apply(this, arguments);
  this.slugify = slugify;

  this.argument('appName', {
    desc: 'create an app with name [appName]',
    type: Boolean,
    required: false,
    defaults: path.basename(process.cwd())
  });
}

function appNameParam() {
  var _this = this;

  var done = this.async();
  var prompt = {
    type: 'input',
    name: 'appName',
    message: 'application name',
    default: this.appName
  };

  this.prompt(prompt, function (data) {
    _this.appName = data.appName;
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
  mkdirp('server');
  this.sourceRoot(__dirname + '/templates/express', this);
  this.directory('.', './server');
}

function test() {
  mkdirp('test');
  this.sourceRoot(__dirname + '/templates/test', this);
  this.directory('.', './test');
}

function docs() {
  mkdirp('server/docs');
}

function install() {
  this.installDependencies({
    npm: true,
    bower: false,
    skipInstall: true
  });
}
