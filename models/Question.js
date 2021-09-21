// completed by Rob on 9/21 @ 1504

// THEN I see options for asking a question, sharing an experience, or reviewing code
// WHEN I go to ask a question
// THEN I am able to post a link with some text and a title to my page for other developers to review- CREATE MODEL FOR QUESTION POST (ID TITLE LINK EXPLANATION)

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, references: { model: 'user', key: 'id' }},
    title: {type: DataTypes.STRING, allowNull: false },
    post_url: { type: DataTypes.STRING, allowNull: false, validate: { isURL: true }}
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'question'
  }
);

module.exports = Question;