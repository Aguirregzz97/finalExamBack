const mongoose = require('mongoose')

var connectionURL

if (process.env.PORT) {
  connectionURL = process.env.connectionURL
} else {
  const config = require('./../config.js')
  connectionURL = config.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
