//pedidos de pizza
let pizzas = {
    sabor:'Plamito',
    preco: 39.90,
    bordaCaptupiry:true
};

//mesma coisa que for each no java 
for (let key in pizzas){
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
}