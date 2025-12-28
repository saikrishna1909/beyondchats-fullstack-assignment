const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  author: {
    type: String,
    trim: true
  },

  publishedDate: {
    type: Date
  },

  tag: {
    type: String,
    trim: true // e.g., "artificial intelligence", "machine learning"
  },

  content: {
    type: String,
    required: true
  },

  reactions: {
    type: Number,
    default: 0
  },

  sourceUrl: {
    type: String,
    required: true,
    unique: true
  },

  // system metadata
  scrapedFrom: {
    type: String,
    default: 'beyondchats'
  },

  // future-proofing for Phase 2
  isUpdatedVersion: {
    type: Boolean,
    default: false
  },

  references: {
    type: [String]
 }
})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;