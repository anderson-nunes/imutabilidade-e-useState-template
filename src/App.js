
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {

  //useState(estado inicial)

  const [nome, setNome] = useState('Labenu')

  const [automovel, setAutomovel] = useState({

    //estado inicial
    modelo: "Corsa",
    cor: "Rosa",
    ano: 2020,
    adicionadoPor: nome,
    flex: true
  })

  const carro1 = {
    modelo: "Polo",
    cor: "Cinza",
    ano: 2020,
    adicionadoPor: 'José',
    flex: true
  }

  const carro2 = {
    modelo: "Onix",
    cor: "Prata",
    ano: 2022,
    adicionadoPor: 'Paulo',
    flex: true
  }

  const carro3 = {
    modelo: "HB20",
    cor: "Vermelho",
    ano: 2023,
    adicionadoPor: 'Maria',
    flex: true
  }



  return (
    <div className="App">
      <GlobalStyled />
      <Garagem
        nomeGaragem={nome}
        setNome={setNome}
        automovel={automovel}
        setAutomovel={setAutomovel}
        carro={carro1}
      />
    </div>
  )
}
