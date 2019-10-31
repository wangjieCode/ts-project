
/**
 * var a = [1,3,4,5,[6,7,9],[2],[5]];
 * 方法一：join
 * a.join(",").split(",");
 * 方法二：toString()
 * a.toString().split(",")
 * 方法三：空字符串
 * 空字符串也可以将数组转为字符串哦～
 * a = (a+'').split(',');
 */

export function chank(arr: any[]): string[] {
	const newArr: any = [];
	arr.forEach(ele => {
		if (ele instanceof Array) {
			chank(ele);
		} else {
			newArr.push(ele);
		}
	});
	return newArr;
}
