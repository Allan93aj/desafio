import "./Article1.scss"
import { scroller } from 'react-scroll';
import styled from 'styled-components'

const Divmudardevida = styled.div`
  text-align:center;
  padding-bottom: 70px;
`

const Btnmudardevida = styled.button`
background: rgb(242,118,46);
border: none;
font-size: 26px;
color: #fff;
font-family: "Poppins", sans-serif;
font-weight: 700;
padding: 0 8px;
width: 324px;
height: 78px;
box-shadow: rgb(207, 98, 35) 0px 5px 0px;
border-radius: 3px;
cursor: pointer;
z-index: 10;
margin-top: 30px;
&:hover{
  background:rgb(216, 88, 13);
}
`

const Article1 = () => {
  const scrollToFooter = () => {
    scroller.scrollTo('footer', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='main-article'>
    <div className='container-fluid'>
        <div className='container-txt'>
            <h1 className="">Seu Nome pode Estar na Lista dos Próximos Aprovados no CFO CBMERJ 2024 </h1>
            <h2>Basta Clicar no Botão Abaixo</h2>
        </div>
        <Divmudardevida>
            <Btnmudardevida onClick={scrollToFooter}>
                Vou mudar de vida
            </Btnmudardevida>
        </Divmudardevida>
    </div>
    
    </div>
    
  )
}

export default Article1