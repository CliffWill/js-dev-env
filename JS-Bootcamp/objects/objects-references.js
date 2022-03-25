let myAccount = {
    name: 'Cliff',
    expenses: 0,
    income: 0
}
let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome - function should take account and amount and add
//resetAccount - reset account to 0
//getAccountSummary - summary of account balance with income and expenses

//addIncome 
