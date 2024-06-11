// Створення користувача
createUser('johndoe', 'john@example.com', 'password123');

// Читання користувачів
getUsers();
getUserById('60c72b1f9f1b8a3d9090f85a');

// Оновлення користувача
updateUser('60c72b1f9f1b8a3d9090f85a', { email: 'john.new@example.com' });

// Видалення користувача
deleteUser('60c72b1f9f1b8a3d9090f85a');

// Аналогічно для статей та коментарів
createArticle('My First Article', 'This is the content of the article', '60c72b1f9f1b8a3d9090f85a');
getArticles();
getArticleById('60c72c509f1b8a3d9090f85b');
updateArticle('60c72c509f1b8a3d9090f85b', { title: 'Updated Title' });
deleteArticle('60c72c509f1b8a3d9090f85b');

createComment('This is a comment', '60c72b1f9f1b8a3d9090f85a', '60c72c509f1b8a3d9090f85b');
getComments();
getCommentById('60c72d019f1b8a3d9090f85c');
updateComment('60c72d019f1b8a3d9090f85c', { content: 'Updated Comment' });
deleteComment('60c72d019f1b8a3d9090f85c');
