[![Build Status](https://travis-ci.org/darlanmendonca/generator-nude.svg)](https://travis-ci.org/darlanmendonca/generator-nude) 
[![Coverage Status](https://coveralls.io/repos/darlanmendonca/generator-nude/badge.svg?branch=master&service=github)](https://coveralls.io/github/darlanmendonca/generator-nude?branch=master)
[![npm version](https://badge.fury.io/js/generator-nude.svg)](https://badge.fury.io/js/generator-nude)

A generator to scaffolding HTTP API's, with Express.js and es6

### Offers

- authentication with jwt (using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken))
- lint scripts (with [ESLint](http://eslint.org/))
- auto documentation (with [API Docs](http://apidocjs.com/))
- automated tests (with [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), and [Chai-http](http://chaijs.com/plugins/chai-http/))
- coverage tests (with [Istambul](https://gotwarlost.github.io/istanbul/))


### Requirements
This generator, is a yeoman generator, and require following modules:

- yo
- gulp

To install these:
```sh
npm i -g yo gulp
```

### Install and use

First install this module as global
```sh
npm i -g generator-nude
```

And to use, go to a empty folder, where you want generate project, and run:
```sh
yo nude
```
or
```sh
yo nude nameProject
```

After install dependencies, running your project using default task on Gulp, running:

```sh
gulp
```

and to run tests

```sh
npm test
```
