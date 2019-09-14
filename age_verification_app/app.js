//App to test what activities users can do based on their age and the age restriction of that activity
// creates initial array of users
var users = [
	{name: "Sarah", age:32},
	{name: "Bob", age:19},
	{name: "Henry", age:22},
	{name: "Katie", age:9},
]
// creates two arrays of activites which are age restricted.
// adultActivities are those where you must be at least a certain age. 
// childActivities are those where you must be under a certain age. 
var adultActivities = [
	{name: "driving", activity: "to drive", function: driving = function(age) {return age >= 16;}},
	{name: "drinking", activity: "to drink", function: drinking = function(age) {return age >= 21;}}, 
	{name: "renting", activity: "to rent a car", function: rentingCar = function(age) {return age >= 25;}},
];

var childActivities = [
	{name: "playing", activity: "to play in the ball pit", function: playingAtMcDonalds = function (age) {return age <10;}}
];

// pushes Abilities to users. 
var givesAbilities = function() {
	for (let i = 0; i < users.length; i++) {
		for (let z = 0; z < adultActivities.length; z++) {
			if (adultActivities[z].function(users[i].age)){
				users[i][adultActivities[z].name] = users[i].name + " is old enough " + adultActivities[z].activity;
			} else {
				users[i][adultActivities[z].name] = users[i].name + " is not old enough " + adultActivities[z].activity;
			}
		}
		for (let z = 0; z < childActivities.length; z++) {
			if (childActivities[z].function(users[i].age)){
				users[i][childActivities[z].name] = users[i].name + " is young enough " + childActivities[z].activity;
			} else {
				users[i][childActivities[z].name] = users[i].name + " is  not young enough " + childActivities[z].activity;
			}
		}
	}
}
givesAbilities();

console.log(users);
