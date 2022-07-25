var state = {
    balance: 0,
    income: 0,
    expense: 0,
    transaction: [
        {type: 'income', detail: 'salary', amount: 1200},
        {type: 'expense', detail: 'salary', amount: 500},
        {type: 'expense', detail: 'salary', amount: 300}
    ]
}

var balance = document.getElementById('balance')
var income = document.getElementById('income')
var expense = document.getElementById('expense')
var detail = document.getElementById('detail')
var amount = document.getElementById('amount')

var transactionContainer = document,getElementById('transaction-container')
var transaction

//display everything
function display() {
    state.transaction.reverse()

    balance.innerHTML = state.balance
    income.innerHTML = state.income
    expense.innerHTML = state.expense

    let myIncome = 0
    let myExpense = 0
    let myBalance = 0

    transactionContainer.innerHTML = ``

    for (let i = 0; i < state.transaction.length; i++) {
        let transaction = state.transaction[i]

        if (transaction.type == 'income') {
            myIncome += transaction.amount
            transactionContainer.innerHTML += `</div class= "transaction transact-income">
            <span class="text">${transaction.detail}</span>
            <span class="amount">${transaction.amount}</span>
            <button class="remove" onClick="deleteTransaction(${i})"></button>
            </div>`

        }   else {
            myExpense += transaction.amount
            transactionContainer.innerHTML += `</div class= "transaction transact-income">
            <span class="text">${transaction.detail}</span>
            <span class="amount">${transaction.amount}</span>
            <button class="remove" onClick="deleteTransaction(${i})"></button>
            </div>`
        }
    }

    state.income = Number (myIncome)
    state.expense = Number (myExpense)

    balance.innerHTML = myIncome - myExpense
    income.innerHTML = state.income
    expense.innerHTML = state.expense
}

// add income funcation
function addIncome() {
    if (detail.value == '' || amount.value == '') {
        alert ('please add detail')
    }

    state.transaction.push({
        type: 'income',
        detail: detail.value,
        amount: amount.value,
    })

    detail.value = ''
    amount.value = ''


    display();
}

// add expense funcation
function addExpense() {
    if (detail.value == '' || amount.value == '') {
        alert ('please add detail')
    }

    state.transaction.push({
        type: 'expense',
        detail: detail.value,
        amount: amount.value,
    })

    detail.value = ''
    amount.value = ''

    display();
}

//put intput data into varible
function getUserInput() {
    amount = Number(document.getElementById('amount').value);
    transactionName = document.getElementById('transaction').value;
}

//clear input data
function clearUserInput() {
    document.getElementById('amount').value = '';
    document.getElementById('transaction').value = '';
}

// calculate totals
function calculate() {
    income = 0;
    expense = 0;
    total = 0;

    for (let i = 0; i < tableData.length; i ++) {
        if (tableData[i].type == 'Income') {
            income += tableData[i].amount;
        }
        if (tableData[i].type == 'Expense') {
            expense -= tableData[i].amount;
    }
}

total = income - expense;
}

// remove from the table
function removeTransaction(index) {
    if( 
        window.confirm(
            `remove: ${tableData[index.id + ':' + tableData[index].transaction]} ?`
        )
    )   {
        tableData.splice(index, 1);
        calculate();
        displayTableData();
    }
}


display ();
