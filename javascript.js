function getComputerChoice () {
    random = Math.random();
    if( random >= 0 && random < 0.33 )
    {
        return "rock";
    }

    else if ( random >= 0.33 && random < 0.66 )
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice () {
    let input = prompt("Enter your choice between rock,paper and scissors");
    return input;
}

let humanScore = 0;
let computerScore = 0;
function playRound () {
    let humanselection = getHumanChoice().toLowerCase();
    let computerselection = getComputerChoice().toLowerCase();
    if ( humanselection == computerselection)
    { 
        return "Game tie!";
    }
     else if ( humanselection == "rock" && computerselection == "paper" )
     {
        computerScore++;
        return "You lose! Paper beats Rock";
     }
     else if ( humanselection == "paper" && computerselection == "rock" )
     {
         humanScore++;
        return "You win! Paper beats Rock";
     }
     else if ( humanselection == "rock" && computerselection == "scissors" )
     {
        humanScore++;
        return "You win! Rock beats Scissors";
     }
     else if( humanselection == "scissors" && computerselection == "rock" )
     {
        computerScore++;
        return "You lose! Rock beats Scissors";
     }
     else if ( humanselection == "paper" && computerselection == "scissors" )
     {
        computerScore++;
        return  "You lose! Scissors beats Paper";
     }
     else if ( humanselection == "scissors" && computerselection == "paper" )
     {
        humanScore++;
        return "You win! Scissors beats Paper";
     }
}
function playGame () {
     let play = playRound();
     console.log(play);
}

console.log(playGame()); 
console.log(playGame()); 
console.log(playGame()); 
console.log(playGame()); 
console.log(playGame()); 
if (humanScore > computerScore )
{
    console.log("You win the Game");
}
else if ( humanScore < computerScore )
{ 
    console.log("You lose the Game");
}
else 
{
    console.log("Tie!");
}