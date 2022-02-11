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
        <FormularioCadastro categorias={this.categorias} notas={this.notas} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias} />
          <ListaDeNotas notas={this.notas} />
        </main>
      </section>
    );
  }
}
