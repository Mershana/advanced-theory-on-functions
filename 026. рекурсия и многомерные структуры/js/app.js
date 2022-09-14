"use strict";

// Рекурсия и многомерные структуры в JavaScript
/* №1⊗jsPmFARS
Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии выведите все примитивные элементы этого объекта в консоль. */
/* let obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};
function allElements(obj) {
  for (let key in obj) {
    if (typeof obj[key] != "object") {
      console.log(obj[key]);
    } else {
      allElements(obj[key]);
    }
  }
}
allElements(obj);
 */

/* №2⊗jsPmFARS
Дан многомерный массив произвольного уровня вложенности, например, такой:
[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
[1, 2, 7, 8, 3, 4, 5, 6, 7] */
/* function ChangeArr(arr) {
  let newArr = [];
  function func(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "object") {
        func(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
	 return newArr;
  }
  console.log(func(arr));
}
ChangeArr([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);  */ //[1, 2, 7, 8, 3, 4, 5, 6, 7]

// Сумма элементов массива
/* №3⊗jsPmFARS
Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии найдите сумму элементов этого объекта. */
/* let obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function sumElemObj(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      sum += sumElemObj(obj[key]);
    } else {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(sumElemObj(obj)); */ // 45

/* №4⊗jsPmFARS
Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
С помощью рекурсии слейте элементы этого массива в одну строку:
'abcdefgjk' */
/* let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function arrChangeString(arr) {
  let str = '';
  for (let elem of arr) {
    if (typeof elem == 'object') {
      str += arrChangeString(elem);
    } else {
      str += elem;
    }
  }
  return str;
}
console.log(arrChangeString(arr));  */ //abcdefgjk

// Манипуляции с элементами
/* №5⊗jsPmFARS
Дан многомерный массив произвольного уровня вложенности, например, такой:
[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
Возведите все элементы-числа этого массива в квадрат. */
/* let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function sqrtElemArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      sqrtElemArray(arr[i]);
    } else {
      arr[i] = arr[i] ** 2;
    }
  }
  return arr;
}

console.log(sqrtElemArray(arr)); */
