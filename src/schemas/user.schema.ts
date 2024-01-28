import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dbConnection';


export const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
User.sync({ alter: true });