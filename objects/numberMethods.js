let num = 201.567;

//specify how many decimals you want
console.log(num.toFixed(2)); //2 means 2 decimals and it'll automatically round

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1));
//range 0 to 10
console.log(randomNum);
//generate between 10-20 whole number only.
let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum1);

//random number game; if 1-5 true; false if higher

let guessGame = function(guess) {
  //need to set a range of 1-10
  let randomNum2 = Math.ceil(Math.random() * 10)
  if (randomNum2 === guess) {
    console.log('true');
  } else {
    console.log('false');
  }
  //can also refactor as return randomNum2 === guess
}

guessGame(2);
guessGame(7)
