import './style.css';

import { Component } from 'react/cjs/react.development';

export class ListaDeCategorias extends Component {
  handleEventoInput(evento) {
    if (evento.key === 'Enter') {
      const valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}
