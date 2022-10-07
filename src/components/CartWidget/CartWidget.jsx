import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import hwlogo from './../../images/hwlogo.png';
import iconcart from './../../images/iconcart.png';
import { useCartContext } from '../../contexts/cartContext';


const CartWidget = () => {

    const {totalProductos} = useCartContext ();

    return (
        <Navbar bg="light" variant="dark" sticky='top'>
            <Container>
                <Link to="*">
                    <img className="" src={hwlogo} alt="Hot Wheels" width="300" height="100"/>
                </Link>
                <Link to="/cart">
                    <img className="" src={iconcart} alt="Carrito de compra" width="100" height="100"/>
                    <span style={{fontSize: '2em', color: 'red'}}>{totalProductos() || ''}</span>
                </Link>
            </Container>
        </Navbar>
    )
}
  
export default CartWidget