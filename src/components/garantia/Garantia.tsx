import GarantiaImg from '../../img/garantia.webp'
import styled from 'styled-components'


const GarantiaContainer = styled.div`
height: 337px;
background-color: rgb(60, 67, 68);
    position: relative;
    top: 180px;
    text-align: center;
    
`
const GarantiaTitle = styled.h1`
color: #fff;
padding: 70px 0 0;
font-size: 54px;
`
const GarantiaBold = styled.b`
    color: yellow;
`

const GarantiaSubtitle = styled.span`
    color: #fff;
    font-size:32px
`


const Garantia = () => {
  return (
    <GarantiaContainer>
        <GarantiaTitle>Sua Garantia é <GarantiaBold>Total</GarantiaBold></GarantiaTitle>
        <GarantiaSubtitle>Você só estuda com a gente se gostar ou seu reembolso é integral</GarantiaSubtitle>
        <div>
        <img src={GarantiaImg} alt="" />
        </div>
    </GarantiaContainer>
  )
}

export default Garantia