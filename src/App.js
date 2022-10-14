import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
//import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './contexts/cartContext';
import Orders from './components/Orders/Orders';


function App() {

    return (
        <CartContextProvider>
            <>
                <Rutas>      
                    <NavBar />
                    {/* <Cuerpo /> */}
                    
                    <Routes>
                        <Route index path='/' element={<ItemListContainer />} />
                        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

                        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />

                        <Route path='*' element={<Navigate to='/' /> } />

                        <Route path='/orders' element={<Orders />} />

                    </Routes>
                </Rutas>
            </>
            </CartContextProvider>
    );
}

export default App;