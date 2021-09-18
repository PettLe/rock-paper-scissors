// INITIAL GLOBAL VALUES
let playerScore =  0;
let computerScore = 0;
let result = "";

const playerHand2 = document.getElementsByClassName("nappi");
let playerHand = "";
let playerPoints = document.querySelector(".playerPoints");
let computerPoints = document.querySelector(".computerPoints");
const outCome = document.querySelector(".outCome");

const replayBtn = document.querySelector(".replay");
replayBtn.addEventListener("click", function() { 
    playerScore = 0, computerScore = 0;
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    outCome.removeAttribute("style");
    outCome.textContent = "";
    document.getElementById("buttons").style.visibility = "visible";
});


// THE GAME ITSELF
function game() {
    let computerHand = computerPlay();

    playRound(playerHand, computerHand);
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    outCome.textContent = result;
   

    if (playerScore === 5) {
        document.getElementById("buttons").style.visibility = "hidden";
        outCome.setAttribute("style", "font-size: 24px", "font-weight: 500");
        outCome.innerHTML = '<center>Congratulations! You Won the Game! <br> Click replay and play again!';
    } else if (computerScore === 5) {
        document.getElementById("buttons").style.visibility = "hidden";
        outCome.setAttribute("style", "font-size: 24px", "font-weight: 500");
        outCome.innerHTML = "<center>You Lost! Computer Won the Game! <br> Click replay and play again!";
    }

}

// GENERATING COMPUTER HAND
function computerPlay() {
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    let computerHand = "";
   if (computerChoiceNum === 1) {
    computerHand = "Rock";
      } else if (computerChoiceNum === 2) {
    computerHand = "Paper";
    } else {
        computerHand = "Scissors";
    }
    return computerHand;
    
    }


    // ONE ROUND
function playRound(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return result = "It\'s a tie!";
    }

    if (playerHand === "Rock") {
        if (computerHand === "Paper") {
          computerScore++;         
        return result = "You Lose! Paper beats Rock!";
    } else if (playerHand === "Rock") {
        if (computerHand === "Scissors") {
            playerScore++;
           return result = "You Win! Rock beats Scissors!"}
      }
    }

    if (playerHand === "Paper") {
        if (computerHand === "Scissors") {
            computerScore++;
            return result = "You Lose! Scissors beat Paper!";
    } else if (computerHand === "Rock") {
            playerScore++;
        return result = "You Win! Paper beats Rock!";
     }
    }

    if (playerHand === "Scissors") {
        if (computerHand === "Rock") {
            computerScore++;
        return result = "You Lose! Rock beats Scissors!";
    } else if (computerHand === "Paper") {
            playerScore++;
        return result = "You Win! Scissors beat Paper!";
      }
    }
}

//BEGIN THE GAME
for (i = 0; i < playerHand2.length; i++) {
playerHand2[i].addEventListener("click", function() {
    playerHand = this.value;
game();});
}

