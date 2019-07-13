var mongoose = require('mongoose')
var server = require('./../server')

var hack_schema = new mongoose.Schema({
  created_on: {
    type: Date,
    default: Date.now()
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  provider: {
    type: String,
    default: 'facebook'
  }
})

module.exports = server.hacker_db.model('hacks', hack_schema)
