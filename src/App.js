import { Component } from 'react';
import './App.css';
import { FormularioCadastro } from './components/formulario-cadastro';
import { ListaDeNotas } from './components/lista-de-notas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    this.state.notas.push({ titulo, texto });
    this.setState({ notas: this.state.notas });
    console.log(`uma nova nova foi criada ${titulo} ${texto}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
