let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSumm: `${book.title} is ${book.pageCount} pages long`
  };


};

let bookSummary = getSummary(myBook);  //in this case, getSummary(myBook) is equal to what is inside the curly braces within the function
let otherSummary = getSummary(otherBook);

console.log(`${bookSummary.summary} is ${bookSummary.pageCountSumm}`);

//challenge


let conversionTemp = function(farenT) {
  return {
    farenheit: farenT,
    celcius: ((farenT-32) * 5/9),
    kelvin: ((farenT - 32) * 5/9 + 273.15)
  }
};
//creating tempList as a new object
let tempList = conversionTemp(32);
console.log(tempList);
console.log(`It is ${tempList.farenheit}F which is ${tempList.celcius}C or ${tempList.kelvin}K`);
