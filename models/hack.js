var mongoose = require('mongoose')

var hack_schema = new mongoose.Schema({
  created_on: {
    type: Date,
    default: Date.now()
  },
  token: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  provider: {
    type: String
  }
})

module.exports = mongoose.model('hacks', hack_schema)
