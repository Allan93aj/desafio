import Check from "../../../img/check.webp"
import './VejaAcesso.scss'

const VejaAcesso = () => {
  return (
    <div>
        <div className='txt-listas'> 
            <h1>Veja Tudo que Você Terá Acesso Sendo Nosso Aluno</h1>
        </div>
        <div className='listas'>
            <ul>
                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>247 apostilas com toda a teoria e 15.478 questões;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>15.478 questões nas apostilas;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>5.048 questões resolvidas e comentadas em vídeo;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>1.823 vídeos de teoria;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Método CRC;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>16 simulados;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Plataforma similar à Netflix;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Plataforma exclusiva para suporte e dúvidas;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Gabarito interativo dos simulados;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Informações privilegiadas sobre o concurso;</h1>
                    </div>
                </li>


                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Suporte contínuo para uso da plataforma;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Lives exclusivas ao longo do ano com o Diretor;</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Aulas ao Vivo toda semana <br/>(pacote opcional);</h1>
                    </div>
                </li>

                <li>
                    <div className='img-list'>
                        <img src={Check} alt="" />
                    </div>
                    <div className='content-list'>
                        <h1>Preparação para o TAF <br/> (pacote opcional).</h1>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default VejaAcesso