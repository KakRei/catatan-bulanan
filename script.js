
function addData() {
    const dateInput = document.getElementById('input-date');
    const incomeInput  = document.getElementById('input-income');
    const expendInput = document.getElementById('input-expend');

    const date = dateInput.value;
    const income = incomeInput.value;
    const expend = expendInput.value;
    
    const tDate = document.getElementById('table-date');
    const tIncome = document.getElementById('table-income');
    const tExpend = document.getElementById('table-expend');

    tDate.textContent = date
    tIncome.textContent = income
    tExpend.textContent = expend

    dateInput.value = '';
    incomeInput.value = '';
    expendInput.value = '';

    return
}