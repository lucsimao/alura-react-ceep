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
    this.inscritos.forEach((funcao) => funcao(this.categorias));
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
  }

  apagarNotas(indice) {
    this.notas.splice(indice, 1);
  }
}
