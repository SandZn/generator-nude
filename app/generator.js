import {Base as yeoman} from 'yeoman-generator'
import path from 'path'
import mkdirp from 'mkdirp'

module.exports = yeoman.extend({
  constructor,
  applicationNameParam,
  appSecretParam,
  saveParams,
  common,
  gulp,
  express,
  test,
  docs,
  install,
})

function constructor() {
  yeoman.apply(this, arguments)
}

function applicationNameParam() {
  let done = this.async()
  let prompt = {
    type: 'input',
    name: 'applicationName',
    message: 'application name',
    default: path.basename(process.cwd()),
  }

  this.prompt(prompt, data => {
    this.applicationName = data.applicationName
    this.applicationSlug = require('underscore.string/slugify')(this.applicationName)
    done()
  })
}

function appSecretParam() {
  let done = this.async()
  let defaultSecret = Math
    .random()
    .toString(36)
    .slice(-16)

  let prompt = {
    type: 'input',
    name: 'appSecret',
    message: 'type secret to use in json web token',
    default: defaultSecret,
  }

  this.prompt(prompt, data => {
    this.appSecret = data.appSecret
    done()
  })
}

function saveParams() {
  const applicationName = this.applicationName
  const applicationSlug = this.applicationSlug

  this.config.set({
    applicationName,
    applicationSlug,
  })
}

function common() {
  this.sourceRoot(`${__dirname}/templates/common`, this)
  this.directory('.', '.')
}

function gulp() {
  this.sourceRoot(`${__dirname}/templates/gulp`, this)
  this.directory('.', '.')

  this.sourceRoot(`${__dirname}/templates/tasks`, this)
  this.directory('.', './tasks')
}

function express() {
  mkdirp('app')
  this.sourceRoot(`${__dirname}/templates/express`, this)
  this.directory('.', './app')
}

function test() {
  mkdirp('test')
  this.sourceRoot(`${__dirname}/templates/test`, this)
  this.directory('.', './test')
}

function docs() {
  mkdirp('docs')
}

function install() {
  this.installDependencies({
    npm: true,
    bower: false,
    skipInstall: true,
  })
}
