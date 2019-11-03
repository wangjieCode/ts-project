import "reflect-metadata"; // 属性验证基础库
import Express from "express";
import { movie } from "./api/movieApi";
import { upload } from "./api/uploadApi";

const app = Express();

app.use(Express.json());	// 解析post请求的消息体

app.use("/api/movie", movie);

app.use("/api/upload", upload);
app.listen("80");
