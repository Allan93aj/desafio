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

const Article2 = () => {
  return (
    <Phrase>
        <PhraseContainer>
        <PhraseTxt>Além do seu Sonho e da Honra em ser Bombeiro Militar no CBMERJ, a sua Vida Financeira será <b>INCRÍVEL!</b></PhraseTxt>
        </PhraseContainer>
    </Phrase>
  )
}

export default Article2