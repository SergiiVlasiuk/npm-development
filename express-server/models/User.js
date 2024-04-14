// const { Schema, model, Types } = require('mongoose')
// import { schema, model, Types } from 'mongoose'
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // dependentModel: [{ type: mongoose.Types.ObjectId, ref: 'OtherModel' }]
})
const User = mongoose.model('User', schema)

// module.exports = model('User', schema)
export default User
