// The formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA*Gross Margin)/CCR
// ARPA: Average Revenue per account (The average MRR across all of your active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extremely high in Sales
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.

var ARPA = 1250;

var GrossMargin = 8;

var CCR = 0.25;

var LTV = (ARPA*GrossMargin)/CCR;

console.log(LTV);

