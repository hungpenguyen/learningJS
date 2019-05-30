const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Japan'
}, {
  title: 'Daily activities',
  body: 'Exercise more'
}, {
  title: 'Room modification',
  body: 'Replace bed sheets'
}]

//a function that will search for the item that is true and return it as an array
const findNotes = (notes, noteText)=>{
  return notes.filter((note, index)=>{
    const isTitleMatch = note.title.toLowerCase().includes(noteText.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(noteText.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
}
//this will return a boolean, if true, the note will store in new arraym if false, then it wont store.
// const filteredNotes= notes.filter((note, index)=>{
//   const isTitleMatch = note.title.toLowerCase().includes('ne');
//   const isBodyMatch = note.body.toLowerCase().includes('ne');
//   return isTitleMatch || isBodyMatch;
// })

console.log(findNotes(notes, 'bed'));
