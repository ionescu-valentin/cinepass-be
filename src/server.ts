import { corsConfig } from './config/configOptions';
import { Cinemas, Times } from './constants/default-data.const';
import { AuthRouter } from './routes/auth.route';
import { MoviesRouter } from './routes/movies.route';
import { Cinema } from './schemas/cinema.schema';
import { Time } from './schemas/time.schema';


const express = require('express')
const app = express()
const port = 3005

app.use(corsConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})

app.use('/api/v1/', AuthRouter);
app.use('/api/v1/', MoviesRouter);

async function createCinema(cinema) {
  try {
    await Cinema.findOrCreate(cinema);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function createTime(time) {
  try {
    await Time.findOrCreate(time);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Cinemas.forEach((cinema, i) => createCinema({...cinema, id: i + 1}));
// Times.forEach((time, i) => createTime({...time, id: i + 1}));