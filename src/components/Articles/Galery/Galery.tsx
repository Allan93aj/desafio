import Galeria from '../../../img/galeria.webp'
import styled from 'styled-components'


const GaleriaFotos = styled.div`
position: relative;
    top: 144px;
    width: 960px;
    margin: 0 auto;
    text-align: center;
`


const Galery = () => {
  return (
    <GaleriaFotos>
        <div>
            <img src={Galeria} alt="" />
        </div>
    </GaleriaFotos>
  )
}

export default Galery