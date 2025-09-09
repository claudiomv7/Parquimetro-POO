// Classe responsável pela lógica do parquímetro
export class Parquimetro {
  constructor(valor) {
    this.valor = parseFloat(valor);
    this.tempo = 0;
    this.troco = 0;
  }

  calcularTempoETroco() {
    if (this.valor < 1) {
      return {
        mensagem: "Valor insuficiente. Insira pelo menos R$ 1,00."
      };
    }

    if (this.valor >= 3) {
      this.tempo = 120;
      this.troco = this.valor - 3;
    } else if (this.valor >= 1.75) {
      this.tempo = 60;
      this.troco = this.valor - 1.75;
    } else if (this.valor >= 1) {
      this.tempo = 30;
      this.troco = this.valor - 1;
    }

    return {
      tempo: this.tempo,
      troco: this.troco.toFixed(2),
      mensagem: `Tempo concedido: ${this.tempo} minutos. Troco: R$ ${this.troco.toFixed(2)}.`
    };
  }
}
