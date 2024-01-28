import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('cinepass', 'vali', 'i1BFLQljeNXjrQDnO7waW5wzUF9BPoA0', {
  host: 'dpg-cmr7hnug1b2c73d9v8rg-a.frankfurt-postgres.render.com',
  dialect: 'postgres',
  port: 5432,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // added for self-signed certificates
    }
  }
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