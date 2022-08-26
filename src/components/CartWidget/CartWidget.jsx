import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import hwlogo from './../../images/hwlogo.png';
import iconcart from './../../images/iconcart.png';

const CartWidget = () => {
    return (
        <Navbar bg="light" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="# ">
                    <img className="" src={hwlogo} alt="Hot Wheels" width="300" height="100"/>{' '}
                </Navbar.Brand>
                <Navbar.Brand href="# ">
                    <img className="" src={iconcart} alt="Carrito de compra" width="100" height="100"/>{' '}
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
  
export default CartWidget