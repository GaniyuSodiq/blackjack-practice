let firstCard = 9
let secondCard = 10
let sum = firstCard + secondCard
let message 
let isAlive = true
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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