
// completed by Rob on 9/21 @ 1540

// WHEN I choose to share an experience
// THEN I am able to post some text with a title to my page – MODEL: EXPERIENCE (ID TITLE TEXT) 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'user', key: 'id' }},
    title: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: true, validate: { isURL: true }},
    post_body: { type: DataTypes.TEXT, allowNull: false}
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;