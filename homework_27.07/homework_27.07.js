// loop
function fibonachiLoop(n, prev = 0, current = 1) {
	let result = current;
	if (n < 1) {
		n = 1;
	}
	if (n == 1) {
		return prev;
	} else if (n == 2) {
		return current;
	} else {
		for (var i = 2; i < n; i++) {
			result += prev;
			prev = current;
			current = result;
		}
	}
	return result;
}

// recursion
function fibonacchiRec(n, prev = 0, current = 1, pass = 1) {
	if (n < 1) {
		n = 1;
	}
	if (n == pass) {
		return prev;
	} else {
		let result = prev + current;
		prev = current;
		current = result;
		return fibonacchiRec(n, prev, current, ++pass);
	}
}

alert(fibonachiLoop(9));
alert(fibonacchiRec(9));