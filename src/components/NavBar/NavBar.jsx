import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
        <>
            <CartWidget />
        
            <Navbar bg="dark" variant="dark">

                <Container>
                    <Nav>
                        <NavLink to="categoria/Autos" className="nav-item nav-link text-center" style={{color:"white"}}>Autos</NavLink>
                        <NavLink to="categoria/Trucks" className="nav-item nav-link text-center" style={{color:"white"}}>Trucks</NavLink>
                        <NavLink to="categoria/Clasicos" className="nav-item nav-link text-center" style={{color:"white"}}>Clásicos</NavLink>
                        <NavLink to="categoria/Super Mario Bros" className="nav-item nav-link text-center" style={{color:"white"}}>Super Mario Bros</NavLink>
                    </Nav>
                </Container>

            </Navbar>

        </>
    )
}

export default NavBar