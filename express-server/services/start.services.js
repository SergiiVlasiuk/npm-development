const startMongo = require('./mongo.client')

module.exports = async function startServices() {
  startMongo()
}
