function printGreeting(name){
    console.log('Olá, ' + name);
}

let adelsonVariable = 'Adelson Lima';
printGreeting(adelsonVariable);

function makeGreeting(name){
    return 'E ai ' + name + '? Tudo bem com você?';
}

let greeting = makeGreting('Leandro');
console.log('greeting');

function sum(num1, num2){
    retrun num1 + num2;
}

function canDrive(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}