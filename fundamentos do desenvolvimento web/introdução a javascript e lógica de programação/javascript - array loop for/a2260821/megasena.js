// Nosso jogo
let priscilaGame = [7,21,33,45,56,60];

let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) +1;
let thridNumber = Math.floor(Math.random() * 60) + 1;
let fouthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [firstNumber, secondNumber, thridNumber, fouthNumber, fifthNumber, sixthNumber];

console.log("Jogo da Pri: " + priscilaGame);
console.log("Jogo sorteado: " + megaSenaNumbers)