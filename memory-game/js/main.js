console.log("Up and Running!!!");

const cards = ["Queen", "Queen", "King", "King"];
let cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardsInPlay)

if(cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found A Match")
  }else{
    alert("Sorry Not A Match")
  }
}
