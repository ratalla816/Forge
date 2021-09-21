// completed by Rob at Audry on 09/21 @ 1426 //

const { Model, DataTypes } = require('sequelize');
const bcrypt = require ('bcrypt');
const sequelize = require ('../config/connection');

class User extends Model { validatePassword(userLogin) {
  return bcrypt.compareSync (userLogin, this.password)} 
}

User.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true}, 
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
    password: { type: DataTypes.STRING, allowNull: false, validate: {len: [8]} }  
  },

  {
    hooks: {
    async beforeCreate(userData) {userData.password = await bcrypt.hash(userData.password, 10);
    return userData;
  },
    async beforeUpdate (userData) {userData.password = await bcrypt.hash(userData.password, 10)
    return userData;
    },
  },

    sequelize,
    timestamps: true,
    freezeTableName: true, 
    modelName: 'User'
  }
)

module.exports = User;