import './CardNota.css';

import { Component } from 'react';

export class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>Título</h3>
        </header>
        <p>Escreva Sua nota</p>
      </section>
    );
  }
}
