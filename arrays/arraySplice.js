//splice lets u add to anywhere in the array or remove certain item from list
//the second argument is how many items you want to remove.
const arr = ['here', 'what', 'are', 'note'];
// arr.splice(1 , 0); //doesn't delete anything
// arr.splice(1, 0, 'new'); //this wont delete anything, instead it will add 'new' to index 1
arr.splice(1 , 1, 'new') // this would replace index 1 with 'new'
// arr.splice(0, 2); //starts from index 0, and deletes 2 indices from array


console.log(arr);
