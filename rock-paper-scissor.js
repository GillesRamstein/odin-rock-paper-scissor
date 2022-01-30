/*
Player choses from: Rock, Paper or Scissor
Computer randomly draws from: Rock, Paper or Scissor
Evaluate winner:
    Rock wins vs Scissor
    Scissor wins vs Paper
    Paper wins vs Rock
*/

const CHOICES = ["Rock", "Paper", "Scissor"]

function getComputerChoice () {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function getPlayerChoice () {
    console.log(
        "What do you choose for the next round?\n" +
        " 1 -> Rock\n 2 -> Paper\n 3 -> Scissor"
    );
    let playerPrompt = prompt("Enter 1, 2 or 3:");
    if (["1", "2", "3"].indexOf(playerPrompt) == -1) {
        console.log("Only valid choices are 1, 2 or 3!");
        getPlayerChoice();
    } else {
        return CHOICES[parseInt(playerPrompt) - 1];
    }
}

function playerWins(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice === "Rock" && computerChoice === "Scissor"):
            return true;
        case (playerChoice === "Scissor" && computerChoice === "Paper"):
            return true;
        case (playerChoice === "Paper" && computerChoice === "Rock"):
            return true;
    }
}

function playRound(playerChoice, computerChoice) {
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("No winner, no loser. This round is a draw!");
    } else if (playerWins(playerChoice, computerChoice)) {
        console.log("You won this round!");
    } else {
        console.log("You lost this round!");
    }
}

function playGame () {
    console.log("Welcome to 'Rock Paper Scissor'");
    let playGame = true;
    while (playGame) {
        playerChoice =  getPlayerChoice()
        computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice);
        playGame = confirm("Do you wanna play another round?");
    }
}

playGame()