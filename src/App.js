import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

    return (

        <>
            <NavBar />
            <Cuerpo />
            <ItemListContainer />
        </>
      
    );
}

export default App;
