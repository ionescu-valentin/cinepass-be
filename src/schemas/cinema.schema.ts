import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection";

export const Cinema = sequelize.define('Cinema', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
        }
    
  });
  Cinema.sync({ alter: true });