const { startMongo } = require('./mongo.client')

async function startServices() {
  console.log('start services...')
  await startMongo()
}

module.exports.startServices = startServices
