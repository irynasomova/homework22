//1 Написать функцию для получения площади треугольника по его сторонам 

//  function squar(a,b,c){
//     let p = (a+b+c)/2;
//     let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
//     return s;
// }
// console.log(squar(3,4,5));



//2 Написать функцию для нахождения меньшего из двух чисел

// function minimum(a,b){
//         if (a <= b) {
//         	return a;
//         } else {
//         	return b;
//         }
//   }
//   console.log(minimum(7,5));



//3 На основе предидущей функции написать функцию для поиска минимального значения в массиве 


// function minimunArr(arr) {
// 	let minArr = arr[0];
// 	for (let i in arr) {
// 		if (arr[i] < minArr) {
// 			minArr = arr[i];
// 		}	
// 	} return minArr;
// } console.log(minimunArr([5,8,3,6]));


//4 Написать функцию для поиска индекса минимального элемента в заданном диапазоне 

//  function minimunIndex(arr) {
//  	let minIndex = 0;
//  	for (let i in arr) {
//  		if (arr[i] < arr[minIndex]) {
//  			minIndex = i;
//  		}	
//  	} return minIndex;
// } console.log(minimunIndex([5,8,3,6,0]));


//5 Используя предидущую функцию написать ф-ю для сортировки массива методом выбора

// function sortArr(arr){
// 	let n = a.lenght;
// 	for 
// 	let minI = minimunIndex(arr);
// }


//6 Написать функцию для нахождения суммы четных числ массива 

// function arrayEven(arr) {
//      let newEven = 0;
//      for (let i in arr) {
//        	if (arr[i]%2==0)
//        		newEven+=arr[i];
//      }  return newEven;
//  }

//  console.log(arrayEven([1,2,3,4,5,6,8]));

//7 Написать свою реализацию функции indexOf

function myIndexOf(arr, searchElement, fromIndex = 0) {
	let length = arr.length;
	if (fromIndex >= length) {
		return -1;
	} else if (fromIndex < 0) {
		fromIndex = length - Math.abs(fromIndex);
		if (fromIndex < 0) {
			fromIndex = 0;
		}
	}
	let n = -1;
	for (let i in arr) {
		n++;
		if (n < fromIndex) {
			continue;
		} else if (arr[i] === searchElement) {
			return n;
		}
	}
	return -1;
}
var a = [3,0 ,4 ,5,6,22,6,8,3,9,1];
console.log(myIndexOf(a,2), myIndexOf(a,0), myIndexOf(a,6, -6), myIndexOf(a,6, 3), myIndexOf(a,6,6));