// create variables: win, loss, your point, random number picked by pc, variable for each Dragon Ball

var wins = 0;
var losses = 0;
var yourPoints = 0;
var computerNumber = 0;
var dragonBall1 = 0;
var dragonBall2 = 0;
var dragonBall3 = 0;
var dragonBall4 = 0;



// $(document).ready(function(){
//     $("#targetNumber").on(function() {
// });

// computer will generate random number for each Dragon Ball each time game resets between 1-12//
function startGame(){
    
    dragonBall1 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall1);


    dragonBall2 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall2);


    dragonBall3 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall3);


    dragonBall4 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall4);

}

    // computer will generate a random number at the start of the game after win or loss from 19 & 120 //
function fcomputerNumber(){
    return computerNumber = Math.floor(Math.random() * 101) + 19;
    console.log('dentro de la funcion'+computerNumber);
}

function reset(){
    yourPoints = 0;
    console.log('your points'+ yourPoints);
    computerNumber = fcomputerNumber;
    console.log('computer'+ computerNumber);

}

function compareScore(number1, number2){ 
    if (number1 == number2){
        wins++;
        $("#myWins").text(wins);
        reset();
        startGame();
        alert('You won');
    }else if(number1 < number2){
        losses++;
        $("#myLosses").text(losses);
        reset();
        startGame();
        alert('You lost');
    }
}

$(document).ready(function() {
    
    startGame();
    computerNumber = fcomputerNumber();

    $("#target").text(computerNumber);

//When click on ball, it adds to your total score
    $("#ballscontainer").on("click", "#ball1", function() {
    yourPoints += dragonBall1;
    compareScore(computerNumber, yourPoints);
    console.log(yourPoints);
    $("#myScore").text(yourPoints)
    }).on("click", "#ball2", function() {
    yourPoints += dragonBall2;
    compareScore(computerNumber, yourPoints);
    console.log(yourPoints);
    $("#myScore").text(yourPoints)
    }).on("click", "#ball3", function() {
    yourPoints += dragonBall3;
    compareScore(computerNumber, yourPoints);
    console.log(yourPoints);
    $("#myScore").text(yourPoints)
    }).on("click", "#ball4", function() {
    yourPoints += dragonBall4;
    compareScore(computerNumber, yourPoints);
    console.log(yourPoints);
    $("#myScore").text(yourPoints)
    });
});






// Your game will hide this amount until the player clicks a crystal

//If your points match the computer generated random number, you win. adds to win variable

//if your points go over the number the computer generated, you lose, adds to loss variable



