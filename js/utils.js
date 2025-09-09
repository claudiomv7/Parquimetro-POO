// Funções auxiliares puras

export function formatarMoeda(valor) {
  return `R$ ${Number(valor).toFixed(2)}`;
}

export function criarMensagem(tempo, troco) {
  if (!tempo) {
    return "Valor insuficiente. Insira pelo menos R$ 1,00.";
  }
  return `Tempo concedido: ${tempo} minutos. Troco: ${formatarMoeda(troco)}.`;
}
