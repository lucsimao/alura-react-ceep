import './style.css';

import { CardNota } from '../card-nota';
import { Component } from 'react';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
              <CardNota
                indice={index}
                titulo={nota.titulo}
                texto={nota.texto}
                deletarNota={this.props.deletarNota.bind(this)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
