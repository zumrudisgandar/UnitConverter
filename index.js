let valueEl = document.querySelector("#value-el");
let lengthEl = document.querySelector("#length");
let volumeEl = document.querySelector("#volume");
let massEl = document.querySelector("#mass");
const convertBtn = document.querySelector("#convert-btn")

convertBtn.addEventListener('click', function() {
    let lengthUnit = "";
    lengthUnit += `${valueEl.value} meters = ${(valueEl.value * 3.28084).toFixed(3)} feet | ${valueEl.value} feet = ${(valueEl.value * 0.3048).toFixed(3)} meters`
    lengthEl.innerHTML = lengthUnit;

    let volumeUnit = "";
    volumeUnit += `${valueEl.value} liters = ${(valueEl.value * 0.26417).toFixed(3)} gallons | ${valueEl.value} gallons = ${(valueEl.value * 3.7854).toFixed(3)} liters`
    volumeEl.innerHTML = volumeUnit;

    let massUnit = "";
    massUnit += `${valueEl.value} kilos = ${(valueEl.value * 2.20462).toFixed(3)} pounds | ${valueEl.value} pounds = ${(valueEl.value * 0.453592).toFixed(3)} kilos`
    massEl.innerHTML = massUnit;

});