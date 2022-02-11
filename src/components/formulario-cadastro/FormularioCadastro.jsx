import './style.css';

import { Component } from 'react';

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem Categoria';
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias.bind(this));
  }
  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento?.target?.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento?.target?.value;
  }

  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento?.target?.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.notas.adicionarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
          {this.props.categorias.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
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
