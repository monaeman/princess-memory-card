const gridContainer = document.querySelector(".grid-container");
let firstCard, secondCard;
let currentPlayer = "player1";
let lockBoard = false;
const player1Score = document.querySelector(".player1-score-value");
const player2Score = document.querySelector(".player2-score-value");
let score = {
  player1: 0,
  player2: 0,
};

/*const player1 = {
    score: player1Score
  };
  
  const player2 = {
    score: player2Score
  };
*/

//Create player objects
const player1 = {
  player: document.querySelector(".player1"),
  name: document.querySelector(".player1-name"),
  score: document.querySelector(".player1-score-value"),
};

const player2 = {
  player: document.querySelector(".player2"),
  name: document.querySelector(".player2-name"),
  score: document.querySelector(".player2-score-value"),
};

const initialScores = () => {
  player1.score.innerText = 0;
  player2.score.innerText = 0;
};

//fetch("./data/cards.json")
//.then((res) => res.json())
//.then((images) => {
const cards = [
  "images/princess-1.jpeg",
  "images/princess-2.jpeg",
  "images/princess-3.jpeg",
  "images/princess-4.jpeg",
  "images/princess-5.jpeg",
  "images/princess-6.jpeg",
  "images/princess-7.jpeg",
  "images/princess-8.jpeg",
  "images/princess-9.jpeg",
  "images/princess-10.jpeg",
  "images/princess-1.jpeg",
  "images/princess-2.jpeg",
  "images/princess-3.jpeg",
  "images/princess-4.jpeg",
  "images/princess-5.jpeg",
  "images/princess-6.jpeg",
  "images/princess-7.jpeg",
  "images/princess-8.jpeg",
  "images/princess-9.jpeg",
  "images/princess-10.jpeg",
];
restart();
shuffleCards();
generateCards();

//checkForMatch();
//updateScore1();
//updateScore2();

/*   
updateScore1():
This function updates the score for player 1 by incrementing the score.player1 variable by 1.
It updates the corresponding HTML element, player1Score, to display the updated score.

*/
// Update score for player1
function updateScore1() {
  score.player1++;
  player1Score.textContent = score.player1;
  console.log(score.player1);
}

/* 
  updateScore2():
This function updates the score for player 2 by incrementing the score.player2 variable by 1.
It updates the corresponding HTML element, player2Score, to display the updated score.
  
  */

// Update score for player2
function updateScore2() {
  score.player2++;
  player2Score.textContent = score.player2;
  console.log(score.player2);
}

//shuffleCards():
//This function shuffles the cards array using the Fisher-Yates algorithm.
//It uses a while loop to iterate over the array and swap each element with a randomly chosen element.
//This ensures that the cards are randomly ordered for each game.

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}
/*
generateCards():
This function dynamically generates HTML elements for each card and appends them to the gridContainer element.
It iterates over the cards array and creates a <div> element for each card.
The card element is given the appropriate CSS classes and a data-name attribute to store the card's image data.
Event listeners are added to each card element to handle the click event and call the flipCard() function.
*/
function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card);
    //console.log(card);
    cardElement.innerHTML = ` <div class = "front"  = >
             <img class = " front-image" src= ${card} />
             </div>
             <div class = " back"> </div> `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

//function checkForMatch(){
// let isMatch = firstCard.dataset.name == secondCard.dataset.name;

// isMatch ? disableCards() : unflipCards();
// document.querySelector(".score").textContent = score;
//}

/*
flipCard():
This function is called when a card is clicked.
It adds the CSS class "flipped" to the clicked card element to reveal the front face of the card.
If it's the first card flipped (firstCard is null), it assigns the clicked card element to firstCard.
If it's the second card flipped (firstCard is already assigned), it assigns the clicked card element to secondCard.
The function then calls checkForMatch() to check if the two flipped cards match.

*/
function flipCard() {
  if (lockBoard) return;
  // console.log("FIRST CARD-", firstCard)
  //  console.log("conseloging-",this === firstCard)
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;

  lockBoard = true;
  checkForMatch();
}

function nextPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
    player1.player.classList.remove("active");
    player2.player.classList.add("active");
    console.log(currentPlayer);
  } else {
    currentPlayer = "player1";
    player2.player.classList.remove("active");
    player1.player.classList.add("active");
    console.log(currentPlayer);
  }
}

// updateScore1();
// updateScore2();

/*
  checkForMatch():
This function is called after two cards are flipped.
It checks if the data-name attribute of firstCard matches the data-name attribute of secondCard.
If there is a match, it calls disableCards() to disable the matched cards and updates the score for the current player using updateScore1() or updateScore2() depending on the current player.
If there is no match, it calls unflipCards() to flip the cards back.
  */

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    disableCards();
    if (currentPlayer == "player1") {
      updateScore1();
    } else {
      updateScore2();
    }
  } else {
    unflipCards();
    nextPlayer();
  }
}

/*   disableCards():
This function is called when there is a match between two cards.
It removes the click event listeners from both firstCard and secondCard to prevent further clicks on them.
This ensures that the matched cards remain revealed and cannot be clicked again
*/

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}
/* 
unflipCards():
This function is called when there is no match between two cards.
It adds a short delay using setTimeout() before removing the "flipped" CSS class from both firstCard and secondCard.
This visually flips the unmatched cards back to their initial state.
*/
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetBoard();
  }, 1000);
}

/* 
resetBoard():
This function is called after each turn or when restarting the game.
It resets the firstCard, secondCard, and lockBoard variables to their initial states.
*/

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

/* 
restart():
This function is called when restarting the game.
It resets the board by calling resetBoard(), shuffles the cards using shuffleCards(), and resets the scores to 0.
It updates the HTML elements player1Score and player2Score to display the
*/

function restart() {
  resetBoard();
  shuffleCards();
  score.player1 = 0;
  score.player2 = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  gridContainer.innerHTML = "";
  generateCards();
}

// Start the game with player1

player1.player.classList.add("active");
