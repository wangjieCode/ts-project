import Mongoose from "mongoose";
import Movie from "./MovieSchema";
Mongoose.connect("mongodb://localhost:27017/moviedb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then( res => {
	console.log("连接成功");
});

export { Movie as MovieModel };
