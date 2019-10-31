import "reflect-metadata";
import { validate } from "class-validator";
import Movie from "./entities/Movie";
import { plainToClass } from "class-transformer";

const m: any = {};

m.name = "wangjie";
m.types = ["科幻"];
m.areas = ["北京"];
m.timeLong = 2;
const newm =  plainToClass(Movie, m);

validate(newm).then(err => console.log(err));
