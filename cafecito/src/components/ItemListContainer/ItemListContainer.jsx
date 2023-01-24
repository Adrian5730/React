import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className="message_app">
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer