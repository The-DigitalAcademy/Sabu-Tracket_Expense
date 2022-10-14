//KEEP DATA FOR THE TABLE
let tableData = []

let amount = document.getElementById('amount')
let transactionName = document.getElementById('transactionName')
let tableRows = document.getElementById('tableRows')

//VARABLES
let income = 0;
let expense = 0;
let total = 0;

function isValid(value) {
    if (!value) {
        return false;
    }
    return true;
}

//ADD FUNCTION EXPENSE
function addExpense() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
            id: tableData.length -1,
            transaction: transactionName,
            type: 'Expense',
            amount,
        });

        calculate();
        clearUserInput();
    }   else {
        alert('please add all typing')
    }

    displayTableData();
}

//ADD FUNCTION INCOME
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
        alert('please add all typing')
    }

    displayTableData();
}

//ADD FUNCTION INPUT DATA INTO VARIBLE
function getUserInput() {
    amount = Number(document.getElementById('amount').value);
    transactionName = document.getElementById('transaction').value;
}

//CLEAR INPUT DATA
function clearUserInput() {
    document.getElementById('amount').value = '';
    document.getElementById('transaction').value = '';
}

//ADD FUNCTION DISPALY TABLE DATA
function displayTableData() {
    let totalExpense = document.getElementById('totalExpense');
    let totalIncome = document.getElementById('totalIncome');
    let totalMoney = document.getElementById('totalMoney');
    tableRows = document.getElementById('tableRows');

    tableRows.innerHTML = `<tr class="tableHead">
    <th>List</th>
    <th>Transaction</th>
    <th>Type</th>
    <th>Cash</th>
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

//ADD FUNCTION CALCULATE Totals
function calculate() {
    expense = 0;
    income = 0;
    total = 0;

    for (let i = 0; i < tableData.length; i ++) {
        if (tableData[i].type == 'Expense') {
            expense -= tableData[i].amount;
        }
        if (tableData[i].type == 'Income') {
            income += tableData[i].amount;
    }
}

total = income - expense;
}

//ADD FUNCTION REMOVE INTO TABLE
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

//ADD FUNCTION CLEAR TABLE
function clearTableData() {
    if (tableData.length == 0) {
        alert('Transaction already empty');
        return;
    }
    if (window.confirm('are you sure clear total?')) {
        tableData = [];
        calculate();
        displayTableData();
    }
}

display ();
