let singer ={
    name: 'Milton',
    'last-name':'Nascimento', // last-name esta em kabab case
    nickname: 'Bituca',
    age: 77,
    bestAlbus: ['Travessa','Clibe da Esquina', 'Minas'],
    bornInfo:{
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

// acessando last-name por meior de chaves
console.log('O cantor ' + singer.lastName + ' ' + singer['last-name'] + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['name'] + ' ' + singer['last-name'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);