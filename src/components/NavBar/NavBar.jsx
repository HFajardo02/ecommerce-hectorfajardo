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
                        <NavLink to="categoria/autos" >Autos</NavLink>
                        <NavLink to="categoria/trucks" >Trucks</NavLink>
                        <NavLink to="categoria/clasicos" >Clásicos</NavLink>
                        <NavLink to="categoria/super mario bros" >Super Mario Bros</NavLink>
                    </Nav>
                </Container>

                
            </Navbar>

        </>
    )
}

export default NavBar