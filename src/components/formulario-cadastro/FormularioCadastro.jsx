import { Component } from 'react';
import './style.css';

export class FormularioCadastro extends Component {
  constructor() {
    this.titulo = '';
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento?.target?.value;
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          className="form-cadastro_input"
          cols="30"
          rows="15"
          placeholder="Escreva sua nota..."
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
