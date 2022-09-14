'use strict'

// Работа с рекурсией в JavaScript
/* №1⊗jsPmFARc
Дан массив:
let arr = [1, 2, 3, 4, 5];
С помощью рекурсии выведите элементы этого массива в консоль. */
/* let arr = [1, 2, 3, 4, 5]
function func(arr){
	console.log(arr.shift(), arr);

	if(arr.length != 0){
		func(arr);
	}
}
func(arr); */

// Сумма элементов массива
/* №2⊗jsPmFARc
Дан массив:
let arr = [1, 2, 3, 4, 5];
С помощью рекурсии найдите сумму квадратов элементов этого массива. */
let arr = [1, 2, 3, 4, 5];
function getSum(arr){
	let sum = arr.shift() ** 2;
	if(arr.length !== 0){
		sum += getSum(arr);
	} 
	return sum;
}


console.log(getSum(arr)); 
