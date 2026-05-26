import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
    display: flex;
    margin-left: 50px;
`
const Opcao = styled.li`
    font-size: 20px;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS','ESTANTE']


function OpcoesHeader() {
    return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
           <Link to={`/${texto.toLowerCase()}`} > <Opcao><p>{texto}</p></Opcao> </Link> 
          ) )}
        </Opcoes>
    )
}
 export default OpcoesHeader;

 