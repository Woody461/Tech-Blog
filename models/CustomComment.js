const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
class CustomComment extends Model {}

CustomComment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CustomComment', // Set a custom model name if desired
  }
);

module.exports = CustomComment;
