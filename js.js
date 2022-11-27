let firstCard = 10
let secondCard = 10
let cards = [firstCard, secondCard] //array of cards delt
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
  cardsEl.textContent = "Cards: " + cards[0] + " ~ " + cards[1]
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
  let card = 6
  sum += card
  // Push the card to the cards array
  cards.push(card)
  renderGame()
}