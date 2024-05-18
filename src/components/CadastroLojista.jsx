import React, { useEffect, useState } from 'react'
import iconUser from '../assets/user.png'
import Cadeado from '../assets/cadeado.png'
import Footer from './Footer'
import Modal from './Modal'
import styled from 'styled-components'


const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const LabelStyled = styled.label`
font-weight: bold;
`

const InputStyed = styled.input`
padding: 10px;
    border-radius: 8px;
    border: 2px solid #747474;
`

const SelectStyed = styled.select`
padding: 10px;
    border-radius: 8px;
    border: 2px solid #747474;
`

const FormDados = styled.div`
background-color: var(--branco);
    padding: 20px;
    width: 357px;
    border-radius: 20px;
`

const InfoName = styled.div`
   display: flex;
    align-items: center;
    gap: 10px;
`

const IconUser = styled.div`
background-color: var(--azul);
    text-align: center;
    width: 16px;
    height: 16px;
    border-radius: 20px;
`
const InfoDadosPessoais = styled.div`
display: flex;
    flex-direction: column;
    gap: 10px;
`

const InfoSensiveis = styled.div`
    display: flex;
    gap: 10px;

`
const InfoGenero = styled.div`
margin-top: 10px;
display: flex;
    gap: 10px;
`

const InfoGeneroCheckBox = styled.div`
 padding: 10px;
    border: 2px solid #747474;
    border-radius: 8px;
`

const CheckBoxLabel = styled.label`
margin-left: 5px;

`

const InfoLocal = styled.div`
display: flex;
    gap: 10px;

`

const DadosAcesso = styled.div`
display: flex;
    gap: 10px;
`

const Termos = styled.div`
  margin-top: 10px;
    margin-bottom: 10px;
`

const TermosSpan = styled.span`
 margin-left: 5px;
`

const Cadastro = styled.button`
  background-color: var(--verde);
    padding: 10px;
    border-radius: 10px;
    color: var(--branco);
    text-transform: uppercase;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`

const DivButton = styled.div`
display: flex;
justify-content: center;
`

