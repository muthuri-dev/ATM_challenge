// Declaring variables

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
const finalNoBtn = document.getElementById("final-output-no");
const finalYesBtn = document.getElementById("final-output-yes");
let balance = 0;
localStorage.setItem('balance', JSON.stringify(balance)); 
let password = 1234


proceedBtn.onclick = () => {
    // checking for a non number input and input less  4 characters
    if ( password === Number(pin.value)) {
        optionPage.style.display = 'flex';
        loginPage.style.display = 'none';
    }
    else {
        alert("invalid Password! try again")
    }
    pin.value = '';
}

withdralBtn.onclick = () => {
    withdrawlPage.style.display = 'flex';
    optionPage.style.display = 'none';
    document.getElementById('withdraw-amount').value = '';
}

withdralProceedBtn.onclick = () => {
    const withdrawAmount = Number(document.getElementById('withdraw-amount').value);
    balance = Number(localStorage.getItem("balance"));
    if (withdrawAmount <=  balance) {
        balance = balance - Number(withdrawAmount);
        localStorage.setItem("balance", JSON.stringify(balance));
    } else {
        document.getElementById('transaction status').textContent = 'Transaction UnSuccessful';
        document.getElementById('hidden-message').style.display = 'block';
    }   
    document.getElementById('withdraw-amount').value = '';
    withdrawlPage.style.display = 'none';
    transactionStatus.style.display = 'flex';
}

checkBalanceBtn.onclick = () => {
    optionPage.style.display = 'none';
    document.getElementById('balance-section').style.display = 'flex';
    document.querySelector('.available-balance').textContent = Number(localStorage.getItem('balance'));
}
topupBtn.onclick = () => {
    document.getElementById("topup-section").style.display = 'flex';
    optionPage.style.display = 'none';
}

topupProceedBtn.onclick = () => {
    const topUpAmount = Number(document.getElementById("top-up-amount").value);
    balance += topUpAmount;
    localStorage.setItem("balance", JSON.stringify(balance));
    document.getElementById("top-up-amount").value = ''
    transactionStatus.style.display = 'flex';
    document.getElementById("topup-section").style.display = 'none';
}

transferBtn.onclick = () => {
    document.getElementById("Transfer-section").style.display = 'flex';
    optionPage.style.display = 'none';
}

transferProceedButton.onclick = () => {
    const transferAmount = Number(document.getElementById("transfer-amount").value);
    balance = Number(localStorage.getItem("balance"));
    if (transferAmount <=  balance) {
        balance = balance - transferAmount;
        localStorage.setItem("balance", JSON.stringify(balance));
    } else {
        document.getElementById('transaction status').textContent = 'Transaction UnSuccessful';
        document.getElementById('hidden-message').style.display = 'block';
    }   
    document.getElementById("transfer-amount").value = '';
    transactionStatus.style.display = 'flex';
    document.getElementById("Transfer-section").style.display = 'none';
}


finalNoBtn.onclick = () => {
    document.getElementById("appreciation-section").style.display = 'flex';
    document.getElementById("final-output").style.display = 'none';
}

finalYesBtn.onclick = () => {
    loginPage.style.display = 'flex';
    document.getElementById("final-output").style.display = 'none';
}


document.getElementById("balance-section-yes").onclick = () => {
    loginPage.style.display = 'flex';
    document.getElementById("balance-section").style.display = 'none';
}

document.getElementById("balance-section-no").onclick = () => {
    document.getElementById("appreciation-section").style.display = 'flex';
    document.getElementById("balance-section").style.display = 'none';
}

