export class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}

export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this.inscritos = [];
  }

  inscrever(funcao) {
    this.inscritos.push(funcao);
  }

  notificar() {
    this.inscritos.forEach((funcao) => funcao(this.notas));
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }
}
