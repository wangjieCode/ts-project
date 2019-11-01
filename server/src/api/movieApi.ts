import Express from "express";
import { Response, Request } from "express-serve-static-core";
import { findById, find, addMovie } from "../dbInnerface/movieInnerface";
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
	console.log(request.body)
	const reslut = await addMovie(request.body);
	console.log(reslut)
	if (Array.isArray(reslut)) {
		ResTempent.sendError(reslut, response);
	} else {
		ResTempent.sendData(reslut, response);
	}
});

export { movie };