import { ResponseData } from "../models/response.model";
import { User } from "../schemas/user.schema";


export default class UsersService {
	public static async Login(userData): Promise<any> {
		await User.findOrCreate({
			where: { uuid: userData.id },
			defaults: {
				email: userData.email,
				firstName: userData.firstName,
				lastName: userData.lastName,
				uuid: userData.id
			}
		});
		return new ResponseData({ data: { message: 'logged in!' } });
	}
}