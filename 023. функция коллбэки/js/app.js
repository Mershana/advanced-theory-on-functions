"use strict";

// Функции-коллбэки в JavaScript
/* №1⊗jsPmFAClb
Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза. */
/* function each(arr, callback){
	let result = [];

	for (let elem of arr){
		result.push( callback(elem) );
	}
	return result;
}

let result = each([4, 5, 6, 7, 8], function(num){
	return num += 2;
});

console.log(result);
 */

/* №2⊗jsPmFAClb
Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке. */
/* let arr = ['green', 'blue', 'orange'];
function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push( callback(elem) ) ;
  }
  return result;

}

console.log(
  each(arr, function (str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  })
); */

/* №3⊗jsPmFAClb
Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки. */
/* let arr = ['green', 'blue', 'orange'];
function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

console.log(
  each(arr, function (str) {
    let result = str.slice(0, 1).toUpperCase() + str.slice(1);
    return result;
  })
);
 */

// Нюансы

/* №4⊗jsPmFAClb
С помощью следующей функции возведите все элементы массива в куб: */

/* function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

function cube(num) {
	return num ** 3;
}
let result = each([4, 5, 6, 7, 8], cube);
	console.log(result);
 */