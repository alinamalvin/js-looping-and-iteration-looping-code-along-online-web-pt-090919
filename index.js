const names=["Lisa", "Kaitlinn", "Jan"];
const events=["Birthday"];

function writeCards(names,events) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you,${names[i]}, for the wonderful ${events[i]} gift!`);
  }
  return names;
}
 
wrapGifts(gifts);

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }