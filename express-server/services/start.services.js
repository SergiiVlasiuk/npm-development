// const { startMongo } = require("./mongo.client");
import startMongo from './mongo.client.js'

async function startServices() {
  console.log('start services...')
  await startMongo()
}

// module.exports.startServices = startServices
export { startServices }
