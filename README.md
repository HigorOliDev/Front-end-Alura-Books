# Alura Books

Projeto Frontend em React para exibir livros, com busca e seção de últimos lançamentos.

## Tecnologias

- React
- styled-components
- React Router DOM
- Axios
- React Scripts

## Visão geral

O app possui uma tela com:

- cabeçalho (`Header`)
- campo de pesquisa de livros (`Pesquisa`)
- lista de resultados de busca
- seção de últimos lançamentos (`UltimosLancamentos`)

## Estrutura principal

- `src/App.js` - componente principal
- `src/componentes/Pesquisa` - busca de livros
- `src/componentes/UltimosLancamentos` - seção de lançamentos
- `src/componentes/Header` - cabeçalho
- `src/componentes/Input` - campo de texto reutilizável
- `src/componentes/CardRecomenda` - cards de recomendações
- `src/componentes/Titulo` - títulos estilizados

## Instalação

Clone o repositório:
````
git clone https://github.com/HigorOliDev/Front-end-Alura-Books.git
````
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Uso

Para iniciar o app em modo de desenvolvimento:

```bash
npm start
```

Abra `http://localhost:3000` no navegador.
