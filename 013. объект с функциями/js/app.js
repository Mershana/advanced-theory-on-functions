'use strict'

// Объект с анонимными функциями в JavaScript

/* №1⊗jsPmFAFO
Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел. */
/* let obj = {
	func1: function () {
		return 1;
	},
	func2: function () {
		return 2;
	},

	func3: function () {
		return 3;
	}
}
console.log(obj.func1() + obj.func2() + obj.func3()); */ //6

/* №2⊗jsPmFAFO
Переберите созданный объект циклом и выведите результаты работы функций в консоль. */
/* for (let key in obj){
	console.log(obj[key]());
} */

// Применение
/* №3⊗jsPmFAFO
Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов. */
let arr = [5, 6, 7];
let math = {
	getSum: function(arr){
		let sum = 0;
		for (let elem of arr){
			sum += elem;
		}
		return sum;
	},
	getSquare: function(arr){
		let sum = 0;
		for (let elem of arr){
			sum += elem * elem;
		}
		return sum;
	},
	getCube: function(arr){
		let sum = 0;
		for (let elem of arr){
			sum += elem * elem * elem;
		}
		return sum;
	},
}

for (let key in math){
	console.log(math[key](arr));
}
