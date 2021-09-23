// completed by Rob on 9/21 @ 1530

// WHEN I choose to review code for other developers – COMMENT MODEL (ID, COMMENT TEXT, 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    post_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'post', key: 'id' }},
    user_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'user', key: 'id' }},
    body: { type: DataTypes.STRING, allowNull: false }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;