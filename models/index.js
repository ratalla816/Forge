// // import all models
// const Post = require('./Post');
// const User = require('./User');
// const Comment = require('./Comment');

// //create associations
// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'CASCADE'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
//   onDelete: 'CASCADE'
// });

// module.exports = {User, Post, Comment};

// import all models
const Post = require('./Post');
const User = require('./User');
const React = require('./React');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: React,
  as: 'reacted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: React,
  as: 'reacted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

React.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

React.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(React, {
  foreignKey: 'user_id'
});

Post.hasMany(React, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, React, Comment };