
function addData() {
    const dateInput = document.getElementById('input-date');
    const incomeInput  = document.getElementById('input-income');
    const expendInput = document.getElementById('input-expend');
    
    const date = dateInput.value;
    const income = incomeInput.value;
    const expend = expendInput.value;
    
    const table = document.getElementById('table');
    
    const row = table.insertRow(-1),
    dateCell = row.insertCell(0),
    incomeCell = row.insertCell(1),
    expendCell = row.insertCell(2);
    
    const formatter = new Intl.NumberFormat('Id-id');
    
    dateCell.textContent = date;
    incomeCell.textContent = formatter.format(income);
    expendCell.textContent = formatter.format(expend);

    dateInput.value = '';
    incomeInput.value = '';
    expendInput.value = '';

    return
}