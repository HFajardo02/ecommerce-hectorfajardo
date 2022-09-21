import { Link } from "react-router-dom"
import { useCartContext } from "../contexts/cartContext"
import Table from 'react-bootstrap/Table';


const Cart = () => {
    const { cart, vaciarCarrito} = useCartContext ()
    return (
        <div className="container mt-5">

            {/* Comienza tabla */}      
             
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {cart.map(item => (
                        <td key={item.id}><img src={item.photo_url} className='w-25' alt="ilustracion"/></td>
                        ))}
                    </td>
                    <td>
                        {cart.map(item => (
                        <td key={item.id}>{item.model}</td>
                        ))} 
                    </td>
                    <td>
                        {cart.map(item => (
                        <td key={item.id}>${item.precio} MXN</td>
                        ))} 
                    </td>
                    <td>
                        {cart.map(item => (
                        <td key={item.id}>{item.cantidad} Pzs</td>
                        ))} 
                    </td>
                </tbody>
            </Table>
            
            {/* Finaliza tabla */}

            {/* <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-75">
                            <img src={item.photo_url} className='w-25' alt="ilustracion"/>
                            <b> Nombre:</b> {item.model} 
                            <b> Precio:</b> ${item.precio} MXN 
                            <b> Cantidad:</b> {item.cantidad} Unidades 
                        </div>
                    </li>  )
                }
            </ul> */}
            <div className="mt-10">
                <button className="btn btn-secondary" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
            <div className="mt-5">
                <Link to='/' >
                    <button className="btn btn-secondary" onClick={()=>console.log('Ir al Inicio') }>Seguir comprando</button>
                </Link>
            </div>

        </div>
    )
}

export default Cart