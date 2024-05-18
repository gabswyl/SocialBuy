import React from 'react'
import consumidor from '../assets/consumidor.png'
import casa from '../assets/casa.svg'
import close from "../assets/x.svg"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import boleto from '../assets/boleto.png'
import card from '../assets/card.png'
import pix from '../assets/pix.png'
import logo from '../assets/logodaloja.png'


const ModalContainer = styled.div`
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: var(--branco);
    width: 350px;
    height: 300px;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;
    z-index: 5;
`

const ButtonFechar = styled.button`
background-color: var(--red);
    color: var(--branco);
    border-radius: 20px;
    padding: 10px;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border: none;

`

const Back = styled(Link)`
background-color: var(--azul);
    color: var(--branco);
    border-radius: 20px;
    padding: 10px;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
`

const FundoModal = styled.div`
 content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    backdrop-filter: blur(8px);
    opacity: 75%; 
    z-index: 2; 
`

const AvisoMotivo = styled.p`
font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

const TituloMotivo = styled.span`
 background-color: var(--azul);
    color: var(--branco);
    border-radius: 20px;
    padding: 10px;
`

const ImgDiv = styled.div`
margin-top: -120px;
padding: 20px;
border-radius: 150px;
background-color: var(--rosa);
-webkit-box-shadow: 0px 36px 41px -8px rgba(0,0,0,0.32);
-moz-box-shadow: 0px 36px 41px -8px rgba(0,0,0,0.32);
box-shadow: 0px 36px 41px -8px rgba(0,0,0,0.32);
margin-bottom: 20px;
`

const TodosPlanos = styled.div`
display: flex;
gap: 30px;
`

const PlanoAtual = styled.div`
display: flex;
flex-direction: column;
`
const Plano = styled.div`
display: flex;
gap: 10px;
`

const OpçãoPaid = styled.div`
display: flex;
align-items: center;
padding: 10px;
gap: 10px;
`

const ListaPaids = styled.div`
gap: 10px;
`



const Modal = ({ isOpen, title, motivo, motivo1, isError, titleError, motivoError, onClose, onChangeModal, onChangeModalQuase, href, isLojista, isConfirmation, nextModal, isQuase, titleQuase, motivoQuase, onChangeModalAnalise, titleAnalise, motivoAnalise, isAnalise, onChangeModalBanido, titleBanido, motivoBanido, isBanido}) => {

  if (isLojista) {
    return (
      <>
        <ModalContainer>
          <ImgDiv>
            <img src={casa} alt="Casa" />
          </ImgDiv>
          <TituloMotivo style={{ backgroundColor: "var(--rosa)" }}>{title}</TituloMotivo>
          <AvisoMotivo>{motivoError}</AvisoMotivo>
          <Back style={{ backgroundColor: "var(--rosa)" }} to="/dadoslojista">Voltar</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <ModalContainer>
          <ImgDiv style={{ backgroundColor: "var(--branco)" }}>
            <img src={close} alt="Close" />
          </ImgDiv>
          <TituloMotivo style={{ backgroundColor: "var(--red)" }}>{titleError}</TituloMotivo>
          <AvisoMotivo>{motivoError}</AvisoMotivo>
          <ButtonFechar onClick={onClose}>Fechar</ButtonFechar>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (isOpen) {
    return (
      <>
        <ModalContainer>
          <ImgDiv style={{ backgroundColor: "var(--branco)" }}>
            <img src={consumidor} alt="Consumidor" />
          </ImgDiv>
          <TituloMotivo>{title}</TituloMotivo>
          <AvisoMotivo>{motivo}</AvisoMotivo>
          <Back style={{backgroundColor: "var(--azul)" }} to="/">Voltar</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (isConfirmation) {
    return (
      <>
        <ModalContainer style={{ height: "400px" }}>
          <ImgDiv style={{ marginTop: "-50px" }}>
            <img src={consumidor} alt="Consumidor" />
          </ImgDiv>
          <TituloMotivo>{title}</TituloMotivo>
          <AvisoMotivo style={{ fontSize: "16px" }}>{motivo}</AvisoMotivo>
          <AvisoMotivo style={{ fontSize: "16px", opacity: "80%" }}>{motivo1}</AvisoMotivo>
          <Back style={{ fontSize: "16px", backgroundColor: "var(--verde)" }} to={href} onClick={onChangeModal}>Concordo. Seguir para pagamento</Back>
          <Back style={{ fontSize: "16px", backgroundColor: "var(--red)" }} to="/">Discordo. Cancelar</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (nextModal) {
    return (
      <>
        <ModalContainer style={{height: "400px"}}>
        <ImgDiv style={{marginTop: "-50px", backgroundColor: "var(--rosa)"}}>
            <img src={logo} alt="logo loja" />
          </ImgDiv>
          <TodosPlanos>
            <PlanoAtual>
              <Plano>
                <input type="checkbox" />
                <strong>Plano Mensal</strong>
              </Plano>
              <strong>R$ 120,00 por mês</strong>
            </PlanoAtual>

            <PlanoAtual>
              <Plano>
                <input type="checkbox" />
                <strong>Plano Anual</strong>
              </Plano>
              <strong>R$ 1080,00 por mês</strong>
            </PlanoAtual>
          </TodosPlanos>

          <ListaPaids>
            <OpçãoPaid>
              <input type="checkbox" />
              <img src={boleto} alt="Boleto" />
              <strong>Boleto [Aprovação em 3 dias úteis]</strong>
            </OpçãoPaid>

            <OpçãoPaid>
              <input type="checkbox" />
              <img src={pix} alt="Pix" />
              <strong>Pix [Aprovação imediata]</strong>
            </OpçãoPaid>

            <OpçãoPaid>
              <input type="checkbox" />
              <img src={card} alt="Cartão" />
              <strong>Cartão [Adicionar cartão]</strong>
            </OpçãoPaid>
          </ListaPaids>
          <Back style={{ fontSize: "16px", backgroundColor: "var(--verde)" }} onClick={onChangeModalQuase}>Continuar</Back>
          <Back style={{ fontSize: "16px", backgroundColor: "var(--red)" }} to="/">Cancelar</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (isQuase) {
    return (
      <>
        <ModalContainer style={{height: "300px"}}>
          <ImgDiv style={{marginTop: "-80px"}}>
            <img src={logo} alt="logo loja" />
          </ImgDiv>
          <TituloMotivo style={{ backgroundColor: "var(--rosa)" }}>{titleQuase}</TituloMotivo>
          <AvisoMotivo style={{fontSize: "16px"}}>{motivoQuase}</AvisoMotivo>
          <Back style={{ backgroundColor: "var(--verde)" }} onClick={onChangeModalAnalise}>Ok</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  if (isAnalise) {
    return (
      <>
        <ModalContainer style={{background: "#DC9B1E"}}>
          <ImgDiv style={{marginTop: "-80px", backgroundColor: "#DC9B1E"}}>
            <img src={logo} alt="logo loja" />
          </ImgDiv>
          <TituloMotivo style={{ backgroundColor: "var(--branco)", color: "black" }}>{titleAnalise}</TituloMotivo>
          <AvisoMotivo style={{fontSize: "24px", color: "var(--branco)"}}>{motivoAnalise}</AvisoMotivo>
          <Back style={{ backgroundColor: "var(--branco)", color: "black" }} onClick={onChangeModalBanido}>Ok</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }


  if (isBanido) {
    return (
      <>
        <ModalContainer style={{background: "#A30000"}}>
          <ImgDiv style={{marginTop: "-80px", backgroundColor: "#A30000"}}>
            <img src={logo} alt="logo loja" />
          </ImgDiv>
          <TituloMotivo style={{ backgroundColor: "var(--branco)", color: "black" }}>{titleBanido}</TituloMotivo>
          <AvisoMotivo style={{fontSize: "24px", color: "var(--branco)"}}>{motivoBanido}</AvisoMotivo>
          <Back style={{ backgroundColor: "var(--branco)", color: "black" }} to="/">Ok</Back>
        </ModalContainer>
        <FundoModal></FundoModal>
      </>
    );
  }

  

  return null;
};

export default Modal;