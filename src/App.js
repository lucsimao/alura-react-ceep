import './App.css';

import { Component } from 'react';
import { FormularioCadastro } from './components/formulario-cadastro';
import { ListaDeNotas } from './components/lista-de-notas';

export default class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
