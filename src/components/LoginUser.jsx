import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    `

const Forms = styled.form`
       display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    `

const Input = styled.input`
        padding: 10px;
    border-radius: 5px;
    border: 2px solid #747474;
    width: 100%;
    `

const SeparadorDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    `

const Separador = styled.hr`
   border: 0;
    height: 1px;
    flex: 1;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
    margin: 0 10px;
    `


const ButtonAzul = styled.button`
width: 200px;
background-color: #2E45BA;
border: none;
border-radius: 45px;
padding: 10px 10px;
color: #fff;
cursor: pointer;
display: flex;
justify-content: center;
    align-items: center;
    gap: 5px;
`

const Button = styled(Link)`
text-decoration: none;
width: 200px;
background-color: #E70066;
border: none;
border-radius: 45px;
padding: 10px 10px;
color: #fff;
cursor: pointer;

&:hover {
  background-color: #D96297;
  border: none;
}

display: flex;
justify-content: center;
    align-items: center;
    gap: 5px;

`
const StyledLink = styled(Link)`
gap: 20px;
border-radius: 8px;
cursor: pointer;
border: none;
color: var(--branco);
padding: 10px;
background-color: var(--rosa);
`;

const LoginUser = () => {


    const names = [{
        label: "E-mail ou CPF/CPNJ",
        input: "Digite o e-mail ou CPF/CPNJ",
    },
    {
        label: "Insira a Senha",
        input: "Digite a senha",
    }
    ]

    const namesMap = names.map(nomes => (
        <div key={nomes.label}>
            <label>{nomes.label}</label>
            <Input placeholder={nomes.input}></Input>
        </div>
    ));

    return (
        <ContainerLogin>
            <Forms>
                {namesMap}
            </Forms>

            <Button to="/principal">ENTRAR</Button>
            <SeparadorDiv>

                <Separador />
                <p>Ou</p>
                <Separador />
            </SeparadorDiv>
            <Button>
                <FaInstagram size={'16px'} />
                Entrar com Instagram
            </Button>
            <ButtonAzul>
                <FaFacebook size={'16px'} />
                Entrar com Facebook
            </ButtonAzul>
            <p>Não possui conta? <StyledLink to="cadastro">Cadastre-se</StyledLink></p>
        </ContainerLogin>
    )
}

export default LoginUser