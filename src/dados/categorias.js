export default class Categorias {
  constructor() {
    this.categorias = [];
    this.inscritos = [];
  }

  inscrever(funcao) {
    this.inscritos.push(funcao);
  }

  desinscrever(funcao) {
    this.inscritos = this.inscritos.filter((f) => f !== funcao);
  }

  notificar() {
    this.inscritos.forEach((funcao) => funcao(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
