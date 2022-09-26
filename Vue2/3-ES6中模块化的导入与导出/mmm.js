// 第一种一般导入
import { name, flag, lenght, sum } from "./aaa.js"
console.log(name,lenght)
if(flag)
{
	console.log(sum(20,30))
}

import {FirstName, LastName} from './aaa.js'
console.log(FirstName,LastName)
// 第二种导入函数和类

import {sub,Person} from './aaa.js'
console.log(sub(30,20))
const p = new Person()
p.run()
// 第三种导入export default

import ooooo from './aaa.js'
console.log(ooooo.name)
// 第四种统一全部导入
 
 import * as pppp from './aaa.js'
 console.log(name)
 console.log(sum(100,500))
 console.log(ooooo.name)