/*
function doubleIt(num) {
    const resullt = num * 2;
    return resullt;
}
const first = doubleIt(5);
const second = doubleIt(7);
*/


function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //Clear the deposit input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {

    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;

}

function updateBalance(depositAmount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal - depositAmount;
    }
    else {
        const newBalanceTotal = previousBalanceTotal + depositAmount;
    }

}

// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    /*
    //handle deposit button event
    
    document.getElementById('deposit-button').addEventListener('click', function () {
    
        //get the amount deposite
    
            const depositInput = document.getElementById('deposit-input');
            const newDepositAmountText = depositInput.value;
            const newDepositAmount = parseFloat(newDepositAmountText);
        */


    /*
// Update deposit total

const depositTotal = document.getElementById('deposit-total');
const previousDepositAmountText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositAmountText);
const newDepositTotal = previousDepositAmount + depositAmount;
depositTotal.innerText = newDepositTotal;
*/

    // Update deposit total
    updateTotalField('deposit-total', depositAmount);


    /*
    //Update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    */

    //Update account balance
    updateBalance(depositAmount, true);

});


//Handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');

    /*
    //Handle withdraw event handler

        document.getElementById('withdraw-button').addEventListener('click', function () {
    
            const withdrawInput = document.getElementById('withdraw-input');
            const withdrawAmountText = withdrawInput.value;
            const newWithdrawAmount = parseFloat(withdrawAmountText);
            console.log(newWithdrawAmount);
    */


    /*
//set withdraw total

const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;
*/

    //set withdraw total
    updateTotalField('withdraw-total', withdrawAmount);

    //Update balance

    /*
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
*/


    updateBalance(withdrawAmount, false);


    /*
    //Clear withdraw input
    withdrawInput.value = '';
    */
});