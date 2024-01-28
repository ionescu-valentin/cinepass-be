export class ErrorData {
	code: number;
	type: string;
	message: string;

	constructor(code: number, type: string, message: string) {
		this.code = code;
		this.type = type;
		this.message = message;
	}
}

export class ResponseData {
	error: ErrorData;
	data: any;

	constructor({ data = null, error = null }) {
		this.error = error;
		this.data = data;
	}

	handleResponse(sender): void {
		if (this.data) {
			sender.send(this.data);
		} else {
			if (!this.error) {
				this.error = new ErrorData(500, 'internal server error', 'INTERNAL_SERVER_ERROR')
			}
			sender.status(this.error.code).send({ type: this.error.type, message: this.error.message });
		}
	}
}