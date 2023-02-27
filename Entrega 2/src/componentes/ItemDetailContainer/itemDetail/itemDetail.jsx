import { Link } from 'react-router-dom'
import ItemCount from './itemCount/itemCount'
const itemDetail = (props) => {
    return (
        props.producto.map(({ id, nombre, codigo, descripcion }) =>
            <div key={codigo} className="login-container card-container">
                <h1 className="title">{codigo}</h1>
                <div className="grid">
                    <button
                        className="card"
                        data-name="card"
                        data-code={codigo}
                        data-img-src={`images/capsulas/${codigo}.jpg`}
                        data-capsule-name={nombre}
                        data-brand="nesspresso"
                        data-description={descripcion}
                        data-price="Precio"
                    >
                        <Link to={`/item/${id}`}><img className="image-capsula" src={`../images/capsulas/${codigo}.jpg`} /></Link>
                        <p className="image-descriptor">{nombre}</p>
                    </button>
                </div>
                <div>
                    <p>{descripcion}</p>
                </div>
                <ItemCount />
            </div>
        )
    )
}

export default itemDetail