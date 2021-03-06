import { ArrayMinSize, IsInt, IsNotEmpty, Max, Min } from "class-validator";

/**
 * 电影模板
 */
export default class Movie {
	// 名称
	@IsNotEmpty({ message: "电影名称不能为空" })
	public name: string;

	// 类型
	@ArrayMinSize(1, { message: "电影类型未选择" })
	@IsNotEmpty({ message: "电影类型不能为空" })
	public types: string[];

	// 地区
	@ArrayMinSize(1, { message: "上映地区类型未选择" })
	@IsNotEmpty({ message: "上映地区不能为空" })
	public areas: string[];

	// 时长
	@IsNotEmpty({ message: "电影时长不能为空" })
	@IsInt({ message: "电影时长必须为整数" })
	@Min(1, { message: "最短不能少于1分钟" })
	@Max(180, { message: "最大不能超过180分钟" })
	public timeLong: number;

	// 是否热映
	@IsNotEmpty({ message: "是否热映不能为空" })
	public isHot: boolean = false;

	// 是否即将上映
	@IsNotEmpty({ message: "是否即将上映不能为空" })
	public isComping: boolean = false;

	// 是否为经典
	@IsNotEmpty({ message: "是否经典不能为空" })
	public isClassic: boolean = false;

	// 简介
	public description?: string;

	// 图片
	public poster?: string;
}
