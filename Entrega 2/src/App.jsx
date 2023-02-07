import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { NavBar } from './componentes/NavBar/NavBar'
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

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
