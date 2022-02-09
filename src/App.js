import { Component } from 'react';
import './App.css';
import { FormularioCadastro } from './components/formulario-cadastro';
import { ListaDeCategorias } from './components/lista-de-categorias';
import { ListaDeNotas } from './components/lista-de-notas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  adicionarCategoria(categoria) {
    this.state.categorias.push(categoria);
    this.setState(this.state);
    console.log(`uma nova categoria foi criada ${this.state}`);
  }

  criarNota(titulo, texto) {
    this.state.notas.push({ titulo, texto });
    this.setState({ notas: this.state.notas });
    console.log(`uma nova nova foi criada ${titulo} ${texto}`);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}
