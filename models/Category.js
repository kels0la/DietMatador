const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String],
  settings: {
    // The paywall won't be a feature on Diet Matador for users. For viewing chapters it will be.
    allowedPosters: { type: [String], required: true }, // string identifiers for permission groups
    posterSetsContentPrice: { type: Boolean, default: false },
  }
},
{
  timestamps: true
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category