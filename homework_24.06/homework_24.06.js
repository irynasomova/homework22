//Task 0 - Вывести все числа от 1 до 100, которые не делятся не 3 
/*
var i = 1;
while (i<=100) {
	if(i%3===0)
	document.write(i+"<br>");
	i++;
}
*/

//Task 1 - Посчитать колличество чисел, которые делятся на X в интервале от 1 до 100, Х вводит пользователь

/*
var x = parseInt(prompt("Enter your number"));

var i = 1;
while (i<=100) {
	if(i%x===0)
	document.write(i+"<br>");
	i++
}
*/

//Task 2 - Вывести все числа больше либо равные А, меньшие чем B с шагом С 
//A,B,C - вводит пользователь 
//Пример А=1, B=10, C=3, программа выведет 1,4,7/ Пояснение: 1, 1+3=4, 4+3=7, 7+3=10(а десять не меньше десяти - конец)

/*
var A = parseInt(prompt("Enter your number A: "));
var B = parseInt(prompt("Enter your number B: "));
var C = parseInt(prompt("Enter your number C: "));

var x=A;
while (x >= A && x < B){
	document.write(x+"<br>");
	x+=C;
}
*/

//Task 3 Вывести полную таблицу умножения (от 1 до 9)

/*
var i = 1;
while (i <= 9){
	var j = 0; 
	while (j <= 10) {
		value = i * j;
		document.write(i+"*"+j+"="+value+"<br>");
		j++;
	}
	i++;
	document.write("<br>");
}
*/

//Task 4 - Пользователь вводит слово и число строк. Вывести эти строки таким образом, что на каждой следующей строке на одно слово больше, чем в предидущей

/*
var word = prompt("Enter your word: ");
var num_row = parseInt(prompt("Enter your amount of row: "));

var row = 1;
var result = "";
while (row <= num_row){
	result = result + word + " ";
	document.write(result+"<br>");
	row++;
}

document.write("<br> ");

var row = 1;
while (row <= num_row){
	var j = 1;
	while (j <= row) {
		document.write(word+" ");
		j++;
	}
	document.write("<br> ");
	row++;
}

document.write("<br> ");

var row = 1;
var count_letter_in_word = word.length;
while (row <= num_row){
	var j = (count_letter_in_word +1) * (num_row-row);
	while (j > 0) {
		document.write("&nbsp;");
		j--;
	}
	var k = 1;
	while (k <= row) {
		document.write(word+" ");
		k++;
	}
	document.write("<br> ");
	row++;
}
*/

//Task 5*(дополнительно) nайти сумму цифр числа введенного пользователем

/*
var number = parseInt(prompt("Enter your number: "));
var sum = 0; //то, что надо найти
while (number>0) {
	sum = sum + number%10;
	number = parseInt(number / 10);
}
	document.write(sum);
*/