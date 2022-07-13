function raffle(number, func) {
  const drawn = parseInt(Math.random() * 5);
  return func(number, drawn) ? "Parabéns você ganhou" : "Tente novamente";
}

function verify(number1, number2){
  return number1 === number2;
}