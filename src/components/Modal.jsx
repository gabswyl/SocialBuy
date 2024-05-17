import React from 'react'
import consumidor from '../assets/consumidor.png'
import { Link } from 'react-router-dom'
import './Modal.css'

const Modal = ({isOpen}) => {
  if (isOpen) {
    return (
        <>
        <div className='modal-container'>
            <div>
                <img src={consumidor} />
            </div>
            <span>Confirme o Cadastro</span>
            <p>Um e-mail de confirmação foi enviado para o seu correio eletrônico!</p>
            <Link className='voltar' to='/'>Voltar</Link>
        </div>
        <div className='bgModal'></div>
        </>
      )
  }

  return null
}

export default Modal