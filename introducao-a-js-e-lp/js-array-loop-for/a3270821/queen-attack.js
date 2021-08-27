let queenRowPosition = 6;
let queenColumnPosition = 4;

let opponentRowPosition = 2;
let opponentColumnPosition = 4;

let canAttack = false;

if(queenRowPosition === opponentColumnPosition || queenColumnPosition === opponentColumnPosition){
    canAttack = true;
}

for(let upperRight = 1; upperRight < 8; upperRight++){
    let currentQueenRow = queenRowPosition + upperRight;
    let currentQueenColumn = queenColumnPosition + upperRight;
}
console.log('Pode atacar? ' + canAttack);