import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
function NavBar() {
    return (
        <nav id='nav_bar'>
            <div className='title_company'>
                <a href="/">
                    <h2>CAFECITO</h2>
                </a>
            </div>
            <div className="list_nav">
                <ul>
                    <li>
                        <a href="/">Ofertas</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                    <li>
                        <a href="/">Ingresar</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar