import './style.css';

import { Component } from 'react';

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento?.target?.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento?.target?.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    console.log(`uma nova nova foi criada ${this.titulo} ${this.texto}`);
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select className="form-cadastro_input">
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
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
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
