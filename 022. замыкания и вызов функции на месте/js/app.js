'use strict'

// Замыкания и вызов функции на месте в JavaScript
/* №1⊗jsPmFACIIFE
Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик. */

/* let func = (function () {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  }
})();

func();
func();
func();
func();
func();
 */

/* №2⊗jsPmFACIIFE
Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала. */
/* let num = 1
let func = (function () {

	return function (){
		for (let i = 1; i <= 6; i++){
			if (i > 5){
				i = 1;
			}
			console.log(i)
		}
	}
})();
func() */