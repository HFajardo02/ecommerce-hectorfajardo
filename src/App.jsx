import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

    const verCarrito = (count) => {
        console.log ("Artículos seleccionados: ", {count})
    }

    return (

        <>
            <NavBar />
            <Cuerpo />
            <ItemListContainer />
            <ItemCount initial={1} stock={10} verCarrito={verCarrito}/>
            <ItemDetailContainer />
        
        </>
      
    );
}

export default App;
