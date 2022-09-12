'use strict'

// Нюансы функциональных выражений в JavaScript

/* №1⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression:
 */
/* function func() {
	console.log('!');
} */
//Function Declaration

/* №2⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* let func = function() {
	console.log('!');
}; */
//Function Expression

/* №3⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* +function() {
	console.log('!');
} */
// Function Expression

/* №4⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* !function func() {
	console.log('!');
} */
//Function Expression

/* №5⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* -function func() {
	console.log('!');
} */
//Function Expression

/* №6⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* 1 + function func() {
	console.log('!');
} */
//Function Expression

/* №7⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression:
 */
/* (function func() {
	console.log('!');
}) */
//Function Expression

/* №8⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* console.log(
	function() {
		console.log('!');
	}
); */
// Function Expression

// Функция с именем, но Function Expression

/* Выводы
Подведем итог: функции являются Function Declaration или Function Expression не потому, что имеют имя или не имеют, а потому, что являются участниками выражений или не являются.
Как вы видели выше, функция без имени может быть воспринята как Function Declaration, а функции с именем может быть Function Expression. */

/* №9⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* let test = function func() {
	console.log('!');
} */
//Function Expression

/* №10⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* func()
console.log(
	function func() {
		console.log('!');
	}
); */
//Function Expression

/* №11⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* func()
+function func() {
	console.log('!');
} */
// Function Expression

/* №12⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* func()
function func() {
	console.log('!');
} */
//Function Declaration


// Более сложные нюансы
/* №13⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* -
function func() {
	console.log('!');
} */
//Function Expression:

/* №14⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* -1;
function func() {
	console.log('!');
} */
//Function Declaration

/* №15⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* -1
function func() {
	console.log('!');
} */
//Function Declaration

/* №16⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression:
 */
/* 1
function func() {
	console.log('!');
} */
// Function Declaration:


/* №17⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression:
-1-
function func() {
	console.log('!');
} */
// Function Expression:

// Выражение справа
/* №18⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* function func() {
	console.log('!');
}
+1; */
// Function Declaration

/* №19⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* function func() {
	console.log('!');
} + 1; */
// Function Declaration

/* №20⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* +function func() {
	console.log('!');
} + 1; */
//Function Expression

/* №21⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression:
 */
/* +
function func() {
	console.log('!');
} + 1; */
//Function Expression

/* №22⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* + 1
function func() {
	console.log('!');
} + 1; */
//Function Declaration

/* №23⊗jsPmFAFEN
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* function func() {
	console.log('!');
} + console.log('!'); */
//Function Declaration

