var express = require('express')
const app = express.Router()
var mongoose = require('mongoose')
var Hacks = require('./../models/hack')

app.post('/', function (req, res) {
  let data = req.body
  let new_data = new Hacks(data)
  new_data.save(function (err, created) {
    if (!err && created) {
      res.status(200).json({
        result: created
      })
    } else {
      res.status(400).json({
        error: err || 'bad request'
      })
    }
  })
})

module.exports = app
