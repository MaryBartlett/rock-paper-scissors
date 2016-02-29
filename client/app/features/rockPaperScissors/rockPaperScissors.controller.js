const rockPaperScissors = ['rock', 'paper', 'scissors'];
const l = rockPaperScissors.length;

const didPlayerWin = function didPlayerWin (player, computer) {
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

export default class rockPaperScissorsController {
    static get UID () {
        return "rockPaperScissorsController"
    }
  
    playGame (e) {
        let selectedItem = e.target.id;
        let computerSelect = randomValue();

        this.winner = didPlayerWin(selectedItem, computerSelect);
    };

    /* @ngInject */
    constructor() {
        this.winner
    }
}
