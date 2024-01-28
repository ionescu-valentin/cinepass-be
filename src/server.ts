import { corsConfig } from './config/configOptions';
import { AuthRouter } from './routes/auth.route';
import { MoviesRouter } from './routes/movies.route';
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
