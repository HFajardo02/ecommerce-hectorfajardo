import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div className="col-md-4 p-1">                    
            <div className="card w-100 mt-5 text-center" >
                <div className="card-header h3">
                    {`${prod.model}`}                                                           
                </div>
                <div className="card-body">
                    <img src={prod.photo_url} alt='Coleccion' className='w-100' />
                </div>
                <div className="card-footer h5">
                    {`Serie: ${prod.series}`}
                    <br />
                    {`Categoría: ${prod.categoria}`}
                    <br />
                    {`Año: ${prod.year}`}
                    <br />
                    {`Stock Disponible: ${prod.stock} unidades`}
                    <br />
                    {`Precio: $${prod.precio} MXN`}
                    <br />
                    <br />
                    <Link to={`/detalle/${prod.id}`} >
                        <button className="btn btn-outline-primary btn-block">
                            Ver detalle del producto
                        </button>   
                    </Link> 
                </div>
            </div>                                                                                                                            
        </div>
    )
}

export default Item