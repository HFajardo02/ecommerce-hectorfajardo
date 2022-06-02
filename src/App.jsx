import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Cuerpo from './components/Cuerpo/Cuerpo';
import NavBar from './components/NavBar/NavBar';
import Carrusel from './components/Carrusel/Carrusel';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <>
      <CartWidget />
      <NavBar />
      <Carrusel />
      <ItemListContainer />
    </>
    
  );
}

export default App;
