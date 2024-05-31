import Plataforma from '../../../img/mockup.webp'
import './Plataformas.scss'

const Plataformas = () => {
  return (
    <div className='plataforma'>
        <div className='txt-plataforma'>
            <h1>Por Que o Perspectiva tem Resultados tão Fantásticos?</h1>
        </div>
        <div className='mockup'>
            <h1>Veja Nossa Plataforma por Dentro</h1>
            <img src={Plataforma} alt="" />
        </div>

    </div>
  )
}

export default Plataformas