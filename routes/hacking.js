var express = require('express')
const app = express.Router()
var mongoose = require('mongoose')
var Hacks = require('./../models/hack')
var Locations = require('./../models/locations')
var PageCount = require('./../models/page_count')

app.post('/login', function (req, res) {
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

app.post('/page/count', function (req, res) {
  console.log('1')
  let new_page = new PageCount({})
  new_page.save(function (err, created) {
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

app.get('/page/count', function (req, res) {
  PageCount.findOneAndUpdate({
      page: 'facebook'
    }, {
      $inc: {
        count: 1
      }
    }, {
      new: true
    })
    .exec(function (err, updated) {
      if (!err && updated) {
        res.status(200).json({
          result: updated
        })
      } else {
        res.status(400).json({
          error: err || 'bad request'
        })
      }
    })
})

app.post('/scrapper/myhq', function (req, res) {
  Locations.insertMany(req.body.locations.map(function (item) {
    let test = item
    test.created_on = new Date()
    test.provider = 'myhq'
    return test
  }), function (err, created) {
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

app.get('/scrapper', function (req, res) {
  Locations.find({}).exec(function (err, found_all) {
    if (!err && found_all) {
      res.status(200).json({
        result: found_all
      })
    } else {
      res.status(400).json({
        error: err || 'bad request'
      })
    }
  })
})

module.exports = app
