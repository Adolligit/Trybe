import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends React.Component {
  RenderizaConteudos(conteudosArr) {
    return (
      <ol>{
          conteudosArr.map(({ conteudo, bloco, status }) =>
          <li key={conteudo}>{  
            `O conteúdo é: ${conteudo}
              Status: ${status}
              Bloco: ${bloco}`
           }</li>)
        }
      </ol>
    );
  }

  render() {
    return(
        this.RenderizaConteudos(conteudos)
    );
  }
}