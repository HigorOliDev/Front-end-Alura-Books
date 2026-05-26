import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";
import { getFavoritos } from "../../servicos/favoritos";
import livroImg from "../../imagens/livro.png";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  min-height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;

  p {
    width: 100px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState(['']);
  const [livros, setLivros] = useState(['']);

  useEffect(() => {
    fetchLivro();
  }, []);

  async function fetchLivro() {
    const livrodDaAPI = await getLivros();
    setLivros(livrodDaAPI);
  }

  async function insertFavorito(id) {
    const favoritos =  await getFavoritos();
    const favoritoJaExiste = favoritos.some((favorito) => favorito.id === id);

    if(favoritoJaExiste){
      alert(` o livro com id: ${id} ja existe em favoritos`);
      return
    }
      await postFavorito(id);
      alert(` o livro com id: ${id} foi adicionado aos favoritos`);
  }

  return (
    <PesquisaContainer>
      <Titulo>Ja sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossas estantes.</Subtitulo>
      <Input
        placeholder="O que você deseja ler?"
        onKeyUp={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado),
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livroImg} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
export default Pesquisa;
