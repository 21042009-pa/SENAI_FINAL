import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"

const cardapio = [
  {
    id:1,
    nome:"feijoada",
    preco:42.90,
    categoria: "Prato principal",
    descricao: "Prato mais pedido"
  },

  {
    id:2,
    nome: "Suco de laranja",
    preco: 10.00,
    categoria: "Bebidas",
    descricao: "Suco mais pedido"
  },

  {
    id: 3,
    nome: "Cookies de nutella",
    preco: 12.90 ,
    categoria:"Sobremesa",
    descricao: "sobremesa mais pedida"
  },

  {
    id: 4,
    nome: "Comida Japonesa",
    preco: 120.00,
    categoria:"Rodizio",
    descricao: "Rodizio mais pedido"
  },
  {
    id: 5,
    nome: "Pipoca Doce (ninho com nutella)",
    preco: 25.90 ,
    categoria:"Sobremesa",
    descricao: "Segunda mais pedida"
  },
]

function App(){
  return(
    <main className="app">
      <Header/>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
      </section>

      <Rodape/>
    </main>
  )
}

export default App 