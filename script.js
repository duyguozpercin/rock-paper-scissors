const userChoice = prompt("Rock, Paper or Scissors").toLowerCase();


const choices = ["Rock", "Paper", "Scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Your Choice: ${userChoice}`);
console.log(`Computer's Choise: ${computerChoice}`);


function determineWinner(user, computer) {
  if (user === computer) {
    return "Berabere! 🤝";
  }
  if (
    (user === "taş" && computer === "makas") ||
    (user === "kağıt" && computer === "taş") ||
    (user === "makas" && computer === "kağıt")
  ) {
    return "Tebrikler, kazandın! 🎉";
  } else {
    return "Bilgisayar kazandı! 😞";
  }
}


console.log(determineWinner(userChoice, computerChoice));
