import './style.css';

import { CardNota } from '../card-nota';
import { Component } from 'react';

export class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }
  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas.bind(this));
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas.bind(this));
  }

  novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.notas.map((nota, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
              <CardNota
                indice={index}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
                deletarNota={this.props.notas.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
