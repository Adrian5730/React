import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../utils/getData'
import ItemDetail from './itemDetail/itemDetail'

export const ItemDetailContainer = () => {
    const { idProducto } = useParams()
    const [producto, setProducto] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setloading(true)
        getData()
            .then(response => {
                setProducto(response.filter(producto => producto.id == Number(idProducto)))
            })
            .catch(error => console.log(error))
            .finally(() => setloading(false))
    }, [idProducto])
    return (
        <div className='container-cards'>
            {loading ? <h2 className='loading'>Cargando...</h2>
                :
                <ItemDetail producto={producto} />
            }
        </div>
    )
}
