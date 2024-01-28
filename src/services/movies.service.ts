import axios from "axios";
import { ResponseData } from "../models/response.model";
import { Cinema } from "../schemas/cinema.schema";
import { Time } from "../schemas/time.schema";


export default class MoviesService {
	public static async getMovies(): Promise<any> {
		const res = await axios.get('http://www.omdbapi.com?s=batman&apikey=bdb079da');
		return new ResponseData({ data: { Search: res.data.Search } });
	}

	public static async getMovieDetails(params): Promise<any> {
		const res = await axios.get(`http://www.omdbapi.com?i=${params.id}&apikey=bdb079da`);
		const movieDetails = res.data;
		const selectedTime = await Time.findOne({ where: { id: params.timeId ? params.timeId : 0 } });
		const times = (await Time.findAll()).map((time) => time.dataValues);
		const getRandomTimes = () => {
			const randomTimes = [];
			for (let i = 0; i < 5; i++) {
				const randomTimeIndex = Math.floor(Math.random() * 10 - 1);
				const randomTime = times[randomTimeIndex < 1 ? 1 : randomTimeIndex > 9 ? 9 : randomTimeIndex];
				if (!randomTimes.find(time => time.id === randomTime.id)) {
					randomTime.spotsLeft = 80 - randomTime.seats.length;
					randomTimes.push(randomTime);
				}
			}
			return randomTimes;
		};
		movieDetails.Cinemas = (await Cinema.findAll()).map((cinema) => {
			const cinemaDetails = cinema.dataValues;
			cinemaDetails.times = selectedTime ? [selectedTime] : getRandomTimes();
			return cinemaDetails;
		});
		return new ResponseData({ data: { movieDetails } });
	}

	public static async reserveTickets(body): Promise<any> {
		const time = await Time.findOne({ where: { id: body.timeId } });
		await time.set({seats: time.dataValues.seats.concat(body.seats)});
		await time.save();
		return new ResponseData({ data: { message: 'success' } });
	}
}