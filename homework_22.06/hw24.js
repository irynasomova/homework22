//TASK 1 Создать тест на 10 вопросов 

/*var question1 = parseInt(prompt("Question one: Fox is - 1) an animal; 2) a bird; 3) a man. Enter right number:"));
var question2 = parseInt(prompt("Question two: We live in - 1) Russia; 2) Ukraine; 3) USA. Enter right number:"));
var question3 = parseInt(prompt("Question three: Kiev is the capital of - 1) Russia; 2) Ukraine; 3) USA. Enter right number:"));
var question4 = parseInt(prompt("Question four: London stands o the both banks of the river - 1) Dnipro; 2) Lena; 3) Thames. Enter right number:"));
var question5 = parseInt(prompt("Question five: How many fingers on one hand we usually have? - 1) two; 2) five; 3) six. Enter right number:"));
var question6 = parseInt(prompt("Question six: We are - 1) human; 2) alients; 3) i don't know who we are :(. Enter right number:"));
var question7 = parseInt(prompt("Question seven: 2+2 = 1) 3; 2) 4; 3) 5. Enter right number:"));
var question8 = parseInt(prompt("Question eight: 3*3 = 1) 9; 2) 10; 3) 27. Enter right number:"));
var question9 = parseInt(prompt("Question nine: This question is number - 1) two; 2) five; 3) nine. Enter right number:"));
var question10 = parseInt(prompt("Question ten: Now we are trying to study - 1) JS; 2) CSS; 3) HTML. Enter right number:"));

var plus = 0;

if (question1 === 1) plus++;
if (question2 === 2) plus++;
if (question3 === 2) plus++;
if (question4 === 3) plus++;
if (question5 === 2) plus++;
if (question6 === 1) plus++;
if (question7 === 2) plus++;
if (question8 === 1) plus++;
if (question9 === 3) plus++;
if (question10 === 1) plus++;

alert('У Вас ' + plus + ' правильных ответа!');*/

//TASK 2 про самолет

//данные, которые вводит пользователь
var value_tank = parseInt(prompt("Enter the value of tank: "));
var value_initial = parseInt(prompt("Enter the initial value of tank: "));
var weight_cargo = parseInt(prompt("Enter the weight of cargo: "));
var distance_a = parseInt(prompt("Enter the distance from point A to point C: "));
var distance_b = parseInt(prompt("Enter the distance from point C to point B: "));

//ограничение бака
var max_value = 500;

//если объем бака, который вводит пользователь, больше макс.объема
if (value_tank>max_value) alert ("Invalid input");

//если груз превышает допустимый вес
if (weight_cargo>=5) alert("Sorry, the weight is too large, you couldn't fly");

//при весе груза от 4 до 5 т
if (weight_cargo<5) {
	var rashod_fuel_on_100km_5 = 50/100; //вычисление расхода топлива на 1 км
	var AB_5 = distance_a+distance_b; //вычисление расстояния, заданного пользователем
	var rashod_fuel_5 = rashod_fuel_on_100km_5*AB_5; //вычисление нужного объема топлива при заданном расстоянии
	
	if (value_initial>=rashod_fuel_5) alert ("You have enough fuel for the flight. Nice trip!"); // в случае, если нужного объема хватит
	else if (value_initial<rashod_fuel_5) { //вычисление недостающего объема топлива
		var rest_fuel_5 = rashod_fuel_5 - value_initial;
		alert("your plane will not reach. You need "+rest_fuel_5+" litrs for refueling. But your fuel tank does not have enough place for it! We don't recommend to fly");
	}
}
//при весе груза от 3 до 4 т
if (weight_cargo<4) {
	var rashod_fuel_on_100km_4 = 42/100;
	var AB_4 = distance_a+distance_b;
	var rashod_fuel_4 = rashod_fuel_on_100km_4*AB_4;
	
	if (value_initial>=rashod_fuel_4) alert ("You have enough fuel for the flight. Nice trip!");
	else if (value_initial<rashod_fuel_4) {
		var rest_fuel_4 = rashod_fuel_4 - value_initial;
		alert("your plane will not reach. You need "+rest_fuel_4+" litrs for refueling. But your fuel tank does not have enough place for it! We don't recommend to fly");
	}
}
//при весе груза от 2 до 3 т
if (weight_cargo<3) {
	var rashod_fuel_on_100km_3 = 35/100;
	var AB_3 = distance_a+distance_b;
	var rashod_fuel_3 = rashod_fuel_on_100km_3*AB_3;
	
	if (value_initial>=rashod_fuel_3) alert ("You have enough fuel for the flight. Nice trip!");
	else if (value_initial<rashod_fuel_3) {
		var rest_fuel_3 = rashod_fuel_3 - value_initial;
		alert("your plane will not reach. You need "+rest_fuel_3+" litrs for refueling. But your fuel tank does not have enough place for it! We don't recommend to fly");
	}
}
//при весе груза от 1 до 2 т
if (weight_cargo<2) {
	var rashod_fuel_on_100km_2 = 30/100;
	var AB_2 = distance_a+distance_b;
	var rashod_fuel_2 = rashod_fuel_on_100km_2*AB_2;
	
	if (value_initial>=rashod_fuel_2) alert ("You have enough fuel for the flight. Nice trip!");
	else if (value_initial<rashod_fuel_2) {
		var rest_fuel_2 = rashod_fuel_2 - value_initial;
		alert("your plane will not reach. You need "+rest_fuel_2+" litrs for refueling. But your fuel tank does not have enough place for it! We don't recommend to fly");
	}
}
//при весе груза до 1 т
if (weight_cargo<1) {
	var rashod_fuel_on_100km_1 = 25/100;
	var AB_1 = distance_a+distance_b;
	var rashod_fuel_1 = rashod_fuel_on_100km_1*AB_1;
	
	if (value_initial>=rashod_fuel_1) alert ("You have enough fuel for the flight. Nice trip!");
	else if (value_initial<rashod_fuel_1) {
		var rest_fuel_1 = rashod_fuel_1 - value_initial;
		alert("your plane will not reach. You need "+rest_fuel_1+" litrs for refueling. But your fuel tank does not have enough place for it! We don't recommend to fly");
	}
}

