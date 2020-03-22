function writeCards( names, gift ) {
  let cards = []
  for ( let i = 0; i < names.length; i++ ) {
cards.push( `Thank you, ${names[i]}, for the wonderful ${gift} gift!` )
 }
 return cards
}	
 
function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i--)
    }
}