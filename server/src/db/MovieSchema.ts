import Mongoose from "mongoose";
import Movie from "../entities/Movie/Movie";

export interface movieDB extends Movie, Mongoose.Document {};

const MovieSchema = new Mongoose.Schema<movieDB>({
	name: String,
	types: [String],
	areas: [String],
	timeLong: Number,
	isHot: Boolean,
	isComping: Boolean,
	isClassic: Boolean,
	description: String,
	poster: String,
}, {
	versionKey: false,
});
export default Mongoose.model<movieDB>("movie", MovieSchema);
