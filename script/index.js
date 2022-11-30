const userChoice = prompt("Hi, your turn");
const playerSelection = userChoice.toLowerCase();


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

const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
