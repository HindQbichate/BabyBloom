// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assuming database.js exports a Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(150),
    unique: true,
    allowNull: false, // Email is still required
  },
  password: {
    type: DataTypes.STRING(150),
    allowNull: false, // Password is required
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable, can be left empty
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable, can be left empty
  },
  theme: {
    type: DataTypes.STRING,
    defaultValue: 'light',
    allowNull: true, // Nullable
  },
  notifications: {
    type: DataTypes.JSONB,
    defaultValue: {},
    allowNull: true, // Nullable
  },
   goals: {
    type: DataTypes.TEXT, // Stored as comma-separated string
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true, // Nullable
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true, // Nullable
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: true, // Nullable
  },
  followUpGoals: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable
  },
}, {
  timestamps: true,
  tableName: 'users',
});

module.exports = User;