const CadastroLojista = () => {
    const [openingModal, setOpeningModal] = useState(false);
    const [openingModalError, setOpeningModalError] = useState(false);
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [selectedCidade, setSelectedCidade] = useState('');
    const [nome, setNome] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [termosPrivacidade, setTermosPrivacidade] = useState(false);
    const [termosUso, setTermosUso] = useState(false);

    useEffect(() => {
        const fetchEstados = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                const data = await response.json();
                setEstados(data);
            } catch (error) {
                console.error('Erro ao carregar estados:', error);
            }
        };

        fetchEstados();
    }, []);

    useEffect(() => {
        const fetchCidades = async () => {
            if (selectedEstado !== '') {
                try {
                    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`);
                    const data = await response.json();
                    setCidades(data);
                } catch (error) {
                    console.error('Erro ao carregar cidades:', error);
                }
            }
        };

        fetchCidades();
    }, [selectedEstado]);

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleCpfCnpjChange = (event) => {
        setCpfCnpj(event.target.value);
    };

    const handleDataNascimentoChange = (event) => {
        setDataNascimento(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCelularChange = (event) => {
        setCelular(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleConfirmarSenhaChange = (event) => {
        setConfirmarSenha(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setSelectedEstado(event.target.value);
    };

    const handleCidadeChange = (event) => {
        setSelectedCidade(event.target.value);
    };

    const handleTermosPrivacidadeChange = () => {
        setTermosPrivacidade(!termosPrivacidade);
    };

    const handleTermosUsoChange = () => {
        setTermosUso(!termosUso);
    };

    const handleCloseErrorModal = () => {
        setOpeningModalError(false);
    };

    const handleSubmit = () => {
        if (
            nome.trim() === '' ||
            cpfCnpj.trim() === '' ||
            dataNascimento.trim() === '' ||
            email.trim() === '' ||
            celular.trim() === '' ||
            senha.trim() === '' ||
            confirmarSenha.trim() === '' ||
            selectedEstado === '' ||
            selectedCidade === '' ||
            !termosPrivacidade ||
            !termosUso
        ) {
            setOpeningModalError(true);
        }
        else {
            setOpeningModal(true);
        }
    };

    return (
        <>
            <FormContainer>
                <FormDados>
                    <InfoName style={{ marginTop: '25px', marginBottom: '15px', gap: '5px' }}>
                        <IconUser>
                            <img src={iconUser} alt="" />
                        </IconUser>
                        <strong>Dados Pessoais</strong>
                    </InfoName>

                    <InfoDadosPessoais>
                        <LabelStyled>Nome e sobrenome</LabelStyled>
                        <InputStyed onChange={handleNomeChange} type='text' placeholder='Digite o nome e o sobrenome' />


                        <InfoSensiveis>
                            <div>
                                <LabelStyled>CPF ou CPNJ</LabelStyled>
                                <InputStyed onChange={handleCpfCnpjChange} type='text' />
                            </div>
                            <div>
                                <LabelStyled>Data de nascimento</LabelStyled>
                                <InputStyed onChange={handleDataNascimentoChange} type='date' />
                            </div>
                        </InfoSensiveis>

                        <div>
                            <LabelStyled>Genêro</LabelStyled>
                            <InfoGenero>
                                <InfoGeneroCheckBox>
                                    <InputStyed type="checkbox" />
                                    <CheckBoxLabel>Masculino</CheckBoxLabel>
                                </InfoGeneroCheckBox>
                                <InfoGeneroCheckBox>
                                    <InputStyed type="checkbox" />
                                    <CheckBoxLabel>Feminino</CheckBoxLabel>
                                </InfoGeneroCheckBox>
                            </InfoGenero>
                        </div>

                        <InfoLocal>
                            <div>
                                <LabelStyled>Estado</LabelStyled>
                                <div>
                                    <SelectStyed value={selectedEstado} onChange={handleEstadoChange}>
                                        <option disabled value="">
                                            Selecione o seu estado
                                        </option>
                                        {estados.map(estado => (
                                            <option key={estado.id} value={estado.sigla}>
                                                {estado.nome}
                                            </option>
                                        ))}
                                    </SelectStyed>
                                </div>
                            </div>

                            <div>
                                <LabelStyled>Cidade</LabelStyled>
                                <div>
                                    <SelectStyed value={selectedCidade} onChange={handleCidadeChange}>
                                        <option disabled value="">
                                            Selecione a cidade
                                        </option>
                                        {cidades.map(cidade => (
                                            <option key={cidade.id} value={cidade.nome}>
                                                {cidade.nome}
                                            </option>
                                        ))}
                                    </SelectStyed>
                                </div>
                            </div>
                        </InfoLocal>
                    </InfoDadosPessoais>

                    <InfoName style={{ marginTop: '25px', marginBottom: '15px', gap: '5px' }}>
                        <IconUser style={{ backgroundColor: '#42BA2E' }}>
                            <img src={Cadeado} alt="" />
                        </IconUser>
                        <strong>Dados de acesso</strong>
                    </InfoName>


                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <LabelStyled>Nome da empresa</LabelStyled>
                        <InputStyed onChange={handleEmailChange} type='text' placeholder='Digite o nome da empresa' />
                    </div>
                    <DadosAcesso>
                        <div>
                            <LabelStyled>E-mail</LabelStyled>
                            <InputStyed onChange={handleEmailChange} type='text' />
                        </div>

                        <div>
                            <LabelStyled>Celular</LabelStyled>
                            <InputStyed onChange={handleCelularChange} type='text' />
                        </div>
                    </DadosAcesso>

                    <DadosAcesso>
                        <div>
                            <LabelStyled>Crie uma senha</LabelStyled>
                            <InputStyed onChange={handleSenhaChange} type='password' />
                        </div>

                        <div>
                            <LabelStyled>Confirme a senha</LabelStyled>
                            <InputStyed onChange={handleConfirmarSenhaChange} type='password' />
                        </div>
                    </DadosAcesso>

                    <Termos>
                        <div>
                            <InputStyed onChange={handleTermosPrivacidadeChange} type='checkbox' />
                            <TermosSpan>Li e concordo com os <b>Termos de Privacidade</b></TermosSpan>
                        </div>

                        <div>
                            <InputStyed onChange={handleTermosUsoChange} type='checkbox' />
                            <TermosSpan>Li e concordo com os <b>Termos de Uso do SocialBuy</b></TermosSpan>
                        </div>
                    </Termos>

                    <DivButton>
                        <Cadastro onClick={handleSubmit}>Cadastrar</Cadastro>
                    </DivButton>
                </FormDados>


            </FormContainer>
            <Modal
                title={"Confirme o Cadastro"}
                motivo={"Um e-mail de confirmação foi enviado para o seu correio eletrônico!"}
                titleError={"Formulário Inválido!"}
                motivoError={"Por favor, preencha todos os dados necessários para prosseguir."}
                isError={openingModalError}
                isLojista={openingModal}
                onClose={handleCloseErrorModal}
            />
        </>
    )
}

export default CadastroLojista