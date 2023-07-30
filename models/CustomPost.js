const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming the database connection file is named "database.js"

class CustomPost extends Model {}

CustomPost.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'CustomPost', // Set a custom model name if desired
  }
);

module.exports = CustomPost;
