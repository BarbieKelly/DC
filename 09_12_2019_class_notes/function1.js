// The formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA*Gross Margin)/CCR
// ARPA: Average Revenue per account (The average MRR across all of your active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extremely high in Sales
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.


var ltvFunction = function (ARPA, GrossMargin, CCR) {

	var LTV = (ARPA*GrossMargin)/CCR;
	return LTV;

}

// circleAreaFunction returns the area of a circle in square feet for a circle with a parameter of radius in square feet
var circleAreaFunction = function(radius) {
	var pi = 3.14;
	var area = pi*radius*radius;
	return area;
}
console.log("Barbie thinks the area should be " + circleAreaFunction (2) + " square feet.");
console.log("Nichola thinks the area should be " + circleAreaFunction (3) + " square feet.");


