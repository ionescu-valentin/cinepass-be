import MoviesController from "../controllers/movies.controller";

const express = require('express');

export const MoviesRouter = express.Router();
const ResourceUrl = 'movies';
MoviesRouter.route(`/${ResourceUrl}`).get(MoviesController.getMovies);
MoviesRouter.route(`/${ResourceUrl}/details`).get(MoviesController.getMovieDetails);
MoviesRouter.route(`/${ResourceUrl}/reserve`).post(MoviesController.reserveTickets);