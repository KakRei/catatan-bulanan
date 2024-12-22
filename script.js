const dateInput = document.getElementById('input-date'),
    incomeInput  = document.getElementById('input-income'),
    expendInput = document.getElementById('input-expend'),
    tableBody = document.getElementById('table-body');

getData();
function addData() {
    
    const date = dateInput.value;
    const income = incomeInput.value;
    const expend = expendInput.value;

    const formatter = new Intl.NumberFormat('Id-id');

    let rowData = `<tr><td class='date'>${date}</td><td class='income'>${formatter.format(income)}</td><td class='expend'>${formatter.format(expend)}<span class='remove-button' onclick=removeData(this)></span></td></tr>`

    tableBody.insertAdjacentHTML("beforeend", rowData);

    let dataArray = [];
    // Create a new data entry object
    const data = {
        date: document.querySelector('.date').textContent,
        income: document.querySelector('.income').textContent,
        expend: document.querySelector('.expend').textContent
    };

    console.log(data)

    localStorage.setItem('data', JSON.stringify(data));

    dateInput.value = '';
    incomeInput.value = '';
    expendInput.value = '';
}

function getData() {
    // Get data from local storage
    let data = JSON.parse(localStorage.getItem("data")) || [];

    // Iterate over the data array and display each entry in the table
    for (let entry of data) {
        const formatter = new Intl.NumberFormat('Id-id');

        let rowData = `<tr><td>${entry.date}</td><td>${formatter.format(entry.income)}</td><td>${formatter.format(entry.expend)}<span class='remove-button' onclick=removeData(this)></span></td></tr>`

        tableBody.insertAdjacentHTML("beforeend", rowData);
    }
}

function saveData() {

}

function removeData(e) {
    e.parentElement.remove();
    getData();
}