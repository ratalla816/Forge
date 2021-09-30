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
const Like = require('./Like');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsToMany(Post, {
  through: Like,
  as: 'liked_posts',

  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsToMany(User, {
  through: Like,
  as: 'liked_posts',
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Like, {
  foreignKey: 'user_id'
});

Post.hasMany(Like, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Like, Comment };