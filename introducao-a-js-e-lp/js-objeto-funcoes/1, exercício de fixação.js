player = {
    name:'Marta',
    'last-name':'Silva',
    age: 34,
    medals:{
        golden:2,
        silver:3
    }
};

console.log('A jogadora ' + player['name'] + ' ' + player['last-name'] + ' tem ' + player['age'] + ' anos de idade.');

player['bestInTheWorld'] = [2006,2007,2008,2009,2010,2018];

console.log('A jogadora ' + player.name + ' ' + player['last-name'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');