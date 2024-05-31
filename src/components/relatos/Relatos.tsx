import styled from "styled-components"
import RelatoImg from '../../img/relato1.png'
import RelatoImg2 from '../../img/relato2.png'
import RelatoImg3 from '../../img/relato3.png'
import RelatoImg4 from '../../img/relato4.png'



const RelatosAlunos = styled.div`
    position: relative;
    top: 200px;
    text-align: center;
    height: 388px;
    background-color: rgb(242, 242, 242);
`

const RelatosAlunosText = styled.h1`
font-weight: 400;
font-size: 36px;
margin: 30px auto 60px;
padding: 40px 0 0;
`

const RelatosCardVideos = styled.div`
display: flex;
justify-content: center;
gap: 20px;
cursor: pointer;
`

 
const Relatos = () => {
  return (
    <RelatosAlunos>
        <RelatosAlunosText>Veja um Pouco do que os Alunos Acham de Estudar no <b>Perspectiva</b></RelatosAlunosText>
        <RelatosCardVideos>
            <div>
                <img src={RelatoImg} alt="" />
            </div>

            <div>
                <img src={RelatoImg2} alt="" />
            </div>

            <div>
                <img src={RelatoImg3} alt="" />
            </div>

            <div>
                <img src={RelatoImg4} alt="" />
            </div>
        </RelatosCardVideos>
    </RelatosAlunos>
  )
}

export default Relatos