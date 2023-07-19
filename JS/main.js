const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function WinnerPlayerChecker(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if((playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Rock")){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = WinnerPlayerChecker(playerSelection, computerSelection);
    if(result == "Tie"){
        return "it's tie! no winner";
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playerChoice(){
    const valiDate = false;
    while(valiDate == false){
        const MyChoice = prompt("Choose either Rock, Paper, or Scissors: ");
        if(MyChoice == null){
            continue;
        }
        const ChoiceInLowerCase = MyChoice.toLowerCase();
        if(player.includes(ChoiceInLowerCase.options)){
            valiDate = true;
            return ChoiceInLowerCase;
        }
    }
}

function game(){
    console.log("Start Game!!!!!!!")
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(WinnerPlayerChecker(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if(WinnerPlayerChecker(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game Over!!!!!!!!!!!!")
    if(playerScore > computerScore){
        console.log("Congratulations!!!!!!!!!!!!!!! YOU HAVE WON THE GAME");
    }
    else if(computerScore > playerScore){
        console.log("Oops!!!!! YOU LOSE");
    }
    else{
        console.log("Woo!!!!!!!! IT'S TIE");
    }
}
game();