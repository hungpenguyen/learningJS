let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

myBook.title = 'Animal Farm'

console.log(myBook.title)


let myPerson = {
  name: 'Hy',
  age: 33,
  location: 'hayward'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)

myPerson.age = 20
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)
