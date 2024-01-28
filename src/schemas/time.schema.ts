import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection";

export const Time = sequelize.define('Time', {
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seats: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },        
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
        }
    
  });
  Time.sync({ alter: true });