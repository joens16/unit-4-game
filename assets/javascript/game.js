// create variables: win, loss, your points, random number picked by pc, variable for each Dragon Ball

var wins = 1;
var losses = 0;
var yourPoints = 0;
var computerNumber = 0;

var dragonBall1 = 0;
var dragonBall2 = 0;
var dragonBall3 = 0;
var dragonBall4 = 0;

//Generate # 19-120 at random and update computerNumber in HTML
function generateComputerNumber(){
    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#target").text(computerNumber);
}

//Reset game and update HTML
function reset(){
    yourPoints = 0;
    $("myScore").text(yourPoints);
    computerNumber = 0;
}

//Generate random #'s for each Dragon Ball (1-12)
function startGame(){
    
    dragonBall1 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall1);


    dragonBall2 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall2);


    dragonBall3 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall3);


    dragonBall4 = Math.floor(Math.random() * 12) + 1;
    console.log(dragonBall4);

    reset();

}

//Compare yourPoints w/ computerNumber
function compareScore(number1, number2){ 
    if (number1 == number2){
        wins++; //Add to wins if yourPoints and computerNumber are the same, reset, then call functions 
        $("#myWins").text(wins);
        reset();
        startGame();
        generateComputerNumber();
        alert('You won');
    }else if(number1 > number2){
        losses++;
        $("#myLosses").text(losses);
        reset();
        startGame();
        generateComputerNumber();
        alert('You lost');
    }
}

$(document).ready(function() {
    
    //Calling to generate #'s for dragon Balls and computer number
    startGame();
    generateComputerNumber();

  

//When click on ball, it adds to your total score
    $("#ballscontainer").on("click", "#ball1", function() {
    yourPoints += dragonBall1;
        
        //HTML -updating 
        $("#myScore").text(yourPoints);
        compareScore(yourPoints, computerNumber);//calling function to compare values
    });

    $("#ballscontainer").on("click", "#ball2", function() {
    yourPoints += dragonBall2;

        $("#myScore").text(yourPoints);
        compareScore(yourPoints, computerNumber);//calling function to compare values
    });

    $("#ballscontainer").on("click", "#ball3", function() {
    yourPoints += dragonBall3;

        $("#myScore").text(yourPoints);
        compareScore(yourPoints, computerNumber);//calling function to compare values
    });

    $("#ballscontainer").on("click", "#ball4", function() {
    yourPoints += dragonBall4;

        $("#myScore").text(yourPoints);
        compareScore(yourPoints, computerNumber);//calling function to compare values
    });
});
   



