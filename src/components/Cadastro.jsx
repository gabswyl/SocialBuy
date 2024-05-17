import React from 'react'
import consumidorIcon from '../assets/consumidor.png'
import lojistaIcon from '../assets/lojista.png'
import { Link } from 'react-router-dom';
import './Cadastro.css'
import Footer from './Footer';

const Cadastro = () => {

    const optionsList = [{
        icon: consumidorIcon,
        name: 'consumidor',
        description: "Deseja apenas navegar pelo SocialBuy, procurando pelos seus produtos favoritos e lojistas perto de voce?",
        color: '#3247B3',
        href: "/cadastroconsumidor"
    },
    {
        icon: lojistaIcon,
        name: 'lojista',
        description: "Deseja anunciar a sua loja do Instagram, Facebook ou outra rede social, captando clientes de várias partes do país ainda que o seu negócio seja pouco conhecido na sua região?",
        color: '#E70066',
        href: "/cadastrolojista"
    },
    ]

    const options = optionsList.map((option => (
        <div className='options' key={option.name}>
            <div className='icon'>
                <img src={option.icon} />
            </div>
            <span>Cadastrar como</span>
            <strong style={{ backgroundColor: option.color }}>{option.name}</strong>
            <p>{option.description}</p>

            <Link className='cadastrobutton' to={option.href} style={{ backgroundColor: option.color }}>Cadastrar-se</Link>
        </div>
    )))


    return (
       <>
        <section>
            <h1 className='title-container'>Se registre no <br></br>SocialBuy!</h1>
            <div className='cadastro'>
                {options}
            </div>
        </section>
        <Footer />
       </>
    )
}

export default Cadastro