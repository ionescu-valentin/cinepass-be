import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection";

export const Movie = sequelize.define('Movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    
  });
  Movie.sync({ alter: true });