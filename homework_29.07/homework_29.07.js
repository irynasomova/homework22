// split/join
/*function str_replace(str , from, to) {
	var res = str.split(from);
	return res.join(to);
}*/

// indexOf
function str_replace(str , from, to) {
	var pos;
	var fromLength = from.length;
	var toLength = to.length;
	var res = '';
	var n = 0;
	while ((pos = str.indexOf(from, n)) != -1) {
		for (var i = n; i < pos; i++) {
			res += str[i];
			n++;
		}
		res += to;
		n += fromLength;
	}
	for (var i = n; i < str.length; i++) {
		res += str[i];
		n++;
	}
	return res;
}  

alert(str_replace('hello world, hello people', 'hello' , 'good bye'));