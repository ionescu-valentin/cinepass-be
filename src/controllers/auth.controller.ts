import { ResponseData } from "../models/response.model";
import UsersService from "../services/users.service";

export default class AuthController {
    public static async Login(req: any, res: any) {
		const Response: ResponseData = await UsersService.Login(req.body);
		Response.handleResponse(res);
	}
}