// Importar o Redux
// Criar um objeto para o estado inicial
// Criar uma função Reducer com um Switch baseado no segundo parâmetro (ACTION)
// Criar um "default parameter" no primeiro argumento (STATE) da função Reducer
// Criar o armazenamento dos estados (STORE) com a função "Redux.createStore(Reducer)"

const Redux = require('redux');
const INITIAL_STATE = {
  messageAfterEvent: "",
}

function Reducer (state = INITIAL_STATE, action) {
  switch(action.type){
    case "CLICK":
      return {
        ...state,
        messageAfterEvent: action.messageAfterEvent,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(Reducer);

store.dispatch({
  type: "CLICK",
  messageAfterEvent: "Cliquei no botão",
})

console.log(store.getState());