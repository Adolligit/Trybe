import logo from './logo.svg';
import './App.css';

const compromissos = ['Revisão', 'Momento Inicial', 'Conteúdo do Course', 'Aula ao Vivo', 'Exercícios', 'Fechamento']

function Task(value) {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    Task(compromissos.map((e, i, a) => {
      if (i < a.length-1) return `| ${e} `;
      return `| ${e} |`
    }))
  )
}

export default App;
