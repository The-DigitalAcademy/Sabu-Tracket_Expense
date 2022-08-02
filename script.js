// input variables
let amount;
let transactionName;

// tabel rows
let tableRows;

// keeps data for the table
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

// add expense function
function addExpense() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
            id: tableData.length +1,
            transaction: transactionName,
            type: 'Expense',
            amount,
        });

        calculate();
        clearUserInput();
    }   else {
        alert('please add all input')
    }

    displayTableData();
}

// add income function
function addIncome() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
            id: tableData.length +1,
            transaction: transactionName,
            type: 'Income',
            amount,
        });

        calculate();
        clearUserInput();
    }   else {
        alert('please add all input')
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
    let totalExpense = document.getElementById('totalExpense');
    let totalIncome = document.getElementById('totalIncome');
    let totalMoney = document.getElementById('totalMoney');
    tableRows = document.getElementById('tableRows');

    tableRows.innerHTML = `<tr class="tableHead">
    <th>ID</th>
    <th>Transaction</th>
    <th>Type</th>
    <th>Price</th>
    <th>Action</th>
    </tr>`;

    for (let i = 0; i < tableData.length; i ++) {
        tableRows.innerHTML += `
        <tr>
                        <td>${tableData[i].id}</td>
                        <td>${tableData[i].transaction}</td>
                        <td>${tableData[i].type}</td>
                        <td>${tableData[i].amount}</td>
                        <td><button class="remove" onClick="removeTransaction(${i})">Remove</button></td>
                        </tr>
        `;
    }

    totalExpense.innerHTML = expense;
    totalIncome.innerHTML = income;
    totalMoney.innerHTML = total;
}

// Calculate Totals
function calculate() {
    income = 0;
    expense = 0;
    total = 0;

    for (let i = 0; i < tableData.length; i ++) {
        if (tableData[i].type == 'Expense') {
            expense += tableData[i].amount;
        }
        if (tableData[i].type == 'Income') {
            income += tableData[i].amount;
    }
}

total = expense - income;
}

// Remove Table
function removeTransaction(index) {
    if( 
        window.confirm(
            `remove: ${tableData[index].id + ':' + tableData[index].transaction} ?`
        )
    )   {
        tableData.splice(index, 1);
        calculate();
        displayTableData();
    }
}

// Clear Table
function clearTableData() {
    if (tableData.length == 0) {
        alert('Transaction already empty')
        return;
    }
    if (window.confirm('are you syre clear total?')) {
        tableData = [];
        calculate();
        displayTableData;
    }
}

display ();
