// INITIAL GLOBAL VALUES
let playerScore = 0;
let computerScore = 0;
let result = "";
//const buttons = document.querySelectorAll("buttons").value;

const playerHand2 = document.getElementsByClassName("nappi");
let playerHand = "";
console.log(playerHand2.length);
// THE GAME ITSELF
function game() {
//while (playerScore < 5 && computerScore < 5) { 
//    let playerHand = prompt("Rock, Paper or Scissors?");
    let computerHand = computerPlay();

    playRound(playerHand, computerHand);


    console.log(playerHand);
    console.log(computerHand);
    console.log(result);
    console.log(`Player Score is now ${playerScore}`);
    console.log(`Computer Score is now ${computerScore}`);
    console.log(" ");

    if (playerScore === 5) {
        console.log("Congratulations! You Won the Game!");
    } else if (computerScore === 5) {
        console.log("You Lost! Computer Won the Game!");
    }

}
//}

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
    //let playerChoice = playerHand.toLowerCase();
    //let computerChoice = computerHand.toLowerCase();
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
//game();
//const playBtn = document.querySelector(".nappi");
for (i = 0; i < playerHand2.length; i++) {
//playerHand[i].addEventListener("click", game);
//console.log(playerHand[i].value);

//playerHand[i].addEventListener("click", function() {
//   console.log(this.value);});

playerHand2[i].addEventListener("click", function() {
   //console.log(this.value);
    playerHand = this.value;
//    console.log(playerHand.value);
game();});
}
