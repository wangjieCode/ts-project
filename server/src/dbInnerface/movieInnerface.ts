import Movie from "../entities/Movie/Movie";
import { movieDB } from "../db/MovieSchema";
import { MovieModel } from "../db";

export async function addMovie(movie: Movie): Promise<string[] | movieDB> {
	const temp = Movie.tranfromPlain(movie);
	const result = await temp.toValidate();
	if (result.length > 0) {
		return result;
	}
	return await MovieModel.create(temp);
}

export async function editMovie(where: string, movie: Movie): Promise<string[] | movieDB> {
	const tempObj = Movie.tranfromPlain(movie);
	const result = await tempObj.toValidate(false);
	if (result.length > 0) {
		return result;
	}
	return await MovieModel.updateOne({ _id: where }, movie);
}
/**
 * 根据id删除电影
 * @param id id
 */
export async function remove(id: string): Promise<object> {
	try {
		return await MovieModel.deleteOne({ _id: id });
	} catch (error) {
		return Promise.reject(error);
	}
}
export async function findById(id: string): Promise<Movie | null> {
	return MovieModel.findById({ _id: id });
}
