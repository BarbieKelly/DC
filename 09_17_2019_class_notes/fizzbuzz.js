//in this assignment, we are going to have a for loop that iterates over 20 numbers
//if the number at the current i is divisible by both 2 & 3, console.log("FizzBuzz");
//if the number at the current i is only divisible by 2, console.log("Fizz");
//if the number at the current i is only divisible by 3, console.log("Buzz");

//For division (if divisible), its if(number%other_number);

for (i=1; i<=20; i++) {
	if(i%2 == 0 && i%3 == 0) {
		console.log(i + ", Fizzbuzz");
	}
	else if(i%2 == 0) {
		console.log(i + ", Fizz");
	}
	else if(i%3 == 0) {
		console.log(i + ", Buzz");
	}
	else {
		console.log(i);
	}
}
