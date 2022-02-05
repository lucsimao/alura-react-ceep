import { CardNota } from './CardNota';
import { Component } from 'react';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
      </ul>
    );
  }
}
