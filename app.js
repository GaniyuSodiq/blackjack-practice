let firstCard = 9
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message 
let isAlive = true
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got a blackjack"
    } else{
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 3
    sum += card
    startGame()
}