let userInput;
let userCount = 0;
let computerCount = 0;
let rounds;
let i = 0;
let logResult = "";
let choice = "";

function setRounds(){
    rounds = document.getElementById("noOfRounds").value;
    rounds = Number(rounds);
    console.log(rounds);
    document.getElementById("prep").style.display = "none";
    document.getElementById("game").style.display = "block";
    startGame();
}

function startGame(){
    i++;
    let displayRoundNumber = document.getElementById("roundNo");
    let userPoints = document.getElementById("userScore");
    let computerPoints = document.getElementById("computerScore");
    let logElement = document.getElementById("log");
    let choiceElement = document.getElementById("choice");
    displayRoundNumber.innerHTML = i;
    userPoints.innerHTML = userCount;
    computerPoints.innerHTML = computerCount;
    if(i>0){
        logElement.innerHTML = logResult;
        choiceElement.innerHTML = choice;
    }
    logResult = "";
}

function endGame(){
    let winner = document.getElementById("top");
    document.getElementById("bun").style.display="none";
    if(userCount>computerCount){
        winner.innerHTML="WINNER WINNER CHICKEN DINNER";
    }
    else if(userCount<computerCount){
        winner.innerHTML="BETTER LUCK NEXT TIME";
    }
    else
        winner.innerHTML="GAME TIED";
    document.getElementById("a").style.display="block";
}

function randomChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber;
}

function userStone(){
    userInput = 0;
    play();
    if(i<=rounds)
        startGame();
    if(i===rounds+1)
        endGame();
}

function userPaper(){
    userInput = 1;
    play();
    if(i<=rounds)
        startGame();
    if(i===rounds+1)
        endGame();
}

function userScissors(){
    userInput = 2;
    play();
    if(i<=rounds)
        startGame();
    if(i===rounds+1)
        endGame();
}

function getString(num){
    if(num==0)
        return "Stone";
    if(num==1)
        return "Paper";
    if(num==2)
        return "Scissors";
}

function play(){
    let computer = randomChoice();
    choice = "Computer : " + getString(computer) + " | User : " + getString(userInput);
    if(userInput==computer){
        tied();
    }
    else if(Math.abs(userInput-computer) == 1){
        if(userInput<computer)
            computerWins();
        else 
            userWins();
    }
    else{
        if(userInput<computer)
            userWins();
        else 
            computerWins();
    }
}

function computerWins(){
    console.log("Computer wins");
    logResult = "Computer Won | Computer +2";
    computerCount+=2;
    console.log(computerCount);
}

function userWins(){
    console.log("User wins");
    logResult = "User Won | User +2";
    userCount+=2;
    console.log(userCount);
}

function tied(){
    console.log("Round Tied");
    logResult = "Round Tied | Computer +1 | User +1";
    userCount++;
    computerCount++;
}