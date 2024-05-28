import React from 'react'
import profiles from '../mocks/profiles.json'
import styled from 'styled-components'

const liStyled = styled.li`

`

const Perfis = () => {
    
  return (
    <div>
        <ul>
            {profiles.map((profile) => (
                <li key={profile.id}>
                    <img src={`avatar/${profile.img}`}/>
                    <span>{profile.nome}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Perfis