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
        return(`You lose, ${sleeve} beats ${master}!`);
    }

    else if(master[0] < sleeve[0]) {
        return(`You win, ${master} beats ${sleeve}!`);
    }

    else if(master[0] === sleeve[0]) {
        return(`it's a draw, you chose the same!`);
    }

    else {
        return(`You lose, ${sleeve} beats ${master}!`);
    }
};

const output = playRound(playerSelection, computerSelection);


function game(hero) {
    const bestOfFive = 5;
    let player = 0;
    let computer = 0;
    let tie = 0;

    for(let i = 0; i <= bestOfFive; i++) {
        if(hero.includes("lose")) {
            computer += 1;
        }

        else if(hero.includes("draw")) {
            tie += 1;
        }
        
        else {
            player += 1;
        };

    }

    const result = `You:${player}; Draw:${tie}; Computer:${computer}`

    if(player < computer) {
        return(`(${result}); Oops! Better luck next time.`);
    }

    else if(player > computer) {
        return(`(${result}); Congratulations!!! You're the Man!`);
    }

    else {
        return(`(${result}); It's a tie, dare to go again`);
    }
};

console.log(game(output));

