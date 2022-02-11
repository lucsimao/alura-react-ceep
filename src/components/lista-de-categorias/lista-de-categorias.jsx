import './style.css';

import { Component } from 'react/cjs/react.development';

export class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  handleEventoInput(evento) {
    if (evento.key === 'Enter') {
      const valorCategoria = evento.target.value;
      this.props.categorias.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
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
