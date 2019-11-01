import { Min } from "class-validator";
import { Type } from "class-transformer";
import { BaseMovie } from "../entities/Movie/BaseMovie";

export class seachMovie extends BaseMovie {
	@Min(1, { message: "最小值为1" })
	@Type(() => Number)
	public start: number = 1;

	@Type(() => Number)
	@Min(1, { message: "最小为1" })
	public limit: number = 5;

	public key: string = "";

	public static transfrom(plain: object): seachMovie {
		return super.BasetranfromPlain(seachMovie, plain);
	}
}
