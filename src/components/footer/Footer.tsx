import styled from 'styled-components'
import Logo from '../../img/logo.webp'

const Rodape = styled.div`
position: relative;
top: 350px;
background: #3C4344;
padding: 40px;
text-align: center;
`

const Footer = () => {
  return (
    <Rodape>
      <div>
        <img src={Logo} alt="" />
      </div>
    </Rodape>
  )
}

export default Footer