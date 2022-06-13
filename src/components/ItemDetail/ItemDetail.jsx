const ItemDetail = ({producto}) => {
    return(
        <div>
            <div className="row">
                <img src={producto.photo} alt="" className="w-100"/>
            </div>
            <div className="col-md-6">
                <h2>Nombre: {producto.model}</h2>
                <h3>Serie: {producto.series}</h3>
                <h4>Precio: {producto.precio} MXN</h4>
            </div>
        </div>
    )

}

export default ItemDetail