import { Link } from "react-router-dom"
import { useCartContext } from "../contexts/cartContext"
//import Table from 'react-bootstrap/Table';


const Cart = () => {
    const { cart, vaciarCarrito, eliminarProducto, totalCarrito} = useCartContext ()

    if (cart.length === 0) {
        return (
            <>
                <div className="container text-center mt-100">
                    <br />
                    <br />
                    <h2>No hay artículos en el carrito de compra...</h2>
                    <h3>Vaya a la pagina de inicio</h3>
                </div>
            </>
        )
    }

    return (
        <div className="container mt-5">

            {/* Comienza tabla */}      
             
            
            {/* <Table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {cart.map(item => (
                        <>
                            <td key={item.id}><img src={item.photo_url} className='w-25 center-text' alt="ilustracion"/></td>
                            <td key={item.id}>{item.model}</td>
                            <td key={item.id}>${item.precio} MXN</td>
                            <td key={item.id}>{item.cantidad} Pzs</td>
                            <td key={item.id}>{item.precio}*{item.cantidad} </td>
                        </>
                        ))} 
                    </tr>
                </tbody>
            </Table> */}
            
            {/* Finaliza tabla */}

            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-100">
                            <img src={item.photo_url} className='w-25' alt="ilustracion"/>
                            <b>Nombre:</b> {item.model}   
                            <b>   Precio:</b> ${item.precio} MXN   
                            <b>   Cantidad:</b> {item.cantidad} Piezas  
                            <b>   Subtotal:</b> ${item.precio * item.cantidad} MXN  
                            <button className="offset-md-1" onClick={() => eliminarProducto(item.id)}>Eliminar</button> 
                        </div>
                    </li>  )
                }
            </ul>
            <div>
                <br />
                <br />
                <h3 className="container text-center">TOTAL DEL CARRITO DE COMPRA: ${totalCarrito()} MXN</h3>
                <br />
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