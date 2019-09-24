// We are going to have an array of items.
// We are going to create a function with two parameters.
// The first parameter will be an array to search
// The second parameter will be a value to find
// Inside the function, use a for loop to loop through the array
// and return true if it finds the second parameter inside the array

var items = ["cat", "dog", "snake", "ferret", "big foot"];

var findItem = "big foot";


var findingItemInArray = function(haystack, needle = findItem) {
	for(var i=0; i<haystack.length; i++) {
		if(needle == haystack[i]) {
			return true;
			console.log("true");
		}
	}
	return false;
	console.log("false");
}

console.log(findingItemInArray(items, findItem));
