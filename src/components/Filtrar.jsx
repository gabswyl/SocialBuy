import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import styled from 'styled-components';


const NavStyled = styled.nav`
padding: 10px;
border-bottom: 1px solid black;
`

const FiltracaoDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 8px;
background: none;
max-width: 150px;
padding: 5px;
border: 2px solid black;
cursor: pointer;
`

const UlStyled = styled.ul`
position: absolute;
background-color: var(--branco);
width: 150px;
z-index: 999;
border-radius: 8px;
padding: 5px;
gap: 10px;
`

const LiStyled = styled.li`
cursor: pointer;
list-style-type: none;
padding: 5px;

&:hover {
    background-color: var(--azul);
    color: var(--branco)
}
`


const Filtrar = () => {

    const opcoes = ["Camisetas", "Short", "Figure", "Acessórios", "Cueca", "Camisetas", "Moletons"]
    const [MostrarOpcoes, setMostrarOpcoes] = useState(false)

    const ativarOpcoes = () => {
        setMostrarOpcoes(!MostrarOpcoes);
      };

    return (
        <NavStyled>
            <FiltracaoDiv onClick={ativarOpcoes}>
                <strong style={{opacity: "50%"}}>Filtrar</strong>
                <IoMenu size={"32px"} />
            </FiltracaoDiv>
            {MostrarOpcoes &&
                <UlStyled>
                    {opcoes.map((opcao, index) => (
                        <LiStyled key={index}>{opcao}</LiStyled>
                    ))}
                </UlStyled>
            }
        </NavStyled>
    )
}

export default Filtrar