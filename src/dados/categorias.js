export default class Categorias {
  constructor() {
    this.categorias = [];
    this.inscritos = [];
  }

  inscrever(funcao) {
    this.inscritos.push(funcao);
  }

  notificar() {
    this.inscritos.forEach((funcao) => funcao(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
  }
}
