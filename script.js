// Kullanıcının seçimini al
const userChoice = prompt("Taş, Kağıt veya Makas?").toLowerCase();

// Bilgisayarın rastgele seçim yapması
const choices = ["taş", "kağıt", "makas"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Senin seçimin: ${userChoice}`);
console.log(`Bilgisayarın seçimi: ${computerChoice}`);

// Kazananı belirleme fonksiyonu
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

// Sonucu ekrana yazdır
console.log(determineWinner(userChoice, computerChoice));
