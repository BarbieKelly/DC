//App to test what activities users can do based on their age and the age restriction of that activity
// users Sarah (32), Bob (19), Henry (22), Katie (9)

var user1 = {name: "Sarah", age:32}
var user2 = {name: "Bob", age:19}
var user3 = {name: "Henry", age:22}
var user4 = {name: "Katie", age:9}
var users = [user1, user2, user3, user4]

var driving = function (user) {
	return user.age >= 16;	
}

var drinking = function (user) {
	return user.age >= 21;
}

var rentCar = function (user) {
	return user.age >= 25;
}

var playMcDonalds = function (user) {
	return user.age < 10;
}


var toPrint = function() {
	for (let i = 0; i < 4; i++) {
		if (driving(users[i])) {
			return users[i].name + " can drive";
		}
	}
}
console.log(toPrint());
