'use strict'
  // Вызов функции на месте в JavaScript
  /* №1⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* !function() {
	console.log('!');
}(); //! */

  /* №2⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* function() {
	console.log('!');
}(); // ошибка */

  // Присваивание в переменную
  /* №3⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль:
 */
  /* let result = function() {
	return '!';
}();
		
console.log(result); */ //!

  /* №4⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = function() {
	return '!';
};
		
console.log(result); */ //выведет полностью функцию т.к нет () - значений;

  /* №5⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = function() {
	return '!';
};
		
console.log(result()); */ //!

  // Применение вызова на месте
  /* №6⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = function() {return 1;}() + function() {return 2;}();
console.log(result); */ //3

  // Круглые скобки
  /* №7⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = (function() {
	return '!';
}());

console.log(result);  */ //!

  /* №8⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = (function() {
	return '!';
})();
console.log(result);  */ //!

  /* №9⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = (function() {
	return '!';
});

console.log(result); */ //функция

  /* №10⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* let result = (function() {
	return '!';
});

console.log(result()); */ //!

  // Параметры
  /* №11⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
  /* (function(num1, num2) {
	console.log(num1 + num2); //ошибка
})(1, 2); 
 */

  // Несколько скобок
  /* №12⊗jsPmFAIIFE
Допишите следующий код так, чтобы его запуск алертом выводил '!': */
/* (function() {
	// какой-то код
})()()();
 */
 /*  +(function () {
    return function () {
      return function () {
          console.log("!");
      };
    };
  })()()(); */

/*   №13⊗jsPmFAIIFE
Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел: */
/* (function() {
	// какой-то код
})(1)(2); */

/* +(function(num1) {
		return function(num2){
			console.log(num1 + num2)
	}
})(1)(2); */ //3

/* №14⊗jsPmFAIIFE
Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел: */
/* (function() {
	// какой-то код
})(1)(2)(3); */

/* +(function(num1) {
	return function (num2){
		return function (num3){
			console.log(num1 + num2 + num3)
		}
	}
})(1)(2)(3); */ //6

// Подводные камни
/* №15⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */
/* let str = 'str';

(function() {
	console.log(1); //1
})(); */

/* №16⊗jsPmFAIIFE
Определите, не запуская код, что выведется в консоль: */

let str = 'str'

(function() {
	console.log(1);
})(); // ошибка