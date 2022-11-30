const x = prompt("Hi player, please enter your choices");
const userChoice = x.toLowerCase();

function validate(word) {
    const choices = ["rock", "paper", "scissors"];

    if(choices.includes(word)) {
        return(word)
    }

    else {
        const correct = prompt("rock, paper or scissors");
        return(validate(correct));
    }
}

const playerSelection = validate(userChoice);
console.log(playerSelection);

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

    const output = "";

    if(master[0] === "p" && sleeve[0] === "s") {
        output.concat(`You lose, ${sleeve} beats ${master}!`);
    }

    else if(master[0] < sleeve[0]) {
        output.concat(`You win, ${master} beats ${sleeve}!`);
    }

    else if(master[0] === sleeve[0]) {
        output.concat(`Draw, you chose the same!`)
    }

    else {
        output.concat(`You lose,  ${sleeve} beats ${master}!`);
    }
    return(output);
};

console.log(playRound(playerSelection, computerSelection));

/*
function game() {
    const roundOf = 5;
    let result = roundOf
    for(let i = roundOf; i >= 1; i--) {
        console.log(playRound(playerSelection, computerSelection));
        const check = playRound(playerSelection, computerSelection);
        choose();

        if("lose" in check || "Draw" in check) {
            result -= 1;
        }
    }
    return(result);
    console.log(result);
};
*/
