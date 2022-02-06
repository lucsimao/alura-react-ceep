import { Component } from 'react';
import { CardNota } from '../card-nota';
import './style.css';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}
