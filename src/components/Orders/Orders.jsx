import { Link } from "react-router-dom"

const Orders = () => {
    return (
        <>

            <h2 className="my-5 text-center">Gracias por tu compra!!!</h2>
            <div className="container">
            
                <h4 className="my-5">A continuación los detalles de tu pedido: </h4>

                <h5 className="col-12">Número de orden: <span>Numero de orden</span></h5>
                <h5 className="col-12">Fecha del pedido: <span>Fecha</span></h5>

                

                <div className="container text-center my-5"> 
                    <div className="row pb-3">
                        <h5 className="col-5 text-start"> Nombre del producto</h5>
                        <h5 className="col-3"> Precio Unitario</h5>
                        <h5 className="col-2"> Cantidad </h5>
                        <h5 className="col-2"> Subtotal </h5>
                    </div>
                                
                    <h3 className="my-5">El total de tu orden: </h3>   
                
                    <Link to="/">
                        <button className="btn btn-primary mt-5">Volver a la tienda</button>
                    </Link>
                </div>
            </div>
        </>
    )
}



export default Orders