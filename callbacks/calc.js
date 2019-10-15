var add = function(num1, num2) {
	return num1 + num2;
}

var subtract = function (num1, num2) {
	return num1 - num2;
}

var calculator = function (num1, num2, operand) {
	return operand(num1,num2);
}

var result = calculator(7, 10, add);
console.log(result);

var result = calculator(3, 2, function(num1, num2) {
	return num1 / num2;
});

console.log(result);

////////////////////////////////////////////////////////////////////
// write function that takes in 2 numbers, multiplies it, and find remainders
// and finds remainder if divided by 5

var result = calculator(3, 3, function (num1, num2) {
	return (num1*num2)%5;
})

console.log(result);

/// use add funciton and then find square root


var squareRootResult = Math.sqrt(calculator(5,4,add)); 
console.log(squareRootResult);