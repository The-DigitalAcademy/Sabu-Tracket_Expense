let amount;
let transactionName;

// varables
let income = 0;
let expense = 0;
let total = 0;

// add income funcation
function addIncome() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
            id: tableData.length + 1,
            transaction: transactionName,
            type: 'income',
            amount,
        });

        calculate();
        clearUserInput();
    }   else {
        alert('all input required');
    }

    displayTableData();
}

// add expense funcation
function addExpense() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
            id: tableData.length + 1,
            transaction: transactionName,
            type: 'Expense',
            amount,
        });

        calculate();
    }
}