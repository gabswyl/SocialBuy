import React from 'react'
import footer from "../assets/footer.png"
import styled from 'styled-components'


const ImgFooter = styled.img`
  width: 100%;
`

const Footer = () => {
  return (
    <footer>
      <ImgFooter src={footer} />
    </footer>
  )
}

export default Footer