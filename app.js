const gridContainer = document.querySelector(".grid-container");
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
document.querySelector(".score").textContent = score;

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
shuffleCards();
generateCards();

//console.log(cards);
//cards.push(...card);
function shuffleCards(){
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;

    }
}

function generateCards() {
    for (let card of cards){
        const cardElement= document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card);
        console.log(card);
        cardElement.innerHTML =
        ` <div class = "front">
             <img class = " front-image" src= ${card} />
             </div>
             <div class = " back"> </div> `;
             gridContainer.appendChild(cardElement);
             cardElement.addEventListener("click", flipCard);
    }
}

function flipCard(){

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if(!firstCard) {
        firstCard = this;
        return ;
    }

    secondCard = this;
        
    //score+=1;
       
     //document.querySelector(".score").textContent = score;
    lockBoard = true;
    checkForMatch();

       
    
}

function checkForMatch(){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
    //document.querySelector(".score").textContent = score;
}

function disableCards() {

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click",flipCard);
    
    resetBoard();
}

function unflipCards(){

    setTimeout(() => {
   firstCard.classList.remove("flipped");
   secondCard.classList.remove("flipped");
   if(firstCard== secondCard){
    updateScore() 
   
  
     //score++;
  //document.querySelector(".score").textContent = score;
       }

   resetBoard();
 }, 1000 );
}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart(){

    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();
}

// Create player objects
const player1 = {
    name: "Player 1",
    score: 0
  };
  
  const player2 = {
    name: "Player 2",
    score: 0
  };
  
  // Function to update the score for a player
function updateScore(player, score) {
   // score++;
   document.querySelector(".score").textContent = score;
    player.score= score++;
console.log(player.score);
  }
  
  // Example usage
 // updateScore(player1, 1); // Increase Player 1's score by 1
  //updateScore(player2, 1); // Increase Player 2's score by 2
  
 // console.log(player1.score); 
// console.log(player2.score);

console.log(firstCard);
console.log(secondCard);
  

  
  
  