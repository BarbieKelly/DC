//Vending Machine Group Exercise

//When a person is buying from the vending machine, the following happen:
//- A list of items is shown to them with the prices
//- They insert money into the machine based on the allowed currency above
//- They then select their item and the following can happen:
//-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
//-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
//-- If they do not choose an item, all the money can be returned to them

//Your task is to create a simulation in which 5 different buyers attempt to buy

//. The amount tendered should be stored. This is important because the amount tendered is going to:
//     - Going to be compared against the cost of the item to determine if the item can be purchased
//     - Going return the different between the amount tendered vs cost of the item
//     -  Reset for each new person

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

var coin_accepted = function(coin){
    var x = false;
    for (i=0; i<acceptable_currencies.length; i++) {
        if(coin == acceptable_currencies[i].coin){
            x =true;
        }
    }
    return x;
}


var get_coin_value = function(coin){
    for (z=0; z<acceptable_currencies.length; z++){
        if (coin == acceptable_currencies[z].coin){
            value = acceptable_currencies[z].value;
        }
    }   
}

var buy = function(coins_inserted, selection){
    total = 0;
    change = [];
    console.log(items);
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
    var valid_selection = false;
    var price = 0;
    for (var j = 0; j<items.length; j++){
        if(selection == items[j].item){
            valid_selection = true;
            price = items[j].price;
            if(price < total) {
                change.push("$" + (total - price));
                change.push(selection);
                console.log(selection + ". . . . nice choice!");
            }
            else if (price == total){
                change.push(selection);
                console.log(selection + ". . . . nice choice!");
            }
            else {
                console.log("Error . . .  Not Enough Money For a " + selection);
                change.push("$" + total);
            }

        }
    }
    if(valid_selection == false) {
        console.log("Invalid Selection");
        change.push("$" + total);
    }
    console.log("Thank you, come again! See below for your change and your item");
    console.log(change);
}

var buyers = [
    {coins_inserted: ["nickel", "nickel", "dime"], selection: "Snickers"},
    {coins_inserted: ["quarter", "five dollars"], selection: "Chewing Gum"},
    {coins_inserted: ["peso", "dollar", "dollar"], selection: "Cookies"},
    {coins_inserted: ["quarter", "quarter"], selection: ""}
   ]
   
//for(i=0; i<buyers.length; i++) {
  //  buy(buyers[i].coins_inserted, buyers[i].selection);
//}

var loop_buyers = function(){
    for (var x=0; x<buyers.length; x++){
        buy(buyers[x].coins_inserted, buyers[x].selection);
    }
}

loop_buyers();
