import styled from 'styled-components';
import { useEffect, useState } from 'react';
import livroImg from '../imagens/livro.png';
import { getEstante } from '../servicos/estante';

const AppContainer = styled.div`
      width: 100vw;
      min-height: 100vh;
      background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`

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
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Estante() {
  const [estante, setEstante] = useState([])
 
  async function fetchEstante() {
    const estanteAPI = await getEstante()
    setEstante(estanteAPI)
  }

  useEffect(() => {
    fetchEstante()
  }, [])

  return (
    <AppContainer>
 <div>
       <Titulo>Bem Vindo a nossa estante de livros!</Titulo>
       <ResultadoContainer>
         {
           estante.length !== 0 ? estante.map(livroEstante => (
             <Resultado>
               <p>{livroEstante.nome}</p>
               <img src={livroImg}/>
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
    </AppContainer>
  );
}

export default Estante;
