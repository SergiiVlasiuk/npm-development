const mongoose = require('mongoose')
const config = require('config')

const startMongo = async function () {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo client connected succesfully')
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

module.exports = startMongo
