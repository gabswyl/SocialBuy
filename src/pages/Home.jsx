import React from 'react'
import LoginUser from '../components/LoginUser'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Section = styled.section`
height: 100vh;
    background-image: url("./assets/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
`

const Container = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
color: #fff;
    font-size: 64px;
    text-align: center;
    padding-top: 60px;
    margin-bottom: 60px;
`

const ContainerLogin = styled.div`
 max-width: 357px;
  background-color: #fff;
  width: 357px;
  height: 470px;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
`

const Home = () => {
  return (
    <Section>
    <Title>Bem vindo (a) ao <br /> SocialBuy</Title>
    <Container>
      <ContainerLogin>
        <LoginUser />
      </ContainerLogin>
    </Container>
  </Section>
  )
}

export default Home