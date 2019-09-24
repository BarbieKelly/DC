var buyers = [
    {coins_inserted: ["nickel", "nickel", "dime"], selection: "Snickers"},
    {coins_inserted: ["quarter", "five dollars"], selection: "Chewing Gum"},
    {coins_inserted: ["peso", "dollar", "dollar"], selection: "Cookies"},
    {coins_inserted: ["quarter", "quarter"], selection: ""}
   ]

var items = [
    {item: "Snickers", price: 1.25},
    {item: "Popcorn", price: 1.00},
    {item: "Chewing Gum", price: 0.25},
    {item: "Nuts", price: 0.50},
    {item: "Cookies", price: 1.70},
    {item: "Cup Noodles", price: 2.25}
]

var acceptable_currencies = [
    {coin: "nickel", value: 0.05},
    {coin: "dime", value: 0.10},
    {coin: "quarter", value: 0.25},
    {coin: "dollar", value: 1.00},
]

var value = 0;
var price = 0;

// function tests the parameter coin to see if it is in the acceptable currencies list (true/false)
var coin_accepted = function(coin){
    var x = false;
    for (i=0; i<acceptable_currencies.length; i++) {
        if(coin == acceptable_currencies[i].coin){
            x =true;
        }
    }
    return x;
}

// function returns the value of the parameter coin from the list of coins in the acceptable currencies array
var get_coin_value = function(coin){
    for (z=0; z<acceptable_currencies.length; z++){
        if (coin == acceptable_currencies[z].coin){
            value = acceptable_currencies[z].value;
        }
    }   
}

// function tests to see if the selection is valid and returns true / false
var valid_selection = function (selection) {
    var valid_selection = false;
    for (var j = 0; j<items.length; j++){
        if(selection == items[j].item){
            valid_selection = true;
        }
    }
    return valid_selection
}

// function changes the value of variable price to the price of the parameter selection
var get_price = function (selection) {
    for (var j = 0; j<items.length; j++){
        if(selection == items[j].item){
            price = items[j].price;
        }
    }
}

var buy = function (coins_inserted, selection) {
    price = 0;
    total = 0;
    change = [];
    console.log(items);
    // loops through an array of coins inserted and adds the value of the coins to the total. if the currency is invalid
    // the coin is pushed to the change array
    for (var z=0; z<coins_inserted.length; z++){
        if(coin_accepted(coins_inserted[z])==1){
           get_coin_value(coins_inserted[z]);
            total += value;
            console.log("$" + total);
        }
        else {
            console.log("Currency is not accepted");
            change.push(coins_inserted[z]);
        }
    }
    // if the selection is valid, the price is found, and the price is tested against the total
    if (valid_selection(selection) == true) {
        get_price(selection);
        if(price < total) {
            change.push("$" + (total - price));
            change.push(selection);
            console.log(selection + ". . . . nice choice!");
            console.log("Thank you come again! Please take your change and your item");
            console.log(change);
        }
        else if (price == total){
            change.push(selection);
            console.log(selection + ". . . . nice choice!");
            console.log("Thank you come again! Please take your change and your item");
            console.log(change);
        }
        else {
            console.log("Error . . .  Not Enough Money For a " + selection + ". Please take your change");
            change.push("$" + total);
            console.log(change);
        }

    }
    else {
        console.log("Invalid Selection. Please take your change");
        change.push("$" + total);
        console.log(change);
    }
}

for (var x=0; x<buyers.length; x++){
    buy(buyers[x].coins_inserted, buyers[x].selection);
}


