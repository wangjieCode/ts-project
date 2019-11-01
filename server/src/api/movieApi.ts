import Express from "express";
import { Response } from "express-serve-static-core";
import { findById, find, addMovie, editMovie, remove } from "../dbInnerface/movieInnerface";
import { ResTempent } from "./ResposeTempent";

const movie = Express.Router();

movie.get("/:id", async (request, response: Response) => {
	try {
		const movieID = request.params.id;
		const result = await findById(movieID);
		ResTempent.sendData(result, response);
	} catch (error) {
		ResTempent.sendData(null, response);
	}
});
movie.get("/", async (request, response: Response) => {
	try {
		const result = await find(request.query);
		ResTempent.sendData(result, response);
	} catch (error) {
		ResTempent.sendData(null, response);
	}
});

movie.post("/", async (request, response: Response) => {
	const reslut = await addMovie(request.body);
	if (Array.isArray(reslut)) {
		ResTempent.sendError(reslut, response);
	} else {
		ResTempent.sendData(reslut, response);
	}
});

movie.put("/:id", async (request, response: Response) => {
	const id = request.params.id;
	try {
		const result = await editMovie(id, request.body);
		if (Array.isArray(result)) {
			ResTempent.sendError(result, response);
		} else {
			ResTempent.sendData("ok", response);
		}
	} catch (error) {
		ResTempent.sendError("id error", response);
	}
});

movie.delete("/:id", async (res, rep) => {
	try {
		await remove(res.params.id);
		ResTempent.sendData("ok", rep);
	} catch (error) {
		ResTempent.sendError("id error", rep);
	}
});

export { movie };
