var print = function(value){
	console.log('Result is ' + value);
}

module.exports.add = function(x, y){
	var z = x + y;
	print(z);
	return z;
}

module.exports.sub = function(x, y){
	var z = x - y;
	print(z);
	return z;
}

module.exports.mul = function(x, y){
	var z = x * y;
	print(z);
	return z;
}

module.exports.div = function(x, y){
	var z = x / y;
	print(z);
	return z;
}