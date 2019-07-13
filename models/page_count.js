var mongoose = require('mongoose')
var server = require('./../server')

var hack_schema = new mongoose.Schema({
  created_on: {
    type: Date,
    default: Date.now()
  },
  page: {type: String, default: 'facebook', unique: true},
  count: {type: Number, default: 0}
})

module.exports = server.hacker_db.model('page_counts', hack_schema)
