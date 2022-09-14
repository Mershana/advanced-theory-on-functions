'use strict'

// Область видимости вложенных функций в JavaScript

/* №1⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	func();
}
test();  */// 1

/* №2⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test(); */ //ничего

/* №3⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func(); // ничего
}
 */

/* №4⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let num;
	
	function func() {
		console.log(num);
	}	
	num = 1
	func(); 
	
	num = 2
	func();
}

test(); */ // 1 // 2

// Параметры
/* №5⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test(1, 2); */ //3

/* №6⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test(1, 2);  */// 4

// Параметры
/* №7⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test(1); */ //1

/* №8⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}
test(1); */ //2

/* №9⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}
test(1); */ //1


/* №10⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); */ // 1


/* №11⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum);
}

test(1);  *///ошибка

/* №12⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль:
 */
/* function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); */ //2

// Одноименные параметры
/* №13⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test(1); */ //1

/* №14⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); */ //1

/* №15⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test(1); */ //2

/* №16⊗jsPmFANFS
Определите, не запуская код, что выведется в консоль: */
/* function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test(1); */ // 1