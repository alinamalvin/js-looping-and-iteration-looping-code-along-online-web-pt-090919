function writeCards(names,events) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you,${names[i]}, for the wonderful ${events[i]} gift!`);
  }
  return names;
}
 
wrapGifts(gifts);
