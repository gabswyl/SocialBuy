import React from 'react'
import consumidorIcon from '../assets/consumidor.png'
import lojistaIcon from '../assets/lojista.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
color: #fff;
    font-size: 64px;
    text-align: center;
   padding-top: 60px;
    margin-bottom: 60px;
`

const CadastroDiv = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -200px;
`

const Options = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--branco);
    width: 350px;
    height: 496px;
    margin: 20px;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;
`

const ImgDiv = styled.div`
background-color: var(--branco);
    border-radius: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;
    margin-top: -50px;
    margin-bottom: 20px;
`

const Strong = styled.strong`
text-transform: uppercase;
    border-radius: 20px;
    color: var(--branco);
    padding: 5px 10px;
    font-size: 1.8rem;
    border: none;
`

const Cadastrar = styled(Link)`
text-transform: uppercase;
    border-radius: 20px;
    color: var(--branco);
    padding: 5px 10px;
    font-size: 1.8rem;
    border: none;
    margin-top: 20px;
    text-decoration: none;
`

const Span = styled.p`
font-size: 1.5rem;
    text-align: center;
`

const Cadastro = () => {

    const optionsList = [{
        icon: consumidorIcon,
        name: 'consumidor',
        description: "Deseja apenas navegar pelo SocialBuy, procurando pelos seus produtos favoritos e lojistas perto de voce?",
        color: '#3247B3',
        href: "/cadastroconsumidor"
    },
    {
        icon: lojistaIcon,
        name: 'lojista',
        description: "Deseja anunciar a sua loja do Instagram, Facebook ou outra rede social, captando clientes de várias partes do país ainda que o seu negócio seja pouco conhecido na sua região?",
        color: '#E70066',
        href: "/cadastrolojista"
    },
    ]

    const options = optionsList.map((option => (
        <Options key={option.name}>
            <ImgDiv>
                <img src={option.icon} />
            </ImgDiv>
            <Span>Cadastrar como</Span>
            <Strong style={{ backgroundColor: option.color }}>{option.name}</Strong>
            <Span>{option.description}</Span>

            <Cadastrar to={option.href} style={{ backgroundColor: option.color }}>Cadastrar-se</Cadastrar>
        </Options>
    )))


    return (
        <section>
            <Title>Se registre no <br />SocialBuy!</Title>
            <CadastroDiv>
                {options}
            </CadastroDiv>
        </section>
    )
}

export default Cadastro