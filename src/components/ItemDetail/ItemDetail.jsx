import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={producto.photo_url} alt="" className="w-100" />
            </div>
            <div className="col-md-6">                
                <h2>Modelo: {producto.model}</h2>
                <h3>Categoría: {producto.categoria}</h3>
                <h4>Precio: {producto.precio}</h4>
            </div>
            <>
                <ItemCount stock={producto.stock} initial={1}/>
            </>
        </div>
    )
}

export default ItemDetail
