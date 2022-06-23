import { useCartContext } from "../../contexts/cartContext"


const Cart = () => {
    const { cart, vaciarCarrito } = useCartContext()
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.photo_url} className='w-25' alt="ilustracion"/>
                        </div>
                        Nombre: {item.model} Precio: ${item.precio} MXN cantidad: {item.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart
