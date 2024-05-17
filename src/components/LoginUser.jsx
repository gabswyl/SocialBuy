import React from 'react'
import './LoginUser.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginUser = () => {

    const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    `

    const Forms = styled.form`
       display: flex;
    flex-direction: column;
    justify-content: center;
    `

    const names = [{
        label: "E-mail ou CPF/CPNJ",
        input: "Digite o e-mail ou CPF/CPNJ",
    },
    {
        label: "Insira a Senha",
        input: "Digite a senha",
    }
    ]

    const namesMap = names.map(nomes =>
        <Forms key={nomes.label}>
            <label>{nomes.label}</label>
            <input className='forminput' placeholder={nomes.input}></input>
        </Forms>
    )

    return (
        <ContainerLogin>
            {namesMap}
            <button className="entrarlogin">ENTRAR</button>
            <p className="separador-login">Ou</p>
            <button className='buttonig'>
                <a>
                    <FaInstagram size={'16px'} />
                    Entrar com Instagram
                </a>
            </button>
            <button className='buttonfb'>
                <a>
                <FaFacebook size={'16px'} />
                    Entrar com Facebook
                    </a>
                </button>
            <p>Não possui conta? <Link className='destacar' to="cadastro">Cadastre-se</Link></p>
        </ContainerLogin>
    )
}

export default LoginUser