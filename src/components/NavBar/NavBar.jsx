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
                    <Nav >
                        <NavLink to="categoria/Autos" >Autos</NavLink>
                        <NavLink to="categoria/Trucks" >Trucks</NavLink>
                        <NavLink to="categoria/Clasicos" >Clásicos</NavLink>
                        <NavLink to="categoria/Super Mario Bros" >Super Mario Bros</NavLink>
                    </Nav>
                </Container>

                
            </Navbar>

        </>
    )
}

export default NavBar


// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

// import CartWidget from '../CartWidget/CartWidget';

// const NavBar = () => {
//   return (
//         <>

//             <CartWidget />

//             <Navbar bg="dark" variant="dark">
//                 <Container>
//                     <Nav className="me-auto">
//                         <Nav.Link href="# ">Autos</Nav.Link>
//                         <Nav.Link href="# ">Trucks</Nav.Link>
//                         <Nav.Link href="# ">Clásicos</Nav.Link>
//                         <Nav.Link href="# ">Super Mario Bros</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>

//         </>
//     )
// }

// export default NavBar