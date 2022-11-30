const userChoice = prompt("Hi, your turn");
let playerSelection = userChoice.toLowerCase();


function getComputerChoice () {

    const computerChoice = Math.floor(Math.random() * 9) + 1;

    if(computerChoice <= 3) {
        return("rock");
    }

    else if(computerChoice > 3 && computerChoice <= 6) {
        return("scissors");
    }
    
    else {
        return("paper")
    };
};

let computerSelection = getComputerChoice();

function playRound(master, sleeve) {

    if(master[0] === "p" && sleeve[0] === "s") {
        return(`You lose, ${sleeve} beats ${master}`);
    }

    else if(master[0] < sleeve[0]) {
        return(`You win, ${master} beats ${sleeve}`);
    }

    else {
        return(`You lose,  ${sleeve} beats ${master}`);
    }
};

console.log(playRound(playerSelection, computerSelection));

    
