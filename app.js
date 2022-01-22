const billAmount = document.querySelector("#bill-amount");
const initializeBtn = document.querySelector("#initialize-btn");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector("#error-msg");



initializeBtn.addEventListener("click", function validateBillAndCashAmount() {
    hideMsg();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn);

        } else {
            showErrorMsg("Give some more cash unless you want to mop the floor.");

        }

    } else {
        showErrorMsg ("Invalid bill amount");
        
    }
});

function hideMsg () {
    errorMsg.style.display = "none";
}


function showErrorMsg (showMsg) {
    errorMsg.style.display = "block";
    errorMsg.innerText = showMsg;
}