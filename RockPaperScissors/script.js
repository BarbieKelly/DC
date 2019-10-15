var container = document.getElementById("container");
var Player_1_Score_area = document.getElementById("Player_1_Score");
var Computer_Score_area = document.getElementById("Computer_Score");
var Player_1_Play_Area = document.getElementById("Player_1_Play_Area");
var Computer_Play_Area = document.getElementById("Computer_Play_Area");
var play_area = document.getElementsByClassName("play_area");
var currentPlayer = "Player 1";
var Player_1_Score = 0;
var Computer_Score = 0;
var Player_1_choice = 0;
var currentComputerChoice = 0;
var winner = "";
var rockButton = document.getElementById("rock_button");
var paperButton = document.getElementById("paper_button");
var scissorsButton = document.getElementById("scissors_button");

var clearScreen = function (){
    Player_1_Play_Area.innerHTML = "";
    Computer_Play_Area.innerHTML = "";
}

var rockPaperScissors = function(){
    play_area.innerHTML = "";
    setTimeout(function(){
        getRock("Player 1");
        getRock("Computer");
    }, 500);
    setTimeout(function(){
        clearScreen();
    }, 1000);
    setTimeout(function(){
        getPaper("Player 1");
        getPaper("Computer");
    }, 1500);
    setTimeout(function(){
        clearScreen();
    }, 2000);
    setTimeout(function(){
        getScissors("Player 1");
        getScissors("Computer");
    }, 2500);
    setTimeout(function(){
        clearScreen();
    }, 3000);
}


var getRock = function(player){
    var rock = document.createElement("i");
    rock.className ="far fa-hand-rock fa-9x";
    if (player =="Player 1"){
        Player_1_Play_Area.appendChild(rock);
    }
    else {
        Computer_Play_Area.appendChild(rock);
    }
}

var getPaper = function(player){
    var paper = document.createElement("i");
    paper.className ="far fa-hand-paper fa-9x";
    if (player =="Player 1"){
        Player_1_Play_Area.appendChild(paper);
    }
    else {
        Computer_Play_Area.appendChild(paper);
    }
}

var getScissors = function(player){
    var scissors = document.createElement("i");
    scissors.className ="far fa-hand-scissors fa-9x";
    if (player =="Player 1"){
        Player_1_Play_Area.appendChild(scissors);
    }
    else {
        Computer_Play_Area.appendChild(scissors);
    }
}

var ComputerChoice = function () {
    var x = Math.random();
    if(x <= 0.33){
        currentComputerChoice = 0;
    }
    else if (x >= 0.66){
        currentComputerChoice = 1;
    }
    else {
        currentComputerChoice = 2;
    }
}

var ComputerRoll = function() {
    ComputerChoice();
    if (currentComputerChoice == 0) {
        getRock("Computer")
    }
    else if (currentComputerChoice == 1){
        getPaper("Computer")
    }
    else {
        getScissors("Computer")
    }
}


var play = function (){
    Player_1_Score_area.innerHTML = Player_1_Score;
    Computer_Score_area.innerHTML = Computer_Score;

    rockButton.onclick = function(){
        rockPaperScissors();
        setTimeout(function(){
            getRock("Player 1");
            Player_1_choice = 0;
            ComputerRoll();
        }, 3500);
        setTimeout(function(){
            determineWinnerFunction();
        }, 5000);
    }
    
    paperButton.onclick = function(){
        rockPaperScissors();
        setTimeout(function(){
            getPaper("Player 1");
            Player_1_choice = 1;
            ComputerRoll();
        }, 3500);
        setTimeout(function(){
            determineWinnerFunction();
        }, 5000);
    }
    
    scissorsButton.onclick = function(){
        rockPaperScissors();
        setTimeout(function(){
            getScissors("Player 1");
            Player_1_choice = 2;
            ComputerRoll();
        }, 3500);
        setTimeout(function(){
            determineWinnerFunction();
        }, 5000);
    }

    var givePoints = function(winningPlayer){
        if (winningPlayer == "Player 1") {
            Player_1_Score += 1;
        }
        if (winningPlayer == "Computer") {
            Computer_Score += 1;
        }
        console.log("Player 1 Score is " + Player_1_Score);
        console.log("Computer Score is " + Computer_Score);
    }
    
    var determineWinnerFunction =function (){
        if (Player_1_choice == 0){
            if(currentComputerChoice == 1){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }
            if (currentComputerChoice == 2){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }
            if (currentComputerChoice == 0) {
                alert("YOU TIE!");
            }
        }
        else if (Player_1_choice == 1){
            if(currentComputerChoice == 0){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }
            if (currentComputerChoice == 2){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }
            if (currentComputerChoice == 1) {
                alert("YOU TIE!");
            }
        }
        else {
            if(currentComputerChoice == 0){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }
            if (currentComputerChoice == 1){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }
            if (currentComputerChoice == 2) {
                alert("YOU TIE!");
            }
        }
        clearScreen();
    }
    
}

play();