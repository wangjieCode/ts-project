import Movie from "./Movie";
import { plainToClass } from "class-transformer";
const movieObj = {
	name: "涨粉",
	timeLong: 2,
	areas: ["北京"],
	types: ["科幻"],
};
const a =  plainToClass(Movie, movieObj);
