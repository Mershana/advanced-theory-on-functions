'use strict'

// Стрелочные функции в JavaScript
/* №1⊗jsPmFAAF
Дана следующая функция с коллбэком:
let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию. */
/* let result = every([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result) */
// let result = every([1, 2, 3, 4, 5], elem => elem > 0);


/* /* №2⊗jsPmFAAF
Дана следующая функция с коллбэком: */
/* let result = every([1, 2, 3, 4, 5], function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
}); */
// Упростите коллбэк через стрелочную функцию */
// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

/* №3⊗jsPmFAAF
Дана следующая функция с коллбэком: */
/* let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию. */
/* let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = each(arr,(elem, index) => elem * index > 10) */

