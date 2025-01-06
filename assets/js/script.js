
let cardName = document.querySelector("#holderName");
let replaceName = document.querySelector(".replaceName");

let replaceNumber = document.querySelector(".replaceNumber");
let cardNumber = document.querySelector(".cardNumber");

let replaceCvv = document.querySelector(".replaceCvv");
let cardCvv = document.querySelector("#cardCvv");

let cardMonth = document.querySelector("#cardMonth");
let replaceMonth = document.querySelector(".replaceMonth");

let cardYear = document.querySelector("#cardYear");
let replaceYear = document.querySelector(".replaceYear");

let cardDefaultName = "Carlos Roberto"

let frontCard = document.querySelector("#frontCard");
let backCard = document.querySelector("#backCard");

cardName.addEventListener('keyup', function () {
    replaceName.innerText = cardName.value;

});
cardNumber.addEventListener('keyup', function () {
    replaceNumber.innerText = cardNumber.value;

});
cardCvv.addEventListener('keyup', function () {
    replaceCvv.innerText = cardCvv.value;

    if (cardCvv.value.length > 3) {
        cardCvv.value = cardCvv.value.slice(0, 3);
    }
});
cardMonth.addEventListener("keyup", () => {
    replaceMonth.innerHTML = cardMonth.value;

    if (cardMonth.value.length > 2) {
        cardMonth.value = cardMonth.value.slice(0, 2);
    }
});
cardYear.addEventListener("keyup", () => {
    replaceYear.innerHTML = cardYear.value;

    if (cardYear.value.length > 2) {
        cardYear.value = cardYear.value.slice(0, 2);
    }
});

cardName.addEventListener('blur', function () {
    if (replaceName.textContent.trim() === '') {
        replaceName.textContent = cardDefaultName;
    }
    console.log("has salido del input");
});

//face card slide

frontCard.addEventListener("click", () => {
    console.log("frontcard cliced");
});

backCard.addEventListener("click", () => {
    console.log("backcard cliced");
    backCard.classList.add("tofront");

});








