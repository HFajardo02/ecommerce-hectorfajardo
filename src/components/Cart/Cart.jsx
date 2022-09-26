import { Link } from "react-router-dom"
import { FcCancel } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../contexts/cartContext";



const Cart = () => {
    const { cart, vaciarCarrito, eliminarProducto, totalCarrito} = useCartContext ()

    if (cart.length === 0) {
        return (
            <>
                <div className="container text-center mt-100">
                    <br />
                    <br />
                    <h2>No hay artículos en el carrito de compra...</h2>
                    <br />
                    <Link to='/'>
                        <button type="button" class="btn btn-primary"> Ir a la página de inicio </button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div className="container mt-5 text-left">

            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div>
                            <img src={item.photo_url} alt="ilustracion" style={{height:75, widht:75}}/>
                            <b>Nombre:</b> {item.model}   
                            <b>   Precio:</b> ${item.precio} MXN   
                            <b>   Cantidad:</b> {item.cantidad} Piezas  
                            <b>   Subtotal:</b> ${item.precio * item.cantidad} MXN     
                            <Button variant="outline-danger" size="sm" className="m-3" onClick={() => eliminarProducto(item.id)}> <FcCancel/> Eliminar producto</Button> 
                        </div>
                    </li>  )
                }
            </ul>
            <div>
                <br />
                <br />
                <h5 className="container text-center">TOTAL DEL CARRITO DE COMPRA:</h5>
                <h2 className="container text-center">${totalCarrito()} MXN</h2>
                <br />
            </div>
            <div className="container mt-10 text-center">
                <Link to='/' >
                    <button className="btn btn-warning offset-md-1" onClick={() => console.log('Ir al Inicio') }>Seguir comprando</button>
                </Link>
                <button className="btn btn-danger offset-md-1" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <button className="btn btn-dark offset-md-1">Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Cart