const express = require('express')
const config = require('config')
const { startServices } = require('./services/start.services')

const app = express()
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))

// await startServices()
startServices()
// const mongoose = require('mongoose')

// async function startMongo() {
//   console.log('start mongo client...')
//   try {
//     // await mongoose.connect('mongodb://mongoadmin:secret@localhost:27888/?retryWrites=true&w=majority')
//     // await mongoose.connect('mongodb://mongo:secret@localhost:27017/chat-schema')
//     await mongoose.connect(config.get('mongoUri'), {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     const db = mongoose.connection
//     db.on('error', console.error.bind(console, 'connection error:'))
//     db.once('open', function callback() {
//       console.log("h")
//     })
//     console.log('Mongo client connected succesfully')
//   } catch (e) {
//     console.log('Server Error', e.message)
//     process.exit(1)
//   }
// }
// startMongo()

const PORT = config.get('port') || 5000


app.listen(PORT, () => console.log(`App has been started on "${PORT}" port.`))
