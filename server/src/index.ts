import "reflect-metadata"; // 属性验证基础库
import Express, { response } from "express";

const app = Express();

app.use("/api/movie", (req, response) => {
	response.send("mmp");
});

app.listen("80");
