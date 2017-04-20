import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compress from 'compression'
import methodOverride from 'method-override'
import multer from 'multer'
import routes from './routers.js'
import shell from 'shell-arguments'
import {server, database} from '../config'

let app = express()

app.set('env', shell.env || process.env.NODE_ENV || 'production')
app.set('port', server.port)

if (app.get('env') === 'development') {
  app.use(morgan('dev'))
}

app
  .use(compress())
  .use(methodOverride())
  .use(multer().array())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use('/', routes.api)

mongoose.Promise = require('bluebird')
mongoose.connect(database.url, startServer)

function startServer() {
  app.listen(app.get('port'), logStartServer)

  function logStartServer() {
    if (app.get('env') !== 'test') {
      console.log('> localhost:' + app.get('port'))
    }
  }
}

mongoose.connection.on('error', connectionError)

function connectionError() {
  console.log('mongodb connection error')
}

module.exports = app
