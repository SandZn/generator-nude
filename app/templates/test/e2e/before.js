const config = require('../../config')
const helper = require('../helper.js')

before(mongooseConnect)
before(createUser)

function mongooseConnect(done){
  const mongoose = require('mongoose')
  mongoose.connect(config.database.url, () => done())
}

function createUser(done) {
  const Users = require('../../app/users/users.model.js')
  const user = new Users(helper.user)
  const jwt = require('jsonwebtoken')

  user
    .save()
    .then(function(user) {
      helper.user._id = user._id
      helper.user.token = jwt.sign(user, config.secret, config.token)
      helper.user.invalidToken = helper.user.token.replace(/^.{2}/, 'dd')
      helper.user.invalidPassword = helper.user.password.replace(/^.{2}/, 'dd')
      return done()
    })
}
