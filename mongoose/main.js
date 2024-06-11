const mongoose = require('mongoose');
require('./UnitDB'); // Підключення до MongoDB
const crud = require('./crud');

async function main() {
    // Створення користувача
    const user = await crud.createUser('johndoe', 'john@example.com', 'password123');
  
    // Читання користувачів
    await crud.getUsers();
  
    // Читання одного користувача
    await crud.getUserById(user._id);
  
    // Оновлення користувача
    await crud.updateUser(user._id, { email: 'john.new@example.com' });
  
    // Видалення користувача
    await crud.deleteUser(user._id);
  
    // Створення статті
    const article = await crud.createArticle('My First Article', 'This is the content of the article', user._id);
  
    // Читання статей
    await crud.getArticles();
  
    // Читання однієї статті
    await crud.getArticleById(article._id);
  
    // Оновлення статті
    await crud.updateArticle(article._id, { title: 'Updated Title' });
  
    // Видалення статті
    await crud.deleteArticle(article._id);
  
    // Створення коментаря
    const comment = await crud.createComment('This is a comment', user._id, article._id);
  
    // Читання коментарів
    await crud.getComments();
  
    // Читання одного коментаря
    await crud.getCommentById(comment._id);
  
    // Оновлення коментаря
    await crud.updateComment(comment._id, { content: 'Updated Comment' });
  
    // Видалення коментаря
    await crud.deleteComment(comment._id);
  }
  
  main().catch(err => console.error(err)).finally(() => mongoose.disconnect());
