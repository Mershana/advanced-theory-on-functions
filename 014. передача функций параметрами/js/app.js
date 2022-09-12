'use strict'

// Передача функций параметрами в JavaScript

/* №1⊗jsPmFAPFAP
Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций. */


/* function test(func1, func2, func3){
	console.log(func1() + func2() + func3())
}

test(
	function(){
		return 1;
	},
	function(){
		return 2;
	},
	function(){
		return 3;
	},
) */

// Именованные функции


/* №2⊗jsPmFAPFAP
Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций. */
/* let get1 = function() {
	return 10;
}

let get2 = function() {
	return 15;
}

let get3 = function() {
	return 30;
}

test(get1, get2, get3);

function test(func1, func2, func3){
	console.log(func1() + func2() + func3());
} */


/* №3⊗jsPmFAPFAP
Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи. */
/* function test(func1, func2, func3) {
	console.log(func1(), func2(), func3());
}

function func1() {
	return 10;
}
function func2() {
	return 15;
}
function func3() {
	return 30;
}

test(func1, func2, func3); */

/* №4⊗jsPmFAPFAP
Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами. */
/* let func1 = function(){
	return 10;
}

let func2 = function(){
	return 15;
}

let func3 = function(){
	return 30;
}

test(func1, func2, func3);

function test(func1, func2, func3){
	console.log(func1(), func2(), func3());
} */

// Параметры передаваемых функций
/* №5⊗jsPmFAPFAP
Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб. */
/* test(function(num) {
	return num * num * num;
});

function test(func) {
	console.log(func(3));
} */

/* №6⊗jsPmFAPFAP
Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func. */
/* function func(num){
	return num * num * num;
};

test(func);

function test(func){
	console.log(func(3));
} */

/* №7⊗jsPmFAPFAP
Переделайте передаваемую функцию на Function Expression с тем же именем func. */
/* let func = function (num){
	return num * num * num;
};
test(func);
function test(func){
	console.log(func(3));
}  */

// №8⊗jsPmFAPFAP
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
/* let func = function(num1, num2){
	let sum = num1+ num2;
	return sum;
};
test(func);

function test(func){
	console.log(func(2, 3)); //5
} */


// Передадим и число параметром
/* №9⊗jsPmFAPFAP
Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
Пусть функция test возвращает сумму результатов переданных функций:
function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль. */

/* function getSquare(num) {
	return num * num;
}

function getCube(num) {
	return num * num * num;
}

function test(num, getSquare, getCube) {
	return getSquare(num) + getCube(num);
}


console.log(test(3, getSquare, getCube));  */ //36

// Применение
/* №10⊗jsPmFAPFAP
Не подсматривая в мой код реализуйте такую же функцию test самостоятельно. */
/* function test (arr, func){
	for (let i = 0; i < arr.length; i++){
		arr[i] =+ func(arr[i]);
	}
	return arr;
}

let result = test([1, 2, 3, 4], function(num){
	return num * num
});

console.log(result); */

// №11⊗jsPmFAPFAP
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
/* let arr = [1, 2, 3, 4];
function test(arr, func){
	for (let i = 0; i < arr.length; i++){
		arr[i] = func(arr[i]);
	}
	return arr;
}

let result = test (arr, function(num){
	return num * num * num
});

console.log(result); */

