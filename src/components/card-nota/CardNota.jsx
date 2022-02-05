import './style.css';

import { Component } from 'react';

export class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">Título</h3>
        </header>
        <p className="card-nota_text">Escreva Sua nota</p>
      </section>
    );
  }
}
