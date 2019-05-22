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
}

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
}

let getAccountSummary = function(account) {
  summary = `${account.name} has a balance of ${account.income - account.expenses}`;
  return summary;
}

addExpense(myAccount, 2000);
addIncome(myAccount, 5000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
