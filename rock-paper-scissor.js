/*
Player choses from: Rock, Paper or Scissor
Computer randomly draws from: Rock, Paper or Scissor
Evaluate winner:
    Rock wins vs Scissor
    Scissor wins vs Paper
    Paper wins vs Rock
*/

const CHOICES = ["Rock", "Paper", "Scissor"]
let scores = [0, 0]

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    console.log(
        "What do you choose for the next round?\n" +
        " 1 -> Rock\n 2 -> Paper\n 3 -> Scissor"
    );
    let playerPrompt = prompt("Enter 1, 2 or 3:");
    const VALID_INPUTS = ["1", "2", "3", "rock", "paper", "scissor"]
    if (VALID_INPUTS.indexOf(playerPrompt.toLowerCase()) == -1) {
        getPlayerChoice();
    } else {
        if (playerPrompt.length == 1) {
            return CHOICES[parseInt(playerPrompt) - 1];
        } else {
            return titleCaseString(playerPrompt);
        }

    }
}

function titleCaseString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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
    if (playerChoice === computerChoice) {
        console.log(`${playerChoice} and ${computerChoice} are equal: This round is a draw!`);
    } else if (playerWins(playerChoice, computerChoice)) {
        console.log(`${playerChoice} beats ${computerChoice}: You won this round!`);
        scores[0]++;
    } else {
        console.log(`${computerChoice} beats ${playerChoice}: You lost this round!`);
        scores[1]++;
    }
    console.log(`The current standings are:\n Player: ${scores[0]}\n Computer ${scores[1]}`);
}

function playGame() {
    console.log("Welcome to 'Rock Paper Scissor'");
    let playGame = true;
    while (playGame) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        playGame = confirm("Do you wanna play another round?");
    }
}

// playGame()
