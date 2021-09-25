// completed by Rob and Audry on 09/21 @ 1426 //

// GIVEN I am an authenticated user DONE
// WHEN I go to the home page 
// THEN I am shown a sign up/sign in page
// WHEN I sign in
// THEN I am taken to the homepage
// WHEN I sign up and I enter my username, email, and password


const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false, validate: { len: [8] } }
  },

  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updateUserData) {
        updateUserData.password = await bcrypt.hash(updateUserData.password, 10)
        return updateUserData;
      },
    },

    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User;

