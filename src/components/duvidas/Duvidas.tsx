import './Duvidas.scss'
import Accordion from 'react-bootstrap/Accordion';


const Duvidas = () => {
  return (
    <div className='duvidas'>
        <div className='container-duvidas'>
            <h1>Ainda tem Alguma Dúvida?</h1>
            <span>(Perguntas Frequentes)</span>
        </div>

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>01. Quanto tempo eu tenho de acesso?</Accordion.Header>
        <Accordion.Body>
                Seu acesso é de 1 ano.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>02. Se eu precisar estudar para mais um concurso, terei alguma condição para renovar?</Accordion.Header>
        <Accordion.Body>
        Com certeza! No ato da renovação, todo ex-aluno do Perspectiva recebe um link especial vinculado ao seu CPF de cadastro aqui com a gente. Esse link é de, pelo menos, 40% OFF do valor do curso. Ou seja, o preço da turma sai, no mínimo, com 40% de desconto.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>03. Na plataforma, tem toda a teoria que cai na prova?</Accordion.Header>
        <Accordion.Body>
            Sim! Nós montamos nosso conteúdo de acordo com o edital.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>04. Haverá simulados?</Accordion.Header>
        <Accordion.Body>
        Sim! São no mínimo 12 simulados no ano. 100% exclusivos de acordo com todo o conteúdo programático do edital. O calendário está disponível dentro da nossa plataforma.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>05. Como funcionam as correções dos simulados?</Accordion.Header>
        <Accordion.Body>
        Nossos simulados vêm acompanhados de um gabarito interativo, ou seja, você o preenche on-line e, após enviar suas respostas, o sistema te indica sua nota instantaneamente. As questões erradas trazem indicações de vídeos com resolução comentada. Assim, você pode descobrir o que precisa ser melhorado e aprende, efetivamente, com seus erros.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>06. Em relação às outras questões (que eu acertar), eu posso ver as resoluções também?</Accordion.Header>
        <Accordion.Body>
        Claro! Todas as questões do simulado ficam gravadas e disponíveis em uma playlist exclusiva. O link fica liberado dentro da plataforma.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>07. Caso eu não me adapte, posso cancelar?</Accordion.Header>
        <Accordion.Body>
        Claro que pode. Você tem acesso à plataforma por 7 dias para explorar o curso como quiser e caso não goste do nosso conteúdo ou do nosso método dentro desses 7 dias, você pode cancelar e receber seu investimento de volta, com estorno total da compra.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>08. Preciso ver todos os vídeos para me preparar?</Accordion.Header>
        <Accordion.Body>
        Não! A maioria dos nossos vídeos são de resoluções das questões presentes nas apostilas, e nossa equipe está empenhada em aumentar cada vez mais esse tipo de conteúdo. Assim, buscamos evitar que os alunos acumulem dúvidas sobre os exercícios. Caso você tenha acertado a questão e esteja se sentindo seguro com aquele assunto, não precisa assistir ao vídeo. Basta seguir seus estudos.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>09. Terei um planejamento de estudo?</Accordion.Header>
        <Accordion.Body>
        Sim! Nós deixamos um planejamento base na plataforma para que você use em seu dia a dia. Porém, é muito possível que ajustes tenham de ser feitos para que o planejamento esteja adaptado à sua realidade. Seguindo a estrutura do modelo, você terá uma carga de estudos bem desenvolvida, com toda certeza. Ah! Lembre-se sempre: você também pode nos pedir ajuda sempre que quiser!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>10. Existe algum método de ensino que me ajude?</Accordion.Header>
        <Accordion.Body>
        Claro! O Método CRC é a metodologia exclusiva do Perspectiva. Ele vai te ajudar a não esquecer mais o conteúdo que você estudou e te fará evoluir com muita velocidade e consistência pela matéria. A falta de tempo, organização e planejamento não será mais um problema para você.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>11. Mas esse Método CRC funciona para qualquer pessoa?</Accordion.Header>
        <Accordion.Body>
        Ele já funcionou para quem já estava há quase 10 anos sem estudar, para quem recém terminou o colégio, para quem trabalha e tem pouco tempo para estudar, para quem tem o dia todo disponível etc. O método CRC não é uma fórmula mágica, já que baseia-se nas mais recentes pesquisas sobre o funcionamento do cérebro para garantir que o potencial de qualquer pessoa seja desenvolvido em sua plenitude. A ideia é amplificar ao máximo a capacidade de raciocínio e de retenção de conhecimento. É ciência.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="11">
        <Accordion.Header>12. As aulas são ao vivo ou gravadas?</Accordion.Header>
        <Accordion.Body>
        Todas as nossas aulas são gravadas nos nossos estúdios e editadas. E você pode assistir quantas vezes quiser. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="12">
        <Accordion.Header>13. Eu posso assistir às aulas quantas vezes eu quiser?</Accordion.Header>
        <Accordion.Body>
        Sim! Você pode assistir quantas vezes quiser durante o período de contratação.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header>14. Caso eu tenha alguma dúvida, como consigo ajuda?</Accordion.Header>
        <Accordion.Body>
        Você pode mandar sua dúvida no grupo VIP do Discord (Aplicativo gratuito de conversa). Nossa equipe está sempre checando tudo isso para que nenhum de nossos alunos fique sem respostas. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="14">
        <Accordion.Header>15. É possível passar de primeira?</Accordion.Header>
        <Accordion.Body>
        Sim! Não existem regras nesse sentido. Entre nossos alunos aprovados, temos exemplos de pessoas que passaram na prova do CBMERJ com um ano de estudo com a gente; tivemos alunos aprovados que não estudavam há quase 10 anos; pessoas que trabalhavam como UBER e de entregador de iFood. São diversas as histórias de sucesso.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="15">
        <Accordion.Header>16. Eu posso compartilhar o meu acesso com alguém?</Accordion.Header>
        <Accordion.Body>
        Não! O acesso à plataforma é único. Caso o sistema identifique múltiplos acessos simultâneos e de IPs diferentes (computadores, tablets e/ou celulares), a conta será bloqueada permanentemente.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="16">
        <Accordion.Header>17. Eu preciso ter ensino superior para prestar concurso para Oficial?</Accordion.Header>
        <Accordion.Body>
        Não! O concurso para Oficial CBMERJ exige apenas ensino médio completo!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="17">
        <Accordion.Header>18. Eu posso vender meu acesso para outras pessoas?</Accordion.Header>
        <Accordion.Body>
        Apesar dessa pergunta nem fazer muito sentido, fizemos questão de colocar aqui no FAQ por conta dos inúmeros processos que ex-alunos da plataforma estão tendo que responder por pirataria. Lembrando: pirataria é crime previsto no código penal, com até 3 anos de prisão.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="18">
        <Accordion.Header>19. Se eu estiver respondendo algum processo, posso prestar concurso?</Accordion.Header>
        <Accordion.Body>
        Se você estiver respondendo a qualquer processo, sobretudo criminal, isso é configurado como excludente para tomar posse no concurso do CBMERJ, assim como passagens pela polícia.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="19">
        <Accordion.Header>20. Serei excluído do concurso por ter tatuagens?</Accordion.Header>
        <Accordion.Body>
        Tatuagens só excluem os candidatos nos casos de tons pejorativos, agressivos, intolerantes e preconceituosos.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  )
}

export default Duvidas