import '../lista-alunos/ListaAluno.scss'
import SlideAlunos from './SlideAlunos'




const ListaAlunos = () => {
    
  return (
    <section>
        <div className='container-lista'>
            <h2>Veja a Lista dos Nossos Alunos <b>Aprovados</b> no Último Concurso</h2>
            <h3>(resultado do dia 17 de Maio de 2024)</h3>
            <SlideAlunos/>
        </div>

        
    </section>
  )
}

export default ListaAlunos