import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

    //Se definen las props de las cards
    let contenidoAutos = 'Aqui se mostrará el contenido de la categoría "Autos"'
    let contenidoTrucks = 'Aqui se mostrará el contenido de la categoría "Trucks"'
    let contenidoClasicos = 'Aqui se mostrará el contenido de la categoría "Clásicos"'

    return (

        <>
            <NavBar />
            <Cuerpo />
            <ItemListContainer contCardAutos={contenidoAutos} contCardTrucks={contenidoTrucks} contCardClasicos={contenidoClasicos}/>
        
        </>
      
    );
}

export default App;
