var statusCarro = 'desligado';
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar(){
    if(statusCarro === 'desligado'){
        statusCarro = 'ligado';
    }else{
        statusCarro = 'desligado';
    }

    return statusCarro;
}

function acelerar(incremento){
    aceleracao += incremento;

    return 'Acelerando a ' + aceleracao + 'm/s²';
}

function frear(decremento){
    aceleracao -= decremento;

    return 'Desacelarando para ' + aceleracao + 'm/s²';
}

function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;
    return rotacaoDoVolante + '°';
}

ligarDesligar();
acelerar(20);
girarVolante(-45);
frear(5);
girarVolante(0);
frear(15);
ligarDesligar();