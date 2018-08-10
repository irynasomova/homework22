/*var arr = [1, 2, 3, 4, 5];

function myReduce(arr, f) {
	let res;
	for (let i in arr) {
		if (res === undefined) {
			res = arr[i];
		} else {
			res = f(res, arr[i]);
		}
	}
	return res;
}
// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = myReduce(arr, function(sum, current) {
  return sum + current;
});

alert( result ); // 15 */

var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

function myEvery(arr, f) {
	for (let i in arr) {
		if (!f(arr[i])) {
			return false;
		}
	}
	return true;
}

function mySome(arr, f) {
	for (let i in arr) {
		if (f(arr[i])) {
			return true;
		}
	}
	return false;
}

alert( myEvery(arr, isPositive) ); // false, не все положительные
alert( mySome(arr, isPositive) ); // true, есть хоть одно положительное