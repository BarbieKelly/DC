var container = document.getElementById("container");
var Player_1_Play_Area = document.getElementById("Player_1_Play_Area");
var Computer_Play_Area = document.getElementById("Computer_Play_Area");
var Player_1_Score_Area = document.getElementById("Player_1_Score_Area");
var Computer_Score_Area = document.getElementById("Computer_Score_Area");
var play_area = document.getElementsByClassName("play_area");
var rockButton = document.getElementById("rock_button");
var paperButton = document.getElementById("paper_button");
var scissorsButton = document.getElementById("scissors_button");
var clearButton = document.getElementById("clear_button");

var currentPlayer = "Player 1";
var Player_1_choice = 0;
var currentComputerChoice = 0;
var winner = "";
var Player_1_Score = 0;
var Computer_Score = 0;

Player_1_Score_Area.innerHTML = Player_1_Score;
Computer_Score_Area.innerHTML = Computer_Score;

var clearScreen = function (){
    Player_1_Play_Area.innerHTML = "";
    Computer_Play_Area.innerHTML = "";
}


var rockPaperScissors = function(){
    play_area.innerHTML = "";
    var interval = 500;

    setTimeout(function(){
        getPiece("Player 1", "rock");
        getPiece("Computer", "rock");
    }, interval);

    setTimeout(function(){
        clearScreen();
    }, interval*2);

    setTimeout(function(){
        getPiece("Player 1", "paper");
        getPiece("Computer", "paper");
    }, interval*3 );

    setTimeout(function(){
        clearScreen();
    }, interval*4 );

    setTimeout(function(){
        getPiece("Player 1", "scissors");
        getPiece("Computer", "scissors");
    }, interval*5 );

    setTimeout(function(){
        clearScreen();
    }, interval*6 );
}

var getPiece = function (player, choice) {
    var piece = document.createElement("i");
    if (choice == "rock") {
        piece.className = "far fa-9x fa-hand-rock";
    }
    else if (choice == "paper") {
        piece.className = "far fa-9x fa-hand-paper";
    }
    else {
        piece.className = "far fa-9x fa-hand-scissors";
    }
    if (player == "Player 1") {
        Player_1_Play_Area.appendChild(piece);
    }
    else {
        Computer_Play_Area.appendChild(piece);
    }
}


var ComputerChoice = function () {
    currentComputerChoice = Math.floor(Math.random*3);
}

var ComputerRoll = function() {
    ComputerChoice();
    if (currentComputerChoice == 0) {
        getPiece("Computer", "rock")
    }

    else if (currentComputerChoice == 1){
        getPiece("Computer", "paper")
    }

    else {
        getPiece("Computer", "scissors")
    }
}


var play = function (){
    clearButton.onclick = function(){
        Player_1_Score = 0;
        Computer_Score = 0;
        Player_1_Score_Area.innerHTML = Player_1_Score;
        Computer_Score_Area.innerHTML = Computer_Score;
    }
    
    rockButton.onclick = function(){
        rockPaperScissors();

        setTimeout(function(){
            getPiece("Player 1", "rock");
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
            getPiece("Player 1", "paper");
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
            getPiece("Player 1", "scissors");
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

        Player_1_Score_Area.innerHTML = Player_1_Score;
        Computer_Score_Area.innerHTML = Computer_Score;
    }
    
    var determineWinnerFunction =function (){
        if (Player_1_choice == 0){

            if(currentComputerChoice == 1){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }

            else if (currentComputerChoice == 2){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }

            else {
                alert("YOU TIE!");
            }
        }

        else if (Player_1_choice == 1){

            if(currentComputerChoice == 0){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }

            else if (currentComputerChoice == 2){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }

            else {
                alert("YOU TIE!");
            }
        }

        else {
            if(currentComputerChoice == 0){
                winner = "Computer";
                givePoints("Computer");
                alert("YOU LOSE!");
            }

            else if (currentComputerChoice == 1){
                winner = "Player 1";
                givePoints("Player 1");
                alert("YOU WIN!");
            }

            else {
                alert("YOU TIE!");
            }
        }
        clearScreen();
    }
}

play();    