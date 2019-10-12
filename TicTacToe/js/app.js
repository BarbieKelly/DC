var boardElement = document.getElementById("board");
var playerOne = document.getElementById("player_1_button");
var playerTwo = document.getElementById("player_2_button");
var boardData = [];
var currentPlayer = "Player 1";
var points = 0;
var playerOneScore = document.getElementById("player_1_score");
var playerTwoScore = document.getElementById("player_2_score");
var playerOneCounter = 0;
var playerTwoCounter = 0;
var resetButton = document.getElementById("resetButton");

var makeBoard = function(){
    playerOneScore.innerHTML = playerOneCounter;
    playerTwoScore.innerHTML = playerTwoCounter;
    playerOne.className = "btn btn-primary";
    playerTwo.className = "btn btn-secondary";
    for(var row = 0; row < 3; row++){
        var rowElement = document.createElement("div");
        rowElement.className ="row";
        boardData[row] = [];
        for (var column=0; column < 3; column++){
            var columnElement = document.createElement("div");
            columnElement.className = "col text-center align-middle border board_piece"; 
            columnElement.id = row +"-" + column; 
            columnElement.innerHTML = "Row " + row + " Column " + column; 
            columnElement.onclick = function(){
                var idString = this.id;
                var idArray= idString.split("-");
                console.log(idArray);
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()){   
                        alert("You cannot change this piece");
                }
                else if (currentPlayer == "Player 1") {
                    this.innerHTML = getXPiece();
                    checkWin(idArray[0], idArray[1], getXPiece());
                    currentPlayer = "Player 2";
                    playerOne.className = "btn btn-secondary";
                    playerTwo.className = "btn btn-primary";
                } else if (currentPlayer == "Player 2"){
                    this.innerHTML = getOPiece();
                    checkWin(idArray[0], idArray[1], getOPiece());
                    currentPlayer = "Player 1";
                    playerOne.className = "btn btn-primary";
                    playerTwo.className = "btn btn-secondary";
                }
            }
        boardData[row][column] = columnElement;
        rowElement.appendChild(columnElement);    
        }
    boardElement.appendChild(rowElement);
    }
}    

var getXPiece = function(){
    return "X";
}

var getOPiece = function (){
    return "O";
}

var checkWinVertical = function(row, column, piece){
    if(boardData[row-2] && boardData[row-2][column] && boardData[row-2][column].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row-1] && boardData[row-1][column] && boardData[row-1][column].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row+1] && boardData[row+1][column] && boardData[row+1][column].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row+1] && boardData[row+2][column] && boardData[row+2][column].innerHTML == piece){
        points++;
        console.log(points);
    }
}
var checkWinHorizontal = function(row, column, piece){
    if(boardData[row] && boardData[row][column-2] && boardData[row][column-2].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row] && boardData[row][column-1] && boardData[row][column-1].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row] && boardData[row][column+1] && boardData[row][column+1].innerHTML == piece){
        points++;
        console.log(points);
    }
    if(boardData[row] && boardData[row][column+2] && boardData[row][column+2].innerHTML == piece){
        points++;
        console.log(points);
    }
}


var checkWin = function(row, column, piece){
    points = 0;
    checkWinVertical(row, column, piece);
    checkWinHorizontal(row, column, piece);
    if (points >=2) {
        alert("YOU WIN " + currentPlayer);
        if(currentPlayer == "Player 1") {
            playerOneCounter += 1;
        }
        else if(currentPlayer == "Player 2") {
            playerTwoCounter += 1;
        }
        boardElement.innerHTML = "";
        boardData = [];
        makeBoard();
    }
}


resetButton.onclick = function() {
    boardElement.innerHTML = "";
        boardData = [];
        makeBoard();
}


makeBoard();
