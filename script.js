const userChoice = prompt("Rock, Paper or Scissors").toLowerCase();


const choices = ["Rock", "Paper", "Scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Your Choice: ${userChoice}`);
console.log(`Computer's Choise: ${computerChoice}`);


function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "Congratulation, you won!";
  } else {
    return "Computer won!";
  }
}


console.log(determineWinner(userChoice, computerChoice));
