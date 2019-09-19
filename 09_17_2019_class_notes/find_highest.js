//step 1 - create a for loop that creates an array of 100 random numbers
// random(); 
// step 2 - find the smallest number


var myArray = [];
for (i=0; i<100; i++) {
	myArray.push(Math.random());
}

var smallestNumber = myArray[0];

for (i=0; i<myArray.length; i++) {
	if (myArray[i] < smallestNumber) {
		smallestNumber = myArray[i];
	}
}

console.log(smallestNumber);
