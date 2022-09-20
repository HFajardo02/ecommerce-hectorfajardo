import { Link } from "react-router-dom"
import { useCartContext } from "../contexts/cartContext"


const Cart = () => {
    const { cart, vaciarCarrito } = useCartContext ()
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.photo_url} className='w-25' alt="ilustracion"/>
                        </div>
                        <b>Nombre:</b> {item.model} <b>Precio:</b> ${item.precio} MXN <b>Cantidad:</b> {item.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <button className="btn btn-secondary" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <br />
                <br />
            </div>
            <div>
                <Link to='/' >
                    <button className="btn btn-secondary" onClick={()=>console.log('Ir al Inicio') }>Seguir comprando</button>
                </Link>
            </div>

        </div>
    )
}

export default Cart