import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import NavBar from './components/NavBar/NavBar';
import Carrusel from './components/Carrusel/Carrusel';

function App() {
  return (

    <>
      <NavBar />
      <Carrusel />
      <Cuerpo />
    </>
    
  );
}

export default App;
