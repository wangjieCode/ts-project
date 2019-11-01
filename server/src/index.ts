import "reflect-metadata"; // 属性验证基础库
import Express, { response } from "express";
import { movie } from "./api/movieApi";
import { addMovie } from "./dbInnerface/movieInnerface";

const app = Express();

app.use(Express.json());	// 解析post请求的消息体

app.use("/api/movie", movie);

app.listen("80");
// const a: any = {
// 	"name": "我的祖国",
// 	"areas": ["北京", "山西"],
// 	"types": ["爱国主语"],
// 	"tieLong": 120
// }

// addMovie(a).then(res => console.log(res));
