import { Component } from 'react';

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea cols="30" rows="10" placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}
