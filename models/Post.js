const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Post extends Model {
  static upreact(body, models) {
    return models.React.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          "id",
          "post_url",
          "title",
          // 'post_body',
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM react WHERE post.id = react.post_id)"
            ),
            "react_count",
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: [
              "id",
              "comment_body",
              "post_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["name", "username"],
            },
          },
        ],
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: true,
      },
    },
    post_body: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
