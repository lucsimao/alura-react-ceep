import './App.css';

import ArrayDeNotas from './dados/notas';
import Categorias from './dados/categorias';
import { Component } from 'react';
import { FormularioCadastro } from './components/formulario-cadastro';
import { ListaDeCategorias } from './components/lista-de-categorias';
import { ListaDeNotas } from './components/lista-de-notas';

export default class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            notas={this.notas.notas}
            deletarNota={this.notas.apagarNotas}
          />
        </main>
      </section>
    );
  }
}
