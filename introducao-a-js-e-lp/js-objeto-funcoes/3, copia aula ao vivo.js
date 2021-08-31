function generateRandomNumber(){
    return Math.floor(Math.random() * 60 + 1);
}

function generateGame(){
    let megaSenaDraw = [];

    for(let i = 0; i < 6; i++){
        megaSenaDraw[i] = generateRandomNumber();
    }

    return megaSenaDraw;
}

console.log(generateGame());