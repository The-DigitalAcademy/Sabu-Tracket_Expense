let amount;
let transactionName;

let tableRows;

let tableData = [];

// varables
let income = 0;
let expense = 0;
let total = 0;

function isValid(value) {
    if (!value) {
        return false;
    }
    return true;
}

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
        clearUserInput();
    }   else {
        alert('all input required');
    }

    displayTableData();
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

// display table data
function displayTableData() {
    let totalIncome = document.getElementById('totalIncome');
    let totalExpense = document.getElementById('totalExpense');
    let totalMoney = document.getElementById('totalMoney');
    tableRows = document.getElementById('tableRows');

    tableRows.innerHTML = `<tr class = tableHead>
    <th>ID</th>
    <th>Transaction</th>
    <th>Type</th>
    <th>Price</th>
    <th>Action</th>
    </tr>`;

    for (let i = 0; i < tableData.length; i++) {
        tableData.innerHTML += `
        <tr>
                        <td>${tableData[i].id}</td>
                        <td>${tableData[i].transaction}</td>
                        <td>${tableData[i].type}</td>
                        <td>${tableData[i].amount}</td>
                        <td><button class="remove" onClick="removeTransaction(${i})">Remove</button></td>
                        </tr>
        `;
    }

    totalIncome.innerHTML = income;
    totalExpense.innerHTML = expense;
    totalMoney.innerHTML = total;
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
            expense += tableData[i].amount;
    }
}

total = income - expense;
}