let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
  renderGame()
}
function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard
  sumEl.textContent = "sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackJack = true
  } else {
    message = "Busted!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  console.log("drawing from deck")
  let card = 1
  sum += card
  sumEl.textContent = "Sum: " + (sum + newCard)
  renderGame()
}