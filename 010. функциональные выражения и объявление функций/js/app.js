'use strict'

// Function expression и Function declaration в JavaScript

/* №1⊗jsPmFAFDE
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* function func() {
	console.log('!');
} */
//Function Declaration

/* №2⊗jsPmFAFDE
Определите, является ли представленная функция Function Declaration или Function Expression: */
/* let func = function() {
	console.log('!');
} */
//function expression

// Разница

/* №3⊗jsPmFAFDE
Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления. */
/* console.log(func()); //доступна т.к FD 
function func(){
	return 1;
}
 */

/* №4⊗jsPmFAFDE
Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления. */
/* console.log(func()); //будет ошибка, т.к FE
let func = function(){
	return 1;
} */

// Объяснение работы Function Declaration

/* №5⊗jsPmFAFDE
Расставьте точки с запятой во всех необходимых местах: */
let func1 = function() {console.log('!');};
let func2 = function() {
	console.log('!');
};
function func3() {
	console.log('!');
}