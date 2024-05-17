import React, { useState } from 'react'
import './CadastroConsumidor.css'
import iconUser from '../assets/user.png'
import Cadeado from '../assets/cadeado.png'
import Footer from './Footer'
import Modal from './Modal'

const CadastroConsumidor = () => {

    const listStates = {
        states: [
            { 'AC': 'Acre' },
            { 'AL': 'Alagoas' },
            { 'AP': 'Amapá' },
            { 'AM': 'Amazonas' },
            { 'BA': 'Bahia' },
            { 'CE': 'Ceará' },
            { 'DF': 'Distrito Federal' },
            { 'ES': 'Espírito Santo' },
            { 'GO': 'Goías' },
            { 'MA': 'Maranhão' },
            { 'MT': 'Mato Grosso' },
            { 'MS': 'Mato Grosso do Sul' },
            { 'MG': 'Minas Gerais' },
            { 'PA': 'Pará' },
            { 'PB': 'Paraíba' },
            { 'PR': 'Paraná' },
            { 'PE': 'Pernambuco' },
            { 'PI': 'Piauí' },
            { 'RJ': 'Rio de Janeiro' },
            { 'RN': 'Rio Grande do Norte' },
            { 'RS': 'Rio Grande do Sul' },
            { 'RO': 'Rondônia' },
            { 'RR': 'Roraíma' },
            { 'SC': 'Santa Catarina' },
            { 'SP': 'São Paulo' },
            { 'SE': 'Sergipe' },
            { 'TO': 'Tocantins' },
        ]
    }

    const listState = (
        <select>
            <option disabled selected value="">
                Selecione o seu estado
            </option>
            {listStates.states.map(state => (
                <option key={Object.keys(state)[0]} value={Object.keys(state)[0]}>
                    {Object.values(state)[0]}
                </option>
            ))}
        </select>
    );

    const [openingModal, setOpeningModal] = useState(false)

    return (
        <>
            <div className="infos-container">
                <div className="info-dados">

                    <div style={{marginTop: '25px', marginBottom: '15px', gap: '5px'}} className='info-name'>
                        <div className="iconuser">
                            <img src={iconUser} alt="" />
                        </div>
                        <strong>Dados Pessoais</strong>
                    </div>

                    <div className='info-dadospessoais'>
                        <label>Nome e sobrenome</label>
                        <input type='text' placeholder='Digite o nome e o sobrenome' />


                        <div className='info-dadosensiveis'>
                            <div>
                                <label>CPF ou CPNJ</label>
                                <input type='text' />
                            </div>

                            <div>
                                <label>Data de nascimento</label>
                                <input type='date' />
                            </div>
                        </div>

                        <div>
                            <label>Genêro</label>
                            <div className='info-genero'>
                                <div className="info-genrecheckbox">
                                    <input type="checkbox" />
                                    <label>Masculino</label>
                                </div>
                                <div className="info-genrecheckbox">
                                    <input type="checkbox" />
                                    <label>Feminino</label>
                                </div>
                            </div>
                        </div>

                        <div className='info-local'>
                            <div>
                                <label>Estado</label>
                                <div>
                                    {listState}
                                </div>
                            </div>

                            <div>
                                <label>Cidade</label>
                                <div>
                                    <select>
                                        <option disabled selected value="">Selecione a cidade</option>
                                        <option value="estado1">Estado 1</option>
                                        <option value="estado2">Estado 2</option>
                                        <option value="estado3">Estado 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='info-name' style={{marginTop: '25px', marginBottom: '15px', gap: '5px'}}>
                        <div className="iconuser" style={{backgroundColor: '#42BA2E'}}>
                            <img src={Cadeado} alt="" />
                        </div>
                        <strong>Dados de acesso</strong>
                    </div>


                    <div className='info-dadosacesso'>
                        <div>
                            <label>E-mail</label>
                            <input type='text' />
                        </div>

                        <div>
                            <label>Celular</label>
                            <input type='text' />
                        </div>
                    </div>

                    <div className='info-dadosacesso'>
                        <div>
                            <label>Crie uma senha</label>
                            <input type='password' />
                        </div>

                        <div>
                            <label>Confirme a senha</label>
                            <input type='password' />
                        </div>
                    </div>

                    <div className='termos'>
                        <div className='termos-check'>
                            <input type='checkbox' />
                            <span>Li e concordo com os <b>Termos de Privacidade</b></span>
                        </div>

                        <div className='termos-check'>
                            <input type='checkbox' />
                            <span>Li e concordo com os <b>Termos de Uso do SocialBuy</b></span>
                        </div>
                    </div>


                    <button onClick={() => setOpeningModal(true)}>Cadastrar</button>
                </div>


            </div>
            <Modal isOpen={openingModal}/>
            <Footer />
        </>
    )
}

export default CadastroConsumidor