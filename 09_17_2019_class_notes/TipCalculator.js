var score =0;
var tip = "";

var scoreCalculator = function(greet, bread, drink, food, check) {
	if (greet == true) {score +=1;}
	if (bread == true) {score +=1;}
	if (drink == true) {score +=1;}
	if (food == true) {score +=1;}
	if (check == true) {score +=1;}
}	

var tipCalculator = function() {
	if (score ==0) {tip = "0%";}
	if (score ==1) {tip = "2%";}
	if (score ==2) {tip = "4%";}
	if (score ==3) {tip = "7%";}
	if (score ==4) {tip = "10%";}
	if (score ==5) {tip = "15%";}
}

scoreCalculator(true, true, true, false, false);
tipCalculator();

console.log("The waiter earns a tip of " + tip);


