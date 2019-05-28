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

const findNote = (notes, noteTitle)=>{
  //use findIndex on the array that would find the index of the title that match noteTitle
  const index = notes.findIndex((note, index)=>{
    return note.title.toLowerCase() === noteTitle.toLowerCase(); //if all of the notes dont have title, it will give error
    //return true or false; if its true, we store that value to the index variable, if false, store -1.
  })
  return notes[index]; //with the index of the True object returned, you can find the content of object
};

//call findNote function to pass in the notes array to search for 'My next trip'
const note = findNote(notes, 'my next trip');
console.log(note); //logging the entire object that's being returned from the findNote function; logs undefined if it cant find.

//find() this will make it a lot easier. becauseit will return the item back
const findNote2 = (notes, noteTitle)=>{
  return notes.find((note, index)=>{
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  })
}

const note2 = findNote2(notes, 'my next trip');
console.log(note2);
