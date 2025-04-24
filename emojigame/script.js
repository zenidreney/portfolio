const characters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
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

function randomChar() {
    let rI = Math.floor(Math.random() * characters.length);
    return characters[rI];
}

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
