import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DivDados = styled.div`
  background-color: var(--branco);
  padding: 20px;
  width: 357px;
  border-radius: 20px;
`;

const Title = styled.div`
  display: flex;
  gap: 10px;
`;

const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const LabelStyled = styled.label`
  font-weight: bold;
`;

const InputStyled = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #747474;
`;

const CheckDiv = styled.div`
  gap: 10px;
`;

const Termos = styled.div`
  margin: 10px 0;
  padding: 10px;
`;

const TermosSpan = styled.span`
  margin-left: 5px;
`;

const Cadastro = styled.button`
  background-color: var(--verde);
  padding: 10px;
  border-radius: 10px;
  color: var(--branco);
  text-transform: uppercase;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 auto;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const DadosLojista = () => {
  const [openingModal, setOpeningModal] = useState(false);
  const [openingModalError, setOpeningModalError] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const [isQuase, setIsQuase] = useState(false);
  const [isAnalise, setIsAnalise] = useState(false);
  const [isBanido, setIsBanido] = useState(false)
  const allInputs = useRef(null);

  const handleCloseModal = () => {
    setOpeningModal(false);
    setOpeningModalError(false);
    setNextModal(false);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      const hasEmptyInput = Array.from(allInputs.current.querySelectorAll('input[type="text"]'))
        .some(input => input.value === '');

      if (hasEmptyInput) {
        setOpeningModalError(true);
      } else {
        setOpeningModal(true); 
      }
    }, 0);
  };

  const handleChangeModal = () => {
    setOpeningModal(false);
    setNextModal(true);
  };

  const handleChangeModalQuase = () => {
    setNextModal(false);
    setIsQuase(true);
};

const handleChangeModalAnalise = () => {
  setIsQuase(false);
  setIsAnalise(true)
};

const handleChangeModalBanido = () => {
  setIsAnalise(false);
  setIsBanido(true)
}

  const infoDados = [
    {
      label: "Qual é o seu instagram?",
      input: "Insira o link",
      checkbox: "instagram"
    },
    {
      label: "Qual é o seu Linkedln?",
      input: "Insira o link",
      checkbox: "linkedln"
    },
    {
      label: "Qual é o seu Marketplace (Facebook)?",
      input: "Insira o link",
      checkbox: "marketplace"
    },
    {
      label: "Qual é o seu site próprio da empresa?",
      input: "Insira o link",
      checkbox: "site próprio"
    },
    {
      label: "Qual é o seu reclameaqui?",
      input: "Insira o link",
      checkbox: "reclameaqui"
    }
  ];

  const infomap = infoDados.map((info, index) => (
    <DadosContainer key={index}>
      <LabelStyled>{info.label}</LabelStyled>
      <InputStyled 
        type='text' 
        placeholder={info.input} 
      />
      <CheckDiv>
        <InputStyled 
          style={{ marginRight: '5px' }} 
          type='checkbox'
        />
        <span>Não possuo {info.checkbox}</span>
      </CheckDiv>
    </DadosContainer>
  ));

  return (
    <>
      <SectionContainer>
        <DivDados ref={allInputs}>
          <Title>
            <img alt="icon" />
            <strong>Dados para registro de Lojista</strong>
          </Title>

          <div>
            {infomap}
          </div>

          <Termos>
            <div>
              <InputStyled type='checkbox' />
              <TermosSpan>Li e concordo com os <b>Termos de Privacidade</b></TermosSpan>
            </div>

            <div>
              <InputStyled type='checkbox' />
              <TermosSpan>Li e concordo com os <b>Termos de Uso do SocialBuy</b></TermosSpan>
            </div>
          </Termos>

          <DivButton>
            <Cadastro onClick={handleSubmit}>Continuar</Cadastro>
          </DivButton>
        </DivDados>
      </SectionContainer>
      <Modal
        title={"Confirmação de Cadastro"}
        motivo={"Suas informações serão analisadas por um de nossos moderadores! Após aprovação, você receberá um e-mail de confirmação, selo de verificação e poderá anunciar seus produtos em nosso site."}
        motivo2={"OBS: Alterações nos links das redes sociais requerem aprovação de um moderador antes de poder anunciar em nosso site novamente."}
        titleError={"Formulário Inválido!"}
        motivoError={"Por favor, preencha todos os dados necessários para prosseguir."}
        isError={openingModalError}
        isConfirmation={openingModal}
        nextModal={nextModal}
        onClose={handleCloseModal}
        onChangeModal={handleChangeModal}
        isQuase={isQuase}
        onChangeModalQuase={handleChangeModalQuase}
        titleQuase={"Quase lá!"}
        motivoQuase={"Você já é quase um lojista da nossa comunidade! Falta apenas aguardar pela análise dos nossos moderadores. Qualquer dúvida, entre em contato conosco através do nosso e-mail info@socialbuy.com"}
        titleAnalise={"Bem vindo!"}
        motivoAnalise={"Seu registro foi analisado e aprovado por um dos nossos moderadores! Agora você já pode anunciar seus produtos no nosso site!"}
        onChangeModalAnalise={handleChangeModalAnalise}
        isAnalise={isAnalise}
        titleBanido={"BANIDO!"}
        motivoBanido={"Seu registro foi analisado e reprovado por um dos nossos moderadores!"}
        onChangeModalBanido={handleChangeModalBanido}
        isBanido={isBanido}
        href="/dadoslojista"
      />
    </>
  );
};

export default DadosLojista;
