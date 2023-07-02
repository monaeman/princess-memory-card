##### Memory Card Game

This is a memory card game. The game involves flipping pairs of cards to find matching pairs. It keeps
track of the scores for two players and determines the winner based on the number of matched pairs.

###### How to Play


The game starts with Player 1.
Click on a card to flip it and reveal the image on the front face.
Click on another card to flip it.
If the two flipped cards match, they will remain face up, and the score for the current player will be incremented by 1.
If the two flipped cards do not match, they will be flipped back face down, and it will be the next player's turn.
The game continues until all cards have been matched.
The player with the higher score at the end of the game wins. If both players have the same score, it's a tie.

##### Code Structure

The code consists of several functions and variables to manage the game logic and user interface.

##### Variables

gridContainer: Represents the container element that holds the grid of cards.
firstCard and secondCard: Store the currently flipped cards.

currentPlayer: Stores the current player ("player1" or "player2").

lockBoard: Controls whether the board is locked to prevent additional card flips.
player1Score and player2Score: Reference the HTML elements that display the scores for the two players.
score: An object that stores the scores for player 1 and player 2.

flippedCards: Keeps track of the number of flipped cards.
Functions

initialScores(): Resets the scores of player 1 and player 2 to 0.

shuffleCards(): Shuffles the array of card images using the Fisher-Yates algorithm.

generateCards(): Dynamically generates HTML elements for each card and appends them to the grid container.

updateScore1(): Updates the score for player 1 and updates the corresponding HTML element to display the updated score.

updateScore2(): Updates the score for player 2 and updates the corresponding HTML element to display the updated score.

flipCard(): Handles the click event when a card is flipped. Flips the card and checks for a match with the previously flipped card.

checkForMatch(): Checks if the flipped cards match. If they do, disables the cards and updates the score for the current player. If not, flips the cards back and switches to the next player.

checkWinState(): Checks if all cards have been flipped and determines the winner based on the scores.

disableCards(): Disables the matched cards by removing the click event listeners.

unflipCards(): Flips the unmatched cards back to their initial state after a short delay.

resetBoard(): Resets the firstCard, secondCard, and lockBoard variables to their initial states.

restart(): Restarts the game by resetting the board, shuffling the cards, and resetting the scores.
Customization

###### To customize the game, you can modify the following parts of the code

The cards array: Replace the image URLs in the array with your own images or modify the existing ones.
HTML elements and classes: Modify the HTML structure and CSS classes to change the appearance and layout of the game.
Enjoy playing the memory card game!
