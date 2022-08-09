const proceedBtn = document.getElementById("login-section-proceed-btn");
const optionPage = document.getElementById("option-section");
const loginPage = document.getElementById("login-section");
const pin = document.getElementById("pin");
const withdralBtn = document.getElementById("withdral-btn");
const withdrawlPage = document.getElementById("withdrawal-section");
const withdralProceedBtn = document.getElementById("withdral-proceed-btn")
const checkBalanceBtn = document.getElementById('check-balance-btn');
const topupBtn = document.getElementById("topup-btn");
const topupProceedBtn = document.getElementById("topup-proceed");
const transactionStatus = document.getElementById('final-output');
const transferBtn = document.getElementById("transfer-btn");
const transferProceedButton = document.getElementById('transfer-proceed');

let balance = 5000;
localStorage.setItem('balance', JSON.stringify(balance)); 
let password = 1234


proceedBtn.onclick = () => {
    if ( password === Number(pin.value)) {
        optionPage.style.display = 'flex';
        loginPage.style.display = 'none';
    }
    else {
        alert("invalid Password! try again")
    }
}

withdralBtn.onclick = () => {
    withdrawlPage.style.display = 'flex';
    optionPage.style.display = 'none';
    document.getElementById('withdraw-amount').value = '';
}

withdralProceedBtn.onclick = () => {
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    balance = balance - Number(withdrawAmount);
    localStorage.setItem("balance", JSON.stringify(balance));
    withdrawlPage.style.display = 'none';
    transactionStatus.style.display = 'flex';
}

checkBalanceBtn.onclick = () => {
    console.log('boy');
    optionPage.style.display = 'none';
    document.getElementById('balance-section').style.display = 'flex';
    document.querySelector('.available-balance').textContent = localStorage.getItem('balance');
}
topupBtn.onclick = () => {
    document.getElementById("topup-section").style.display = 'flex';
    optionPage.style.display = 'none';
}

topupProceedBtn.onclick = () => {
    let amount = document.getElementById("top-up-amount").value;
    balance = balance + amount;
    localStorage.setItem("balance", JSON.stringify(balance))
    transactionStatus.style.display = 'flex';
    document.getElementById("topup-section").style.display = 'none';
}

transferBtn.onclick = () => {
    document.getElementById("Transfer-section").style.display = 'flex';
    optionPage.style.display = 'none';
}

transferProceedButton.onclick = () => {
    let amount = document.getElementById("transfer-amount").value;
    balance = balance + amount;
    localStorage.setItem("balance", JSON.stringify(balance))
    transactionStatus.style.display = 'flex';
    document.getElementById("Transfer-section").style.display = 'none';
}


