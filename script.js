const dateInput = document.getElementById('input-date'),
    incomeInput  = document.getElementById('input-income'),
    expendInput = document.getElementById('input-expend'),
    tableBody = document.getElementById('table-body');

loadData();
function addData() {
    
    const date = dateInput.value;
    const income = incomeInput.value;
    const expend = expendInput.value;

    const formatter = new Intl.NumberFormat('Id-id');

    let rowData = `<tr class='row-data'><td class='date'>${date}</td><td class='income'>${formatter.format(income)}</td><td class='expend'>${formatter.format(expend)}<span class='remove-button' onclick=removeData(this)></span></td></tr>`

    tableBody.insertAdjacentHTML("beforeend", rowData);

    dateInput.value = '';
    incomeInput.value = '';
    expendInput.value = '';

    saveData()
}

function loadData() {
    // Get data from local storage
    let data = JSON.parse(localStorage.getItem("data")) || [];

    // Iterate over the data array and display each entry in the table
    for (let entry of data) {
        const formatter = new Intl.NumberFormat('Id-id');

       let rowData = `<tr class='row-data'><td class='date'>${entry.date}</td><td class='income'>${formatter.format(entry.income)}</td><td class='expend'>${formatter.format(entry.expend)}<span class='remove-button' onclick=removeData(this)></span></td></tr>`

        tableBody.insertAdjacentHTML("beforeend", rowData);
    }
}

function saveData() {
    let dataArray = [];
    // Create a new data entry object
    
    let getRowData = document.querySelectorAll('.row-data');
    
    getRowData.forEach(row =>{
        const date = row.querySelector('.date').textContent,
        income = row.querySelector('.income').textContent,
        expend = row.querySelector('.expend').textContent;

        const data = {
            date: date,
            income: income,
            expend: expend
        };

        dataArray.push(data);
    })

    console.log(dataArray)

    localStorage.setItem('data', JSON.stringify(dataArray));
}

function removeData(e) {
    const row = e.parentElement.parentElement;
    row.remove();
    saveData();
}