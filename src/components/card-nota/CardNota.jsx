import './style.css';

import { Component } from 'react';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

export class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.titulo}</h3>
          <DeleteSVG />
        </header>
        <p className="card-nota_text">{this.props.texto}</p>
      </section>
    );
  }
}
