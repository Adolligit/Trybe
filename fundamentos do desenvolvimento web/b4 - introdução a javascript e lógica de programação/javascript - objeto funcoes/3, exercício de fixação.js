// Recebe dois valores, um operador e depois retorna o resultado.
function calculation(x, y, operator){
    let result = 0;
    switch(operator){
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '/':
            return x / y;
            break;
        case '*':
            return x * y;
            break;
            case '%':
            return x % y;
            break;
        default:
            return 'Operador desconhecido';
            break;
    }
}

// Recebe dois valores e retorna o maior. 
function higherTheTwo(x, y){
    if(x > y) return x;
    else return y;
}

// Recebe três valores e retorna o maior.
function higherTheThree(x, y, z){
    if(x > y && x > z ) return x;
    else if(y > z) return y;
    else return z;
}

// Verificando se o valor é positivo, negativo ou zero.
function validation(x){
    if(x > 0) return 'Positivo';
    else if(x < 0) return 'Negativo';
    else return 'zero';
}

// Recebe três valores e retornar se formam um triângulo.
function validationTriangle(x, y, z){
    if((x + y + z) == 180) return true;
    else false;
}

// Recebendo nome da peça e informando os movimentos que executa.
function whichPiece(name){
    let nameAccent = name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Tirando os acentos.
    let nameLowerCase = nameAccent.toLowerCase();
    switch(nameLowerCase){
        case 'rei':
            return 'Horizontal, vertial e diagonal';
            break;
        case 'dama':
        case 'rainha':
            return 'Horizontal, vertial e diagonal';
            break;
        case 'bispo':
            return 'Diagonal';
        case 'cavalo':
            return 'Em forma de L';
        case 'torre':
            return 'Vertical e horizontal';
        case 'peao':
            return 'Vertical';
        default:
            return 'Peça desconhecida. Você realmente sabe jogar Xadrez?'
            break;
    }
}
console.log(whichPiece('raÍnha'));