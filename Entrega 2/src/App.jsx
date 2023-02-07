import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { NavBar } from './componentes/NavBar/NavBar'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <div id="main" className="container-general">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:idCategoria?' element={<ItemListContainer />}></Route>
          <Route path='/item/:idProducto' element={<ItemDetailContainer />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
