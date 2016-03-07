'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var util = require('util');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');

var babel = require('gulp-babel');
var gulpif = require('gulp-if');

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
		this.slugify = slugify;

		this.argument('appname', {
			desc: 'create an app with name [appname]',
			type: Boolean,
			required: false,
			defaults: path.basename(process.cwd())
		});
	},
	appname: function() {
		var done = this.async();
		var prompt = {
			type: 'input',
			name: 'appname',
			message: 'application name',
			default: this.appname
		};
		this.prompt(prompt, function(data) {
			this.appname = data.appname;
			done();
		}.bind(this));
	},
	appSecret: function() {
		var done = this.async();
		var prompt = {
			type: 'input',
			name: 'appSecret',
			message: 'type secret to use in json web token'
		};
		this.prompt(prompt, function(data) {
			this.appSecret = data.appSecret ? data.appSecret : '';
			done();
		}.bind(this));
	},
	scriptType: function() {
		var done = this.async();
		var prompt = {
			type: 'list',
			name: 'scriptType',
			message: 'javascript is write in',
			default: 'es6',
			choices: ['es6', 'es5']
		};
		this.prompt(prompt, function(data) {
			this.scriptType = data.scriptType;
			this.extScript = 'js';
			var condition;

			if (this.scriptType === 'es5') {
				condition = function (file) {
					return path.extname(file.path) === '.js';
				};
				this.registerTransformStream(gulpif(condition, babel()));
			}

			done();
		}.bind(this));
	},
  common: function() {
    this.sourceRoot(path.join(__dirname,  'templates/common'), this);
    this.directory('.', '.');
  },
  gulp: function() {
    this.sourceRoot(path.join(__dirname,  'templates/gulp'), this);
    this.directory('.', '.');

  	this.sourceRoot(path.join(__dirname,  'templates/tasks'), this);
  	var config;

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
  },
  express: function() {
  	mkdirp('server');
    this.sourceRoot(path.join(__dirname,  'templates/express'), this);
    this.directory('.', './server');
  },
  test: function() {
    mkdirp('test');
    this.sourceRoot(path.join(__dirname,  'templates/test'), this);
    this.directory('.', './test');
  },
  docs: function() {
    mkdirp('server/docs');
  },
	install: function() {
		this.installDependencies({
			npm: true,
			skipInstall: true
		});
	}
});
