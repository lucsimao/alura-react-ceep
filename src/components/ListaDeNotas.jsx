import { CardNota } from './card-nota/CardNota';
import { Component } from 'react';
export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Família', 'Estudos').map((categoria, index) => {
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
