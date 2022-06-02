import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="# ">Autos</Nav.Link>
                    <Nav.Link href="# ">Trucks</Nav.Link>
                    <Nav.Link href="# ">Clásicos</Nav.Link>
                    <Nav.Link href="# ">Super Mario Bros</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar