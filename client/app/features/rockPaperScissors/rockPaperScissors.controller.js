const rockPaperScissors = ['rock', 'paper', 'scissors'];
const l = rockPaperScissors.length;
let counter = {
    computer: 0,
    player: 0,
    draw: 0
}


const whoWon = function whoWon (player, computer) {
    let winner;

    if (player === computer) {
        return 'draw';
    }

    switch (player) {
        case 'rock':
            if (computer === 'scissors')
                winner = 'player';
            if (computer === 'paper')
                winner = 'computer';
            break;
        case 'paper': 
            if (computer === 'rock')
                winner = 'player';
            if (computer === 'scissors')
                winner = 'computer';
            break;
        case 'scissors': 
            if (computer === 'rock')
                winner = 'computer';
            if (computer === 'paper')
                winner = 'player';
            break;
        default:
            winner = 'unknown'; // ideally you should never get here!
    }

    return winner;
}

const randomValue = function returnRandomValue () {
    const randomPos = Math.round(Math.random() * (l - 1)); // subtract 1 due to arrays being zero indexed
    return rockPaperScissors[randomPos];
}

const updateCounter = function updateCounter (winner) {
    counter[winner] +=1;
    return counter;
}

export default class rockPaperScissorsController {
    static get UID () {
        return "rockPaperScissorsController"
    }
  
    playGame (e) {
        this.playerChoice = e.target.id;
        this.computerChoice = randomValue();

        this.winner = whoWon(this.playerChoice, this.computerChoice);

        this.scoreCard = updateCounter(this.winner);
    };

    /* @ngInject */
    constructor() {
        this.winner,
        this.computerChoice,
        this.playerChoice,
        this.scoreCard
    }
}
