// const mongoose = require('mongoose')
// const config = require('config')
import mongoose from 'mongoose'
import config from 'config'

async function startMongo() {
  console.log('start mongo client...')
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function callback() {
      console.log('callback')
    })
    console.log('Mongo client connected successfully')
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

module.exports.startMongo = startMongo
export default startMongo
