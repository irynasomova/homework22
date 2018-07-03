//task 01 - Написать программу для вывода трегольников из звезд

/*var width = parseInt(prompt("Enter the width: "));

var row = 1;
var space = 1;
while (row <= width){
	var j = space * (width-row);
	while (j > 0) {
		document.write("&nbsp;");
		j--;
	}
	var k = 1;
	while (k <= row) {
		document.write("*");
		k++;
	}
	document.write("<br> ");
	row++;
}
*/


//пустой треугольник 

/*var width = parseInt(prompt("Enter the width: "));

var row = 1;
var space = 1;
while (row <= width){
	var j = space * (width-row);
	while (j > 0) {
		document.write("&nbsp;");
		j--;
	}
	var k = 1;
	while (k <= row) {
		if (k==1||k==row||width==row) document.write("*");
		else document.write("&nbsp;&nbsp;");
		k++;
	}
	document.write("<br> ");
	row++;
}*/


//task 02 rеализовать игру "Угадай число"

/*function rand(a,b) {
    return Math.round(Math.random()*(b-a))+a;
}

while (true) {
    var x = rand(1,5);
    console.log(x); 
    var tries = 1;
    var repeat = false; //продолжать игру или нет
    while (tries<=5){
    	var answer = parseInt(prompt("Enter your answer: "));
    	if (x == answer) {
	    	if (confirm("Вы выграли, сыграем еще?")){
	    		repeat = true;
	    		break;
	    	}
	    	else {
	    		repeat = false;
	    		break;
	    	}
	    }		
    	else if(answer>x) alert("Нет, слишком много, осталось "+(5-tries)+" попытки");
    	else alert("Нет, слишком мало, осталось "+(5-tries)+" попытки");
    	tries++;
   	}
   	if (tries>5) alert("Все попытки исчерпаны - ты проиграл, лузер");
   	if (!repeat) {
   		break;
   	}
}*/
    