"use strict";

// Функция, возвращающая функцию в JavaScript

/* №1⊗jsPmFAFRF
Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций. */
/* function func1() {
  return function () {
    return 1;
  };
}

console.log(func1()()); //1

function func2() {
  return function () {
    return 2;
  };
}
console.log(func2()()); //2

function sum(func1, func2){
	let sum = 0;
	sum += func1 + func2;
	return sum;
}
console.log(sum(func1()(), func2()())); */

/* №2⊗jsPmFAFRF
Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'. */
/* function func(){
	return function(){
		return function(){
			return function(){
				return function(){
					return '!'
				};
			};
		};
	};
}
console.log(func()()()()()); */

// Параметры
/* №3⊗jsPmFAFRF
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел. */
/* function func(num1){
	return function(num2){
		return function(num3){
			return num1 + num2 + num3;
		};
	};
}
console.log(func(2)(3)(4)); */ // 9

/* №4⊗jsPmFAFRF
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел. */
/* let arr = [];

function func(arr1){
	return function(arr2){
		return function(arr3){
			return function(arr4){
				return function(){
					 arr.unshift(arr1, arr2, arr3, arr4);
					return arr
				};
			};
		};
	};
}
console.log(func(2)(3)(4)(5)());  */