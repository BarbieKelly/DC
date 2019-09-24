//in this exercise, we are going to find an array that has duplicate values
// first loop goes through all items in the array
// second loop that that checks all of the items against the index of the first loop

var items = ["cat", "dog", "ferret", "alien", "dog", "bird", "ferret"];

for (z=1; z<items.length; z++) {
	if (items.indexOf(items[z]) < z && items.indexOf(items[z]) !== -1){
		console.log(items[z]);
	}
}



