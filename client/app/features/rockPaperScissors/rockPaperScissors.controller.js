const rockPaperScissors = ['rock', 'paper', 'scissors'];
const l = rockPaperScissors.length;

const determineWinner = function determineWinner (player1, player2) {

    if (player1 === player2) {
        return 'draw';
    }

    // this isn't at all neat - just trying to use plain JS here
    // could use lodash - but still figuring out what data structure I want to use
    // will probably change the function to use an object instead of the strings

    if (player1  === 'rock' || player2 === 'rock') {
        if (player1 === 'scissors' || player2 === 'scissors') {
            return 'rock';
        }
        if (player1 === 'paper' || player2 === 'paper') {
            return 'paper';
        }
    }

    if (player1  === 'paper' || player2 === 'paper') {
        if (player1  === 'scissors'|| player2 === 'scissors') {
            return 'scissors';
        }
    }

}


const randomValue = function returnRandomValue () {
    const randomPos = Math.round(Math.random() * (l - 1)); // subtract 1 due to arrays being zero indexed
    return rockPaperScissors[randomPos];
}

export default class rockPaperScissorsController {
  static get UID(){
    return "rockPaperScissorsController"
  }
  
  playGame (e) {
    let selectedItem = e.target.id;
    window.console.log('the winner is::: ', determineWinner(randomValue(), selectedItem));
    return determineWinner(randomValue(), selectedItem);
  };

  /* @ngInject */
  constructor() {
  }
}
