import './style.css';

import { Component } from 'react';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

export class CardNota extends Component {
  deletarNota() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.props.deletarNota} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_text">{this.props.texto}</p>
      </section>
    );
  }
}
