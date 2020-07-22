function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = (isNaN(amountNumber)) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
    
}

function showSumPrice(price, amountNumber) {
    amountNumber= amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 db terméket kell vásárolnia!");
    } else {
        let amount = amountNumber*price;
        showAmount.innerHTML = amount;
    }
    
}
// add help Text.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adjam meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);
//Delet
parent.removeChild(helpText);


//window event
let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
    alert("Hello JS!");
}
*/
/*
sendButton.addEventListener("click", function() {
    alert("Hello JS!");
});
*/
//Ürlap események

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.prevenDefault();
    
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i < inputs.leght; i++) {
        values[inputs[i].name] = inputs[i].value;
    }

    console.log("values");
});






