const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
