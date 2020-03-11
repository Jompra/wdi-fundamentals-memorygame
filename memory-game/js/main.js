console.log("Up and Running!!!");

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
let cardsInPlay = [];

function createBoard(){
  for(let i = 0; i > cards.length; i++){
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click');
    document.getElementById("game-board").appendChild(cardElement);

  }
}

function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found A Match")
  }else{
    alert("Sorry Not A Match")
  }
}

function flipCard(){
  let cardId = this.getAttribute(data-id)

  cardsInPlay.push(cards[cardId].rank);

  console.log("User Flipped " + cards[cardId].rank);
  console.log("User Flipped " + cards[cardId].suit);
  console.log("User Flipped " + cards[cardId].cardImage);

  

  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

createBoard();
