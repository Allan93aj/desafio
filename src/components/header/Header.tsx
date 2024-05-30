import React from 'react'
// import '../header/Header.scss'
import Logo from '../../img/logo.webp'
// import VideoPlayerControl from '../VideoPlayer/VideoPlayerControl'
// import BtnMudarDeVida from '../Btn-mudardevida/BtnMudarDeVida';

const Header = () => {
  return (
    <header>
        <div className='container-header'>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='txt-header'>
            <span>
                Você é tão Capaz de Virar Bombeiro Militar Quantos os<b> 60 Alunos </b>que Nós Aprovamos no CFO CBMERJ 2023
            </span>
        </div>
        {/* <div className='video'>
            <VideoPlayerControl src={''} /> 
        </div>

        <BtnMudarDeVida/> */}
        </div>
    </header>
  )
}

export default Header