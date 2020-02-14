console.log("Up and Running!!!");

const cards = ["Queen", "Queen", "King", "King"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[3];
let cardThree = cards[2];
let cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log(cardOne);
console.log("User flipped" + cardOne)
console.log("User flipped" + cardTwo)


if(cardsInPlay.length === 2){
  if(cardOne === cardTwo){
    alert("You Found a Match!")
  }else {
    alert("Sorry Not a Match")
  }
}
