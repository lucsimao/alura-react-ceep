import './style.css';

import { CardNota } from '../card-nota';
import { Component } from 'react';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-de-notas">
        {Array.of('Trabalho', 'Família', 'Estudos').map((categoria, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
