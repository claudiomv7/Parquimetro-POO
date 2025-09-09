import { Parquimetro } from "./classes.js";
import { criarMensagem } from "./utils.js";

// Seleção de elementos
const form = document.getElementById("form-parquimetro");
const inputValor = document.getElementById("valor");
const resultadoDiv = document.getElementById("resultado");

// Evento de submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = inputValor.value;
  const parquimetro = new Parquimetro(valor);

  const resultado = parquimetro.calcularTempoETroco();

  // Cria mensagem formatada com função auxiliar
  resultadoDiv.textContent = criarMensagem(resultado.tempo, resultado.troco);
});
