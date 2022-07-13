const people = [
  {name:'Mateus', age:18},
  {name:'José', age:16},
  {name:'Ana', age:23},
  {name:'Cláudia', age:20},
  {name:'Bruna', age:19}, 
];

function ageOrder(a, b){
  return b.age - a.age;
}

people.sort(ageOrder);

console.log(people);
