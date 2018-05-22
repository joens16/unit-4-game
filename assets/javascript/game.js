// create variables: win, loss, your points, random number picked by pc, variable for each Dragon Ball

var wins = 0;
var losses = 0;
var yourPoints = 0;
var computerNumber = 0;
//Dragon Ball variables
var dragonBall1 = 0;
var dragonBall2 = 0;
var dragonBall3 = 0;
var dragonBall4 = 0;

//Generate # 19-120 at random and update computerNumber in HTML
function generateComputerNumber(){
    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#target").text(computerNumber);
    $("#dragonpiccontainer").css('visibility', 'hidden');
}

//Reset game and update HTML
function reset(){
    yourPoints = 0;
    $("#myScore").text(yourPoints);
    computerNumber = 0;
    $("#dragonpiccontainer").css('visibility', 'hidden');
    
}

//Generate random #'s for each Dragon Ball (1-12)
function startGame(){
    $("#dragonpiccontainer").css('visibility', 'hidden');

    dragonBall1 = Math.floor(Math.random() * 12) + 1;
    // console.log(dragonBall1);

    dragonBall2 = Math.floor(Math.random() * 12) + 1;
    // console.log(dragonBall2);

    dragonBall3 = Math.floor(Math.random() * 12) + 1;
    // console.log(dragonBall3);

    dragonBall4 = Math.floor(Math.random() * 12) + 1;
    // console.log(dragonBall4);
}

//Compare yourPoints w/ computerNumber
function compareScore(yourPoints, computerNumber){ 
    if (yourPoints == computerNumber){
        wins++; //Add to wins if yourPoints and computerNumber are the same, reset, then call functions 
        $("#myWins").text(wins);
        reset();
        startGame();
        generateComputerNumber();
        alert('You won. Say hello to the Dragon!');
        $("#dragonpiccontainer").css('visibility', 'visible');
    }else if(yourPoints > computerNumber){
        losses++;
        $("#myLosses").text(losses);
        reset();
        startGame();
        generateComputerNumber();
        alert('You lost, Dragon will go to sleep now! ZzZZzzZ');
    }
}

$(document).ready(function() {   
    //Calling to generate #'s for dragon Balls and computer number
    startGame();
    generateComputerNumber();
    // $("#dragonpiccontainer").css('visibility', 'hidden');

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
   



