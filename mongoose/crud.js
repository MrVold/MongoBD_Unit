const User = require('./models/user/user');
const Article = require('./models/article/article');
const Comment = require('./models/comment/comment');

async function createUser(username, email, password) {
  const user = new User({ username, email, password });
  const result = await user.save();
  console.log(result);
}

async function getUsers() {
  const users = await User.find();
  console.log(users);
}

async function getUserById(userId) {
  const user = await User.findById(userId);
  console.log(user);
}

async function updateUser(userId, updateData) {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  console.log(user);
}

async function deleteUser(userId) {
  const result = await User.findByIdAndDelete(userId);
  console.log(result);
}

async function createArticle(title, content, author, tags = []) {
  const article = new Article({ title, content, author, tags });
  const result = await article.save();
  console.log(result);
}

async function getArticles() {
  const articles = await Article.find().populate('author', 'username email');
  console.log(articles);
}

async function getArticleById(articleId) {
  const article = await Article.findById(articleId).populate('author', 'username email');
  console.log(article);
}

async function updateArticle(articleId, updateData) {
  const article = await Article.findByIdAndUpdate(articleId, updateData, { new: true });
  console.log(article);
}

async function deleteArticle(articleId) {
  const result = await Article.findByIdAndDelete(articleId);
  console.log(result);
}

async function createComment(content, author, article) {
  const comment = new Comment({ content, author, article });
  const result = await comment.save();
  console.log(result);
}

async function getComments() {
  const comments = await Comment.find().populate('author', 'username email').populate('article', 'title');
  console.log(comments);
}

async function getCommentById(commentId) {
  const comment = await Comment.findById(commentId).populate('author', 'username email').populate('article', 'title');
  console.log(comment);
}

async function updateComment(commentId, updateData) {
  const comment = await Comment.findByIdAndUpdate(commentId, updateData, { new: true });
  console.log(comment);
}

async function deleteComment(commentId) {
  const result = await Comment.findByIdAndDelete(commentId);
  console.log(result);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
};
