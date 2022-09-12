import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
//import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

    return (

        <>
            <NavBar />
            {/*<Cuerpo />*/}
            <ItemListContainer />
            <ItemDetailContainer />
        </>
      
    );
}

export default App;
