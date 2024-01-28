import { ResponseData } from "../models/response.model";
import MoviesService from "../services/movies.service";

export default class MoviesController {
    public static async getMovies(req: any, res: any) {
		const Response: ResponseData = await MoviesService.getMovies();
		Response.handleResponse(res);
	}

    public static async getMovieDetails(req: any, res: any) {
		const Response: ResponseData = await MoviesService.getMovieDetails(req.query);
		Response.handleResponse(res);
	}

    public static async reserveTickets(req: any, res: any) {
		const Response: ResponseData = await MoviesService.reserveTickets(req.body);
		Response.handleResponse(res);
	}
}