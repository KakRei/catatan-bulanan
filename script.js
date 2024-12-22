
getData();
function addData() {
    const dateInput = document.getElementById('input-date');
    const incomeInput  = document.getElementById('input-income');
    const expendInput = document.getElementById('input-expend');

    const tableBody = document.getElementById('table-body');
    
    const date = dateInput.value;
    const income = incomeInput.value;
    const expend = expendInput.value;

    // Create a new data entry object
    const dataEntry = {
        date: date,
        income: income,
        expend: expend
    };

    let data = JSON.parse(localStorage.getItem('data')) || [];

    data.push(dataEntry);

    localStorage.setItem('data', JSON.stringify(data));

    dateInput.value = '';
    incomeInput.value = '';
    expendInput.value = '';

    tableBody.innerHTML = '';

    getData();
}

function getData() {
    const table = document.getElementById('table-body');

    // Get data from local storage
    let data = JSON.parse(localStorage.getItem("data")) || [];

    // Iterate over the data array and display each entry in the table
    for (let entry of data) {
        const row = table.insertRow(-1);
        const dateCell = row.insertCell(0);
        const incomeCell = row.insertCell(1);
        const expendCell = row.insertCell(2);

        const formatter = new Intl.NumberFormat('Id-id');

        dateCell.textContent = entry.date;
        incomeCell.textContent = formatter.format(entry.income);
        expendCell.textContent = formatter.format(entry.expend);
    }
}
