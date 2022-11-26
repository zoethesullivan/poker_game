let firstCard = 10
let secondCard = 1
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
console.log(sumEl)

function startGame() {

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackJack = true
  } else {
    message = "Busted!"
    isAlive = false
  }
  sumEl.textContent += " " + sum
  messageEl.textContent = message
}