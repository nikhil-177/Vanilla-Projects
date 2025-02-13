
const playerDisplay = document.querySelector('#player-display')
const computerDisplay = document.querySelector('#computer-display')
const resultDisplay = document.querySelector('#result-display')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
let ps = 0;
let cs = 0;


let choice = ["rock","paper","scissors"];

function playerChoice(playerchoice){
   
    const computerChoice = choice[Math.floor(Math.random() * 3)]    
    let result = "";
    if(playerchoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerchoice){
            case "rock" :
                result = (computerChoice == "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper" :
                result = (computerChoice == "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors" :
                result = (computerChoice == "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    resultDisplay.textContent = result;
    playerDisplay.textContent = `Player : ${playerchoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.classList.remove("greentext","redtext")

    switch(result){
        case "YOU WIN!" :
            resultDisplay.style.color = 'hsla(127, 100%, 25%, 0.818)';
            ps++;
            playerScore.textContent = `Player: ${ps}`;
            break;
        case "YOU LOSE!" :
            resultDisplay.style.color = 'tomato';
            cs++;
            computerScore.textContent = `Computer: ${cs}`;
            break;
        case "IT'S A TIE!" :
            resultDisplay.style.color = 'white';
            break;
    }

}
