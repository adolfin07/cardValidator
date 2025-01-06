
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

cardName.addEventListener('blur', function () {
    if (replaceName.textContent.trim() === '') {
        replaceName.textContent = cardDefaultName;
    }
});

cardNumber.addEventListener('keyup', function () {
    replaceNumber.innerText = cardNumber.value;

    let replaceLogo = document.querySelector(".replaceLogo");//imagen a cambiar
    let value = cardNumber.value.replace(/\s/g, "");

    if (cardNumber.value.startsWith('4')) {

        console.log('visa card');
        replaceLogo.src = "assets/images/visa.png";
        frontCard.style.filter = "brightness(0)";


    } else if (['51', '52', '53', '54', '55'].some(prefix => cardNumber.value.startsWith(prefix))) {

        console.log('mastercard card');
        replaceLogo.src = "assets/images/mastercard.png";
        frontCard.style.filter = "brightness(1)";

    } else if (cardNumber.textContent.trim() === '') {
        replaceLogo.src = "assets/images/card-logo.svg";
        frontCard.style.filter = "brightness(1)";
    }else{
        alert("Invalid Card");
    }

    let formattedValue = value.match(/.{1,4}/g)?.join(" ") || "";

    cardNumber.value = formattedValue; 



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



//face card slide

frontCard.addEventListener("click", () => {
    console.log("frontcard cliced");
});

backCard.addEventListener("click", () => {
    console.log("backcard cliced");

});








