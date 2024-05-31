import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ListaAlunos from './components/lista-alunos/ListaAlunos'
import Article1 from './components/Articles/Article1/Article1'
import Article2 from './components/Articles/Article2/Article2'
import Planos from './components/Articles/Planos/Planos'
import Plataformas from './components/Articles/Plataformas/Plataformas'
import VejaAcesso from './components/Articles/VejaAcesso/VejaAcesso'
import Article3 from './components/Articles/Article3/Article3'
import Galery from './components/Articles/Galery/Galery'
import Relatos from './components/relatos/Relatos'
import Garantia from './components/garantia/Garantia'
import CardPrecos from './components/cardPrecos/CardPrecos'
import Duvidas from './components/duvidas/Duvidas'
import ScrollToTopButton from './components/voltaraotopo/ScrollToTopButton'

const App = () => {
  return (
    <>
    <Header />
    <ListaAlunos/>
    <Article1/>
    <Article2/>
    <Planos/>
    <Plataformas/>
    <VejaAcesso/>
    <Article3/>
    <Galery/>
    <Relatos/>
    <Garantia/>
    <CardPrecos/>
    <Duvidas/>
    <Footer/>
    <ScrollToTopButton />
    </>
  )
}

export default App