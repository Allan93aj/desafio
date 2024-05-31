import styled from 'styled-components'

const Phrase = styled.div`
height: 343px;
background-color: rgb(56, 173, 166);
position: relative;
top: -88px;
`

const PhraseContainer = styled.div`
    width:960px;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
`

const PhraseTxt = styled.h1`
    color: #fff;
    font-weight: 400;
    font-size: 54px;
`

const Article3 = () => {
  return (
    <Phrase>
        <PhraseContainer>
        <PhraseTxt>A Gente Ainda não Sabe como vai Fazer para Colocar mais <b>60 Alunos Aprovados</b> no Nosso Álbum de Fotos</PhraseTxt>
        </PhraseContainer>
    </Phrase>
  )
}

export default Article3