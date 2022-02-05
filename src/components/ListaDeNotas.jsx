import { CardNota } from './CardNota';
import { Component } from 'react';
export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Família', 'Estudos').map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
