let myAccount = {
  name: 'Hung Nguyen',
  expenses: 0,
  income: 0
}

let otherAccount = myAccount; //otherAccount now have same object properties as myAccount
otherAccount.income = 1000; //now gives it 1000 to income to myAccount as well
//create function to add expenses

let addExpense = function(account, amount) {
  // account = {} this assigns a new value to the account object, so it no longer takes the properties and values of myAccount
  account.expenses = account.expenses + amount; //you have to manipulate the property in order to inherit the properties and valuesf rom myAccount
  console.log(account);
}

addExpense(myAccount, 2.50);
console.log(myAccount);
