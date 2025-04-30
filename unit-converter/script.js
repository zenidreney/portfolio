/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let button = document.getElementById("input-btn");
let inputEl = document.getElementById("input-field");
let lengthEl = document.getElementById("length-output");
let volumeEl = document.getElementById("volume-output");
let massEl = document.getElementById("mass-output");

console.log(lengthEl);

//const mtrtoft = 3.281
//const ltrtogall = 0.264
//const kgtopds = 2.204

button.addEventListener("click", function () {
    const value = inputEl.value;

    const metertofeets = value * 3.281;
    const feetstometers = value / 3.281;
    const literstogallons = value * 0.264;
    const gallonstoliters = value / 0.264;
    const kilostopounds = value * 2.204;
    const poundstokilos = value / 2.204;

    lengthEl.innerHTML = `
    <p id="length-output">${value} meters = ${metertofeets.toFixed(3)} feet | ${value} feet = ${feetstometers.toFixed(3)} meters</p>
    `;
    volumeEl.innerHTML = `
    <p id="volume-output">${value} liters = ${literstogallons.toFixed(3)} gallons | ${value} gallons = ${gallonstoliters.toFixed(3)} liters</p>
    `;
    massEl.innerHTML = `
    <p id="mass-output">${value} kilos = ${kilostopounds.toFixed(3)} pounds | ${value} pounds = ${poundstokilos.toFixed(3)} kilos</p>
    `;

    console.log(metertofeets);
});
