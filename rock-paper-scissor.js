/*
Player choses from: Rock, Paper or Scissor
Computer randomly draws from: Rock, Paper or Scissor
Evaluate winner:
    Rock wins vs Scissor
    Scissor wins vs Paper
    Paper wins vs Rock
*/

// const CHOICES = ["Rock", "Paper", "Scissor"]
// let scores = [0, 0]

// function getComputerChoice() {
//     return CHOICES[Math.floor(Math.random() * 3)];
// }

// function getPlayerChoice() {
//     console.log(
//         "What do you choose for the next round?\n" +
//         " 1 -> Rock\n 2 -> Paper\n 3 -> Scissor"
//     );
//     let playerPrompt = prompt("Enter 1, 2 or 3:");
//     const VALID_INPUTS = ["1", "2", "3", "rock", "paper", "scissor"]
//     if (VALID_INPUTS.indexOf(playerPrompt.toLowerCase()) == -1) {
//         getPlayerChoice();
//     } else {
//         if (playerPrompt.length == 1) {
//             return CHOICES[parseInt(playerPrompt) - 1];
//         } else {
//             return titleCaseString(playerPrompt);
//         }
//     }
// }

// function titleCaseString(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// function playerWins(playerChoice, computerChoice) {
//     switch (true) {
//         case (playerChoice === "Rock" && computerChoice === "Scissor"):
//             return true;
//         case (playerChoice === "Scissor" && computerChoice === "Paper"):
//             return true;
//         case (playerChoice === "Paper" && computerChoice === "Rock"):
//             return true;
//     }
// }

// function playRound(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         console.log(`${playerChoice} and ${computerChoice} are equal: This round is a draw!`);
//     } else if (playerWins(playerChoice, computerChoice)) {
//         console.log(`${playerChoice} beats ${computerChoice}: You won this round!`);
//         scores[0]++;
//     } else {
//         console.log(`${computerChoice} beats ${playerChoice}: You lost this round!`);
//         scores[1]++;
//     }
//     console.log(`The current standings are:\n Player: ${scores[0]}\n Computer ${scores[1]}`);
// }

// function playGame() {
//     console.log("Welcome to 'Rock Paper Scissor'");
//     let playGame = true;
//     while (playGame) {
//         playerChoice = getPlayerChoice();
//         computerChoice = getComputerChoice();
//         playRound(playerChoice, computerChoice);
//         playGame = confirm("Do you wanna play another round?");
//     }
// }

// playGame()


/********************************/
/*      Revision to add UI      */
/****************************** */


console.log("Welcome to 'Rock Paper Scissor'");

let playerScore = 0
let computerScore = 0
let round = 0

// get user click input on rock/paper/scissor divs
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
rock.addEventListener("click", playGame)
paper.addEventListener("click", playGame)
scissor.addEventListener("click", playGame)

function playGame(e) {
    console.log("mouseEvent", e)
    console.log("this.id", this.id)
    const playerChoice = titleCaseString(this.id)
    determineWinner(playerChoice)
    if ((playerScore >= 5 || computerScore >= 5) && playerScore != computerScore) {
        playerScore = 0
        computerScore = 0
        round = 0
    }
    updateScoreboard()
    round++
}

function titleCaseString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function determineWinner(playerChoice) {
    const computerChoice = getComputerChoice()
    if (playerChoice === computerChoice) {
        console.log(`${playerChoice} and ${computerChoice} are equal: This round is a draw!`);
    } else if (playerWins(playerChoice, computerChoice)) {
        console.log(`${playerChoice} beats ${computerChoice}: You won this round!`);
        playerScore++;
    } else {
        console.log(`${computerChoice} beats ${playerChoice}: You lost this round!`);
        computerScore++;
    }
    console.log(`The current standings are:\n Player: ${playerScore}\n Computer ${computerScore}`);
}

function getComputerChoice() {
    return ["Rock", "Paper", "Scissor"][Math.floor(Math.random() * 3)];
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

function updateScoreboard() {
    let _playerScore = document.getElementById("score-player")
    let _computerScore = document.getElementById("score-computer")
    let _round = document.getElementById("round")
    _playerScore.textContent = `You: ${playerScore}`
    _computerScore.textContent = `AI: ${computerScore}`
    _round.textContent = `Scores - Round: ${round}`
}
