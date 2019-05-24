//explore methods available in JS

let name = ' Hung Nguyen ';

//length property
console.log(name.length);

//convert to uppercase:

console.log(name.toUpperCase());

//includes method
let password = 'abc123password098';
console.log(password.includes('password'));

//trim - remove white space from a string
console.log(name.trim());

//validate pw
//return true if length is more than 8 and it doesnt contain the word password

let validPW = function (pw) {

  console.log(pw);
  if (pw.length < 9 || pw.includes('password') ){
    return 'Incorrect Password. Please try again.';
  } else {
    return `You've logged in`;
  }
};

console.log(validPW('agepassword'));
