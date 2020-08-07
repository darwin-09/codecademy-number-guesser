
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() *10);

const getAbsoluteDistance = (guess, target) => {
  const diff = target - guess;

  if (diff < 0 ) {
      return diff * -1;
  } else {
    return diff;
  }
}


function compareGuesses(human,computer,target) {
     target = generateTarget(); 

     if (human > 9 || human < 0) {
       alert("Input out of range")
     }

   if (getAbsoluteDistance(human,target) <= getAbsoluteDistance(computer, target)) { // makes the human wins even it's tied
        return true;
    } else { 
        return false;
    }
}

function updateScore(guesser) {

    if (guesser === 'human') {
        humanScore += 1;
    } else if (guesser === 'computer') {
        computerScore += 1;
    }

}

function advanceRound() {
  currentRoundNumber += 1;
}


