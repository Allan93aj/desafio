import Logo from '../../img/logo.webp'
import BtnMudarDeVida from '../Btn-mudardevida/BtnMudarDeVida'
import './CardPrecos.scss'

const CardPrecos = () => (
    <div id="cardprecos">
        <div className="cardprecos-txt">
            <h1>Você vai Estar na Próxima Lista de Aprovados.</h1>
            <span>Basta dar o primeiro passo e desbloquear seu acesso na nossa turma agora mesmo</span>
        </div>
        <div className="cardvalores">
            <div className="cardvalores-txt">
                <img src={Logo} alt="" />
                <h1>Curso Completo CFO CBMERJ Turma 2024</h1>
            </div>
            <div className='cardlist'>
                <ul>
                    <li>✔ 197 apostilas;</li>
                    <li>✔ 3.147 questões em vídeo;</li>
                    <li>✔ 10.115 questões nas apostilas;</li>
                    <li>✔ 1.138 vídeos de teoria;</li>
                    <li>✔ 10 simulados;</li>
                    <li>✔ Método CRC;</li>
                    <li>✔ Plataforma estilo Netflix;</li>
                    <li>✔ Sugestão de plano de estudo;</li>
                    <li>✔ Região para tirar dúvidas;</li>
                    <li>✔ Aulas AO VIVO <br/>(pacote opcional).</li>
                </ul>
            </div>

            <div className='cardvalor'>
                <h1><span>12x de</span> R$ 82,29</h1>
                <h2>Ou à vista  R$ 797,90</h2>

                <BtnMudarDeVida />
            </div>

        <div className='acessoAno'>
            <h3>Acesso por 1 ano</h3>
        </div>
            
        </div>
    </div>
)

export default CardPrecos