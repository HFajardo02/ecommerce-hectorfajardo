import { useCartContext } from "../../contexts/cartContext"


const Cart = () => {
    const { cart, vaciarCarrito } = useCartContext()
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.foto} className='w-25' />
                        </div>
                        nombre: {item.nombre} precio: {item.precio} cantidad: {item.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart
