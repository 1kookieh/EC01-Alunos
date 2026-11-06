// Aluno: Igor Santos Chediack Pimenta Bueno
// Professor: Daniel Correa da Silva
const alunos = [];
// Posição do aluno em edição no array. Vale -1 quando é um cadastro novo.
let editando = -1;
let relatorioAtual = null;

const form = document.getElementById("form");
const corpo = document.getElementById("corpo");
const saida = document.getElementById("saida");
const botaoSalvar = document.getElementById("salvar");
const vazio = document.getElementById("vazio");

const celula = (linha, texto) => {
  const td = document.createElement("td");
  td.textContent = texto;
  linha.appendChild(td);
  return td;
};

const botao = (texto, acao) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = texto;
  b.addEventListener("click", function () {
    acao();
  });
  return b;
};

const renderizar = () => {
  corpo.innerHTML = "";
  vazio.hidden = alunos.length > 0;
  alunos.forEach((a, i) => {
    const tr = document.createElement("tr");
    celula(tr, a.nome);
    celula(tr, a.idade);
    celula(tr, a.curso);
    celula(tr, a.notaFinal);
    celula(tr, a.isAprovado() ? "Aprovado" : "Reprovado");
    const acoes = document.createElement("td");
    acoes.appendChild(botao("Editar", () => editar(i)));
    acoes.appendChild(botao("Excluir", () => excluir(i)));
    tr.appendChild(acoes);
    corpo.appendChild(tr);
  });
  atualizarRelatorio();
};

const limpar = () => {
  form.reset();
  editando = -1;
  botaoSalvar.textContent = "Cadastrar";
};

const salvarAluno = () => {
  if (!form.reportValidity()) return;
  const aluno = new Aluno(
    form.elements.nome.value.trim(),
    Number(form.elements.idade.value),
    form.elements.curso.value,
    Number(form.elements.notaFinal.value)
  );
  if (editando >= 0) {
    alunos[editando] = aluno;
    alert(`Aluno editado: ${aluno}`);
    console.log("Editado:", aluno.toString());
  } else {
    alunos.push(aluno);
    alert(`Aluno cadastrado: ${aluno}`);
    console.log("Cadastrado:", aluno.toString());
  }
  limpar();
  renderizar();
};

const editar = (i) => {
  const a = alunos[i];
  form.elements.nome.value = a.nome;
  form.elements.idade.value = a.idade;
  form.elements.curso.value = a.curso;
  form.elements.notaFinal.value = a.notaFinal;
  editando = i;
  botaoSalvar.textContent = "Salvar edição";
};

const excluir = (i) => {
  const [removido] = alunos.splice(i, 1);
  // Excluiu o aluno em edição: limpa o form. Excluiu um que vem antes: a posição da edição anda uma casa.
  if (editando === i) limpar();
  else if (editando > i) editando--;
  alert(`Aluno excluído: ${removido}`);
  console.log("Excluído:", removido.toString());
  renderizar();
};

// Lista vazia daria divisão por zero, então devolve 0.
const media = (valores) =>
  valores.length ? valores.reduce((soma, v) => soma + v, 0) / valores.length : 0;

const relatorios = {
  aprovados: () =>
    "Aprovados:\n" +
    (alunos.filter((a) => a.isAprovado()).map((a) => a.toString()).join("\n") || "Nenhum aluno aprovado."),
  mediaNotas: () => `Média das notas finais: ${media(alunos.map((a) => a.notaFinal)).toFixed(2)}`,
  mediaIdades: () => `Média das idades: ${media(alunos.map((a) => a.idade)).toFixed(2)}`,
  // O map já cria uma lista nova, então o sort não mexe no array original. O localeCompare ordena certo com acento.
  ordem: () =>
    "Alunos em ordem alfabética:\n" +
    (alunos.map((a) => a.nome).sort((x, y) => x.localeCompare(y)).join("\n") || "Nenhum aluno cadastrado."),
  porCurso: () => {
    const contagem = alunos.reduce((acc, a) => ({ ...acc, [a.curso]: (acc[a.curso] || 0) + 1 }), {});
    const linhas = [];
    Object.entries(contagem).forEach(([curso, qtd]) => linhas.push(`${curso}: ${qtd}`));
    return "Alunos por curso:\n" + (linhas.join("\n") || "Nenhum aluno cadastrado.");
  },
};

const atualizarRelatorio = () => {
  if (relatorioAtual) saida.textContent = relatorios[relatorioAtual]();
};

botaoSalvar.addEventListener("click", function () {
  salvarAluno();
});

document.getElementById("cancelar").addEventListener("click", function () {
  limpar();
});

document.querySelectorAll("[data-relatorio]").forEach((b) => {
  b.addEventListener("click", function () {
    relatorioAtual = b.dataset.relatorio;
    atualizarRelatorio();
  });
});
