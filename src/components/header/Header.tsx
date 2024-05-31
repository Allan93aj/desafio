import '../header/Header.scss'
import Logo from '../../img/logo.webp'
import Fotovideo from '../../img/fotovideo.png'
import BtnMudarDeVida from '../Btn-mudardevida/BtnMudarDeVida';

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
        <div className='video'>
            <img src={Fotovideo} alt="" /> 
        </div>

        <BtnMudarDeVida/>
        </div>
    </header>
  )
}

export default Header