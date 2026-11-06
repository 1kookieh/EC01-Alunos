# EC01 - Gerenciamento de Alunos (DevTech Academy)

Aluno: Igor Santos Chediack Pimenta Bueno
Professor: Daniel Correa da Silva
Disciplina: Tecnologia e Construção de Software I

## Sobre

Sistema web para cadastrar, listar, editar e excluir alunos de uma escola de programação, com relatórios sobre os dados cadastrados. Feito em HTML e JavaScript puro, sem CSS e sem bibliotecas. Os dados ficam em memória, então somem ao recarregar a página.

O que o sistema faz:

- Formulário com nome, idade, curso (JavaScript, Python ou Java) e nota final.
- Tabela com os alunos cadastrados e botões Editar e Excluir em cada linha.
- Classe `Aluno` com os métodos `isAprovado()` (nota >= 7) e `toString()`.
- Eventos com `addEventListener`, funções anônimas e arrow functions, com mensagens por `alert()` e `console.log()` ao salvar, editar e excluir.
- Relatórios com `filter`, `map`, `reduce`, `sort` e `forEach`: alunos aprovados, média das notas, média das idades, nomes em ordem alfabética e quantidade de alunos por curso. O relatório aberto se atualiza sozinho quando os dados mudam.

## Exercícios do enunciado

- Exercício 1: formulário, tabela e array em memória em `index.html` e `app.js`.
- Exercício 2: classe `Aluno` em `Aluno.js`, com construtor, `isAprovado()` e `toString()`.
- Exercício 3: `addEventListener` com funções anônimas nos cliques e arrow functions na manipulação dos dados, com `alert()` e `console.log()` ao salvar, editar e excluir, em `app.js`.
- Exercício 4: relatórios com `filter`, `map`, `reduce`, `sort` e `forEach`, no objeto `relatorios` em `app.js`.

## Como testar

Cadastre alguns alunos pelo formulário, clique em Editar para mudar a nota de um deles e em Excluir para remover outro. Depois use os botões de relatório para ver os aprovados, as médias, a lista em ordem alfabética e a quantidade por curso.

## O que baixar

- Git, para clonar o repositório: https://git-scm.com/downloads
- Docker Desktop, para rodar em container: https://www.docker.com/products/docker-desktop
- Um navegador comum (Chrome, Edge ou Firefox).

## Como rodar com Docker

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/1kookieh/EC01-Alunos.git
cd EC01-Alunos
```

Abra o Docker Desktop, espere ele iniciar e suba o container:

```bash
docker compose up --build
```

Acesse http://localhost:8080 no navegador.

Se a porta 8080 já estiver em uso, troque o primeiro número de `"8080:80"` no `docker-compose.yml`.

Para parar:

```bash
docker compose down
```

## Como rodar sem Docker

Basta abrir o arquivo `index.html` no navegador. Não precisa instalar nada.

## Arquivos

- `index.html`: formulário, tabela e botões de relatório.
- `Aluno.js`: classe `Aluno`.
- `app.js`: cadastro, edição, exclusão, renderização da tabela e relatórios.
- `Dockerfile`: imagem com nginx servindo os arquivos.
- `docker-compose.yml`: sobe o container na porta 8080.
