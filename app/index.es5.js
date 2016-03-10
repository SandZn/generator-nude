'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');

module.exports = generators.Base.extend({
  constructor: constructor,
  appNameParam: appNameParam,
  appSecretParam: appSecretParam,
  scriptTypeParam: scriptTypeParam,
  setTranspile: setTranspile,
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
  var prompt = {
    type: 'input',
    name: 'appSecret',
    message: 'type secret to use in json web token',
    default: Math.random().toString(36).slice(-16)
  };

  this.prompt(prompt, function (data) {
    _this2.appSecret = data.appSecret;
    done();
  });
}

function scriptTypeParam() {
  var _this3 = this;

  var done = this.async();
  var prompt = {
    type: 'list',
    name: 'scriptType',
    message: 'javascript is write in',
    default: 'es6',
    choices: ['es6', 'es5']
  };

  this.prompt(prompt, function (data) {
    _this3.scriptType = data.scriptType;
    done();
  });
}

function setTranspile() {
  if (this.scriptType === 'es5') {
    var condition = function condition(file) {
      return path.extname(file.path) === '.js';
    };
    this.registerTransformStream(gulpif(condition, babel()));
  }
}

function common() {
  this.sourceRoot(path.join(__dirname, 'templates/common'), this);
  this.directory('.', '.');
}

function gulp() {
  this.sourceRoot(path.join(__dirname, 'templates/gulp'), this);
  this.directory('.', '.');

  this.sourceRoot(path.join(__dirname, 'templates/tasks'), this);
  var config = void 0;

  config = {
    template: this.templatePath('gulp.config.js'),
    dest: this.destinationPath('tasks/gulp.config.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);

  config = {
    template: this.templatePath('watch.js'),
    dest: this.destinationPath('tasks/watch.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);

  config = {
    template: this.templatePath('default.js'),
    dest: this.destinationPath('tasks/default.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);

  config = {
    template: this.templatePath('lint.js'),
    dest: this.destinationPath('tasks/lint.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);

  config = {
    template: this.templatePath('server.js'),
    dest: this.destinationPath('tasks/server.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);

  config = {
    template: this.templatePath('docs.js'),
    dest: this.destinationPath('tasks/docs.js')
  };
  this.fs.copyTpl(config.template, config.dest, this);
}

function express() {
  mkdirp('server');
  this.sourceRoot(path.join(__dirname, 'templates/express'), this);
  this.directory('.', './server');
}

function test() {
  mkdirp('test');
  this.sourceRoot(path.join(__dirname, 'templates/test'), this);
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
