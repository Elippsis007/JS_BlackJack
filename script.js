let firstCard = 6
let secondCard = 7
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let playerAlive = true
// created variable called message and assigned it an empty string
// this was created to remove the console.log 
let message = ""

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum
    // if sum (of two cards) is less than 21 then return message
    if (sum <= 20) {
        message = "Do you want to draw another card?"
        // or else if sum is the same or equal to 21 return message
    } else if (sum === 21) {
        message = "BlackJack!"
        hasBlackJack = true
        // else the player is out of the game as they have surpassed 21 with the cards they drew
    } else { message = "Bust!"
            playerAlive = false
    }
    messageEl.textContent = message
    }

function newCard() {
    console.log("Drawing out a new card")
    let card = 4
    sum += card
    cards.push(card)
    renderGame()
}

