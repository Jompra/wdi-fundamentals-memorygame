console.log("Up and Running!!!");

const cards = ["Queen", "Queen", "King", "King"];
let cardsInPlay = [];

function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found A Match")
  }else{
    alert("Sorry Not A Match")
  }
}

function flipCard(cardId){

  cardsInPlay.push(cards[cardId]);

  console.log("User Flipped " + cards[cardId]);

  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(0)
flipCard(2)
