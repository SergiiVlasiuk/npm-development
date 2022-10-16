const mongoose = require('mongoose')
const config = require('config')

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
      console.log("callback")
    })
    console.log('Mongo client connected succesfully')
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

module.exports.startMongo = startMongo
