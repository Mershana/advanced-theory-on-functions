'use strict'

// Замыкания в JavaScript

/* №1⊗jsPmFACls
Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях. */
/* function test(){
	let num = 1;

	return function(){
		console.log(num);
		num++;
	};
};

let func1 = test();
func1();
func1();

let func2 = test();
func2();
func2();
 */

/* №2⊗jsPmFACls
Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число. */
/* function test(){
	let num = 10;

	return function(){
		console.log(num);
		num--;
	};
};

let func = test();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func(); */


/* №3⊗jsPmFACls
Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен. */
/* function test(){
	let num = 10;

	return function(){
		for(let i = num; i >= -10; i--){
			if (i >= 0){
				console.log(i);
			} else {
				console.log('отсчет окончен');
			};
		}
	}
}

let func = test();
func(); */

// Нюанс
/* №4⊗jsPmFACls
Определите, не запуская код, что выведется в консоль:
 */
/* function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
};

func()(); // 0
func()(); // 0 
func()();  */// 0

/* №5⊗jsPmFACls
Определите, не запуская код, что выведется в консоль: */
/* function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
};

let test = func;

test()(); //0
test()(); //0
test()(); */// 0

// Нюанс
/* №6⊗jsPmFACls
Определите, не запуская код, что выведется в консоль: */
/* let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
};

let func = test;

let func1 = func();
let func2 = func();
func1(); //0
func2(); //1
func1(); //2
func2(); //3 */

/* №7⊗jsPmFACls
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
};

let func = test()();

let func1 = func;
let func2 = func;
func1(); //0
func2(); //1
func1(); //2
func2(); //3 */

/* №8⊗jsPmFACls
Определите, не запуская код, что выведется в консоль: */
/* function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
};

let func = test();

let func1 = func();
let func2 = func();
func1(); //0
func2(); //1
func1(); //2
func2(); */ //3