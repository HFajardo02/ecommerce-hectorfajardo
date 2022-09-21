import { Link } from "react-router-dom"
import { useCartContext } from "../contexts/cartContext"
//import Table from 'react-bootstrap/Table';


const Cart = () => {
    const { cart, vaciarCarrito} = useCartContext ()
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
                        <div className="w-75">
                            <img src={item.photo_url} className='w-25' alt="ilustracion"/>
                            <b>   Nombre:</b> {item.model} 
                            <b>   Precio:</b> ${item.precio} MXN 
                            <b>   Cantidad:</b> {item.cantidad} Unidades 
                        </div>
                    </li>  )
                }
            </ul>
            <div className="container mt-10 text-center">
                <Link to='/' >
                    <button className="btn btn-warning offset-md-1" onClick={()=>console.log('Ir al Inicio') }>Seguir comprando</button>
                </Link>
                <button className="btn btn-danger offset-md-1" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <button className="btn btn-dark offset-md-1">Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Cart