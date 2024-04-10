const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.4.10/v1/currencies"
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromcurr = document.querySelector(".From select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector("#msg")

for (let select of dropdown) {
    for (let curr_code in countryList) {
        const newOption = document.createElement("option");
        newOption.innerText = curr_code;
        newOption.value = curr_code;
        if (select.name === "from" && curr_code === "USD") {
            newOption.selected = "selectd";
        }
        else if (select.name === "to" && curr_code === "PKR") {
            newOption.selected = "selected"


        }
        select.append(newOption)


    }
    select.addEventListener(("change"), (evt) => {
        updateSelect(evt.target);
    })
}


const updateSelect = (element) => {
    let elementValue = element.value;
    let countryCode = countryList[elementValue];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener(("click"), async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("#amount input");
    let val = amount.value;
    if (val === "" || val < 1) {
        val = 1;
        amount.value = "1"
    }
    let Fromcurr = fromcurr.value.toLowerCase();
    let Tocurr = tocurr.value.toLowerCase();
    let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Fromcurr}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[Fromcurr][Tocurr];
    console.log(rate)
    let finalAmount = val * rate;
    msg.innerText = `${val} ${Fromcurr} = ${finalAmount}   ${Tocurr}`
})