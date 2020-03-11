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

function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found A Match")
  }else{
    alert("Sorry Not A Match")
  }
}

function flipCard(cardId){

  cardsInPlay.push(cards[cardId].rank);

  console.log("User Flipped " + cards[cardId].rank);
  console.log("User Flipped " + cards[cardId].suit);
  console.log("User Flipped " + cards[cardId].cardImage);

  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(0)
flipCard(2)
