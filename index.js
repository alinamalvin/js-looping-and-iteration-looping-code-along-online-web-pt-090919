function writeCards( names, gift ) {
  let cards = []
  for ( let i = 0; i < names.length; i++ ) {
cards.push( `Thank you, ${names[i]}, for the wonderful ${gift} gift!` )
 }
 return cards
}	

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return gifts;
}