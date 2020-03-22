const names=["Ada", "Brendan", "Ali"];
const event=["Birthday", "New Year"];

function writeCards(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);
