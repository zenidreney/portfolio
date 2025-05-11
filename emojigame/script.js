const characters = [
    "🐉",
    "🐥",
    "🐊",
    "🐶",
    "🦍",
    "🐢",
    "🐩",
    "🦭",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁"
];

let stringLength = 10;
let stringOne = document.getElementById("random-string");
let stringTwo = document.getElementById("random-string-2");
let btn = document.getElementById("btn");

function randomChar() {
    let rI = Math.floor(Math.random() * characters.length);
    return characters[rI];
}

/*
function generate() {
    let fullArray = "";
    for (let i = 0; i <= stringLength; i++) {
        fullArray += randomChar();
    }
    stringOne.textContent = fullArray;
}

function generateTwo() {
    let fullArray = "";
    for (let i = 0; i <= stringLength; i++) {
        fullArray += randomChar();
    }
    stringTwo.textContent = fullArray;
}

Combining these 2 functions with en element as an argument using event listener*/

function generate(el) {
    let fullArray = "";
    for (let i = 0; i <= stringLength; i++) {
        fullArray += randomChar();
    }
    el.textContent = fullArray;
}

btn.addEventListener("click", function () {
    generate(stringOne);
    generate(stringTwo);
});
