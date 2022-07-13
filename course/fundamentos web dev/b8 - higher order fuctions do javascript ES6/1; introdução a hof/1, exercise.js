const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

function register(name){
  
  email = name.split(" ").join("").toLowerCase();

  return {
    nomeCompleto: name,
    email: `${email}@trybe.com`,
  };
}

console.log(newEmployees(register));