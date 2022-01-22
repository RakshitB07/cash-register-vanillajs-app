const billAmount = document.querySelector("#bill-amount");
const initializeBtn = document.querySelector("#initialize-btn");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector("#error-msg");
const availableNotes = [2000, 500, 100, 20 ,10 ,5 ,1];
const noOfNotes = document.querySelectorAll(".no-Of-Notes")







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

function calculateChange(amountToReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc (
            amountToReturn / availableNotes[i]
        );
        amountToReturn = amountToReturn % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function hideMsg () {
    errorMsg.style.display = "none";
}


function showErrorMsg (showMsg) {
    errorMsg.style.display = "block";
    errorMsg.innerText = showMsg;
}