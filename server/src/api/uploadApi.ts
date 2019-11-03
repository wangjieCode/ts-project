import Express, { response } from "express";
import multer from "multer";
import path from "path";
import { ResTempent } from "./ResposeTempent";
const upload = Express.Router();

const storage = multer.diskStorage({
	destination: path.resolve(__dirname, "../../image"),
	filename(req, file, cb) {
		const time = new Date().getTime();
		const extname = path.extname(file.originalname);
		cb(null, `${time}${extname}`);
	},
});

const allowedExtensions = [".jpg", ".png", ".gif", ".bmp", ".jiff"];
const uploadimg = multer({
	storage,

})

upload.post("/", (request, response) => {
	console.log(request.body)
});

export { upload };
