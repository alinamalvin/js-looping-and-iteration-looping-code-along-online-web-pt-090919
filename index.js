function writeCards(namesArray,events) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Thank you,${names[i]}, for the wonderful ${events[i]} gift!`);
  }
  return names;
}
 
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }