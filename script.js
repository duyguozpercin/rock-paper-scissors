const userChoice = prompt("Taş, Kağıt veya Makas?").toLowerCase();


const choices = ["taş", "kağıt", "makas"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Senin seçimin: ${userChoice}`);
console.log(`Bilgisayarın seçimi: ${computerChoice}`);


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
