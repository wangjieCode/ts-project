import "reflect-metadata";
import { validate } from "class-validator";
import Movie from "./entities/Movie/Movie";
import { MovieModel } from "./db";
import { plainToClass } from "class-transformer";
import { addMovie, remove } from "./dbInnerface/movieInnerface";

const movieObj: any = {
	name: "涨粉",
	timeLong: 2,
	areas: ["北京"],
	types: ["科幻"],
};


remove("5dba74b699bf913520942a86").then( res => console.log(res))
