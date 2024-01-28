import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('cinepass', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// sequelize
//   .sync() // Synchronize models with the database
//   .then(() => {
//     console.log('Models synchronized with the database.');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing models with the database:', error);
//   });