import Grafico from '../../../img/grafico.webp'
import styled from 'styled-components'
import BtnMudarDeVida from '../../Btn-mudardevida/BtnMudarDeVida'


const Plans = styled.div`
background: #f2f2f2;
position: relative;
top: -88px;
`

const ContainerPlans = styled.div`
    width:960px;
    margin: 0 auto 30px;
`

const H1Plans = styled.h1`
    text-align: center;
    font-weight: bold;
    color: rgb(56, 173, 166);
    font-size: 54px;
    padding: 50px;
`

const Planos = () => {
  return (
    <Plans>
        <ContainerPlans>
            <H1Plans>Conheça o Plano de Cargos e Salários</H1Plans>
            <img src={Grafico} alt="" />
        </ContainerPlans>
        <BtnMudarDeVida/>
    </Plans>
  )
}

export default Planos