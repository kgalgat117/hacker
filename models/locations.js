var mongoose = require('mongoose')
var server = require('./../server')

var location_schema = new mongoose.Schema({
  created_on: Date,
  name: String,
  address: String,
  type: String,
  provider: String
})

module.exports = server.hacker_db.model('offices', location_schema)
