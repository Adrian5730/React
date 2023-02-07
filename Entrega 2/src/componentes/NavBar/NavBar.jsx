import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav className="navigator">
            <Link to={'/'} className="image-cofe"><img src="../images/icon_cafecito.svg" alt="Icono Cafe" /></Link>
            <Link to={'/login'}><button className="button button-left material-symbols-outlined">person</button></Link>
            <ul>
                <li className='container-categorias'>
                    <Link to={'/categoria'} className="link_to">Categorias</Link>
                    <ul className='categorias'>
                        <li><Link to={'/categoria/IMPORT'} className="link_to">Import</Link></li>
                        <li><Link to={'/categoria/LA VIRGINIA'} className="link_to">La Virginia</Link></li>
                    </ul>
                </li>
                <li><Link to={'/contacto'} className="link_to">Contacto</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}
