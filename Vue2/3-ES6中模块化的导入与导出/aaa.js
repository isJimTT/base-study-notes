var name = '小红';
var lenght = 1.88;
var flag = true
function sum(num1,num2){
	return num1 + num2
}
// 导出方式一
export {name, lenght, flag, sum};

// 导出方式二：
export var FirstName = 'Tang';
export var LastName = 'Jian';

// 导出方式三：导出函数/类
export function sub(num1, num2){
	return num1-num2
}
export class Person {
	run() {
		console.log('在奔跑')
	}
}

// 导出方式四：export default
var address = {
	name: '成都市'
}
export default address