import { scroller } from 'react-scroll';
import styled from 'styled-components'


const Divmudardevida = styled.div`
  text-align:center;
  padding-bottom: 70px;
`


const Btnmudardevida = styled.button`
background: rgb(242,118,46);
border: none;
font-size: 18px;
color: #fff;
font-family: "Poppins", sans-serif;
font-weight: 700;
padding: 0 8px;
width: 285px;
height: 54px;
box-shadow: rgb(207, 98, 35) 0px 5px 0px;
border-radius: 3px;
cursor: pointer;
z-index: 10;
&:hover{
  background:rgb(216, 88, 13);
}
`



const BtnMudarDeVida = () => {
  const scrollToCardPrecos = () => {
    scroller.scrollTo('cardprecos', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  return (
    <Divmudardevida>
            <Btnmudardevida onClick={scrollToCardPrecos}>
                Vou Mudar de Vida
            </Btnmudardevida>
        </Divmudardevida>
  )
}

export default BtnMudarDeVida