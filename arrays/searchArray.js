// //empty object logs -1 because it doesnt exist.
// console.log(note.indexOf({}));
// //when comparing ojects, they are not equal unless they're the EXACT same object in memory
// console.log({} === {}); //this logs false.
// let someOject = {};
// let otherObject = someOject;
// console.log(someOject === otherObject) //logs True
//
// const notes = ['note 1', 'note 2', 'note 3'];
//
// notes.forEach((items, index)=> {
//   console.log(index);
//   console.log(items);
// });
//
// console.log(notes);
//
// //give the position of this; if it doesn't exist, we get -1;
// console.log(notes.indexOf('note 2'));
// //this will log -1 because it is case sensitive
// console.log(notes.indexOf('Note 2'));

const note = [{
  title: 'My next trip',
  body: 'I would like to go to Japan'
}, {
  title: 'Daily activities',
  body: 'Exercise more'
}, {
  title: 'Room modification',
  body: 'Replace bed sheets'
}]
//indexOf
// console.log(note);
console.log(note.length);


// findIndex goal of findIndex is to exactly find the index. With this, we return true or false.
const index = note.findIndex(function (item, index){
  console.log(item); //log the one item that match; both title and body
  return item.title === 'My next trip';
})
console.log(index); //this will return the index of the returned item.title
