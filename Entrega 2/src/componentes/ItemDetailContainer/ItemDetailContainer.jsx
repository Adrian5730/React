import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../utils/getData'

export const ItemDetailContainer = () => {
    const {idProducto} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)
    
    useEffect(() => {
        setloading(true)
        getData()
            .then(response => {
                setProductos(response.filter(producto => producto.id == Number(idProducto)))
            })
            .catch(error => console.log(error))
            .finally(() => setloading(false))

    }, [idProducto])
    return (
        <div className='container-cards'>
            {loading ? <h2 className='loading'>Cargando...</h2>
                :
                productos.map(({ id, nombre, codigo, descripcion }) =>
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
                    </div>
                )
            }
        </div>
    )
}
