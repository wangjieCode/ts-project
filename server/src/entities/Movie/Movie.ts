import { Type, plainToClass } from "class-transformer";
import { chank } from "../../util/Array";
import { validate } from "class-validator";
import { MovieType } from "./MovieType";

export default class Movie extends MovieType {
	/**
	 * 验证当前对象，不需要参数
	 */
	public async toValidate(isskip = false): Promise<string[]> {
		const errArr = await validate(this, {
			skipUndefinedProperties: isskip,
		});
		const reslut = errArr.map(res => Object.values(res.constraints));
		return chank(reslut);
	}
	/**
	 * 转换对象
	 */
	public static tranfromPlain(plainObj: object): Movie {
		if (plainObj instanceof Movie) {
			return plainObj;
		}
		return plainToClass(Movie, plainObj);
	}

}
