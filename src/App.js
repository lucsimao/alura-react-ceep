import './App.css';

import { Component } from 'react';
import { FormularioCadastro } from './components/formulario-cadastro/FormularioCadastro';
import { ListaDeNotas } from './components/lista-de-notas/ListaDeNotas';

export default class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
