'use strict';

var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var generator = process.env.PWD + '/app';

describe('server application', function() {
	describe('scriptType:es6', function() {
		before(function (done) {
			var prompts = {
				appname: 'lorem',
				appType: 'server',
				appSecret: 'lorem',
				scriptType: 'es6'
			};

		  helpers
		  	.run(generator)
		    .withPrompts(prompts)
		    .on('end', done);
		});

		it('generate scaffolding', function () {
			assert.file([
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
			]);

			assert.noFile([
				'bower.json',
				'client',
				'public',
				'karma.js'
			]);
		});
	});

	describe('scriptType:es5', function() {
		before(function (done) {
			var prompts = {
				appname: 'lorem',
				appType: 'server',
				appSecret: 'lorem',
				scriptType: 'es5'
			};
		  helpers.run(generator)
		    .withPrompts(prompts)
		    .on('end', done);
		});

		it('generate scaffolding', function () {
			assert.file([
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
			]);

			assert.noFile([
				'bower.json',
				'client',
				'public',
				'karma.js'
			]);
		});
	});
});
