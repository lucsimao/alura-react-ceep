import './style.css';

import { Component } from 'react';

export class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
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
