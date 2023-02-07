import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Este mensaje es desde <App /> :)" />
    </>
  )
}

export default App
