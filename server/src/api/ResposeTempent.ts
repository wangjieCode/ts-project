import { Response } from "express";
interface seachMovie<T> {
	count: number;
	data: T[];
	errors: string[];
}

export class ResTempent {
	public static sendError(err: string | string[], resp: Response) {
		let tempErr = "";
		if (Array.isArray(err)) {
			tempErr = err.join(",");
		} else {
			tempErr = err;
		}
		resp.send({
			err: tempErr,
			data: null,
		});
	}
	public static sendData(data: any, resp: Response) {
		resp.send({
			err: "",
			data,
		});
	}
	public static seachData<T>(seach: seachMovie<T>, resp: Response) {
		if (seach.errors.length > 0) {
			this.sendError(seach.errors, resp);
		} else {
			resp.send({
				error: null,
				data: seach.data,
				count: seach.count,
			});
		}
	}
}
