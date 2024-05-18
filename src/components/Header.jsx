import React from 'react'
import logo from "../assets/logodaloja.png"
import styled from 'styled-components'
import { IoSearchSharp } from "react-icons/io5";

const HeaderStyled = styled.header`
background-color: var(--azul);
padding: 30px;
display: flex;
justify-content: space-between;
`

const SearchContainer = styled.div`
display: flex;
position: relative;
`

const UlStyled = styled.ul`
display: flex;
justify-content: center;
list-style-type: none;
gap: 20px;
color: var(--branco);
`

const LiStyled = styled.li`
padding: 10px;
cursor: pointer;
`

const InputSearch = styled.input`
font-size: 1.25rem;
border-radius: 8px;
width: 800px;
padding: 20px;
`

const Search = styled.div`
background-color: var(--azul);
padding: 5px 10px;
border-radius: 8px;
position: absolute;
top: 15px;
right: 15px;

`

const Header = () => {

    const menuList = ["Melhores Avaliados", "Favoritos", "Localização", "Tornar-se Lojista"]

    return (
        <HeaderStyled>
            <div>
                <img src={logo} />
            </div>

            <SearchContainer>
                <div>
                    <InputSearch type='text' placeholder='Procurar no SocialBuy' />
                    <UlStyled>
                        {menuList.map((menu, index) => (
                            <LiStyled key={index}>
                                {menu}
                            </LiStyled>
                        ))}
                    </UlStyled>
                </div>

                <Search>
                    <IoSearchSharp size={"32px"} color={"white"}/>
                </Search>
            </SearchContainer>

            <div>
                <img />
                <strong>Perfil</strong>
            </div>
        </HeaderStyled>
    )
}

export default Header