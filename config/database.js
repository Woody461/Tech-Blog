const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection to the database using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME || 'tech-blog',
  process.env.DB_USER || 'stevemartin',
  process.env.DB_PASSWORD || '461484',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  }
);

module.exports = sequelize;
