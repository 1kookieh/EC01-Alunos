// Aluno: Igor Santos Chediack Pimenta Bueno
// Professor: Daniel Correa da Silva
class Aluno {
  constructor(nome, idade, curso, notaFinal) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.notaFinal = notaFinal;
  }

  // Nota 7 já aprova.
  isAprovado() {
    return this.notaFinal >= 7;
  }

  toString() {
    return `${this.nome}, ${this.idade} anos, ${this.curso}, nota ${this.notaFinal} (${this.isAprovado() ? "Aprovado" : "Reprovado"})`;
  }
}
