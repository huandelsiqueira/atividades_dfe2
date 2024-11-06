import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import PaginaMeta from './components/PaginaMeta/PaginaMeta.jsx'
import Meta from './components/Meta/Meta.jsx'
import { useState } from 'react';


const listaMetas = [
  {
    id: 1,
    nome: "Zero plástico",
    descricao: "Não utilize sacolas plásticas por 1 mês",
    dataInicial: "2024-11-10",
    dataFinal: "2024-12-10"
  },
  {
    id: 2,
    nome: "Transporte coletivo",
    descricao: "Utilize transporte coletivo durante três vezes na semana por 1 mês",
    dataInicial: "2024-11-15",
    dataFinal: "2024-12-15"
  }
];


function App() {

  const [show, setShow] = useState(true);

  return (
    <>
      <Header/>
      <PaginaMeta/>
      {show && (
        listaMetas.map((meta, i) => (
        <Meta key={`meta_${i}`} data={meta} />
        ))
      )}
      <Footer/>
    </>
  )
}

export default App
