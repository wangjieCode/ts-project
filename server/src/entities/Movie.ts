import { ArrayMinSize, IsInt, IsNotEmpty, Max, Min, IsArray } from "class-validator";
import { Type } from "class-transformer";

/**
 * 电影模板
 */
export default class Movie {
	// 名称
	@IsNotEmpty({ message: "电影名称不能为空" })
	@Type(() => String)
	public name: string;

	// 类型
	@Type(() => String)
	@IsArray({ message: "电影类型必须为数组" })
	@ArrayMinSize(1, { message: "电影类型未选择" })
	@IsNotEmpty({ message: "电影类型不能为空" })
	public types: string[];

	// 地区
	@Type(() => String)
	@IsArray({message: "上映地区必须为数组"})
	@ArrayMinSize(1, { message: "上映地区类型未选择" })
	@IsNotEmpty({ message: "上映地区不能为空" })
	public areas: string[];

	// 时长
	@Type(() => Number)
	@IsNotEmpty({ message: "电影时长不能为空" })
	@IsInt({ message: "电影时长必须为整数" })
	@Min(1, { message: "最短不能少于1分钟" })
	@Max(180, { message: "最大不能超过180分钟" })
	public timeLong: number;

	// 是否热映
	@Type(() => Boolean)
	@IsNotEmpty({ message: "是否热映不能为空" })
	public isHot: boolean = false;

	// 是否即将上映
	@Type(() => Boolean)
	@IsNotEmpty({ message: "是否即将上映不能为空" })
	public isComping: boolean = false;

	// 是否为经典
	@Type(() => Boolean)
	@IsNotEmpty({ message: "是否经典不能为空" })
	public isClassic: boolean = false;

	// 简介
	@Type(() => String)
	public description?: string;

	// 图片
	@Type(() => String)
	public poster?: string;
}
