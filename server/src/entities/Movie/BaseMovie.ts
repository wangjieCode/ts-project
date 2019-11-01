import { validate } from "class-validator";
import { chank } from "../../util/Array";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export abstract class BaseMovie {
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
	protected static BasetranfromPlain<T>(cls: ClassType<T>, plainObj: object): T {
		if (plainObj instanceof cls) {
			return plainObj;
		}
		return plainToClass(cls, plainObj);
	}
}
