import Carousel from 'react-bootstrap/Carousel';
import slider1 from './../../images/slider1.jpg';
import slider2 from './../../images/slider2.jpg';
import slider3 from './../../images/slider3.webp';
import slider4 from './../../images/slider4.jpg';
import sliders from './../Carrusel/Carrusel.css';


const Carrusel = () => {
    return (

            <Carousel className="text-white">
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider1} alt="Hot Wheels Autos" />
                    <Carousel.Caption>
                        <h5>Categoría: Autos</h5>
                        <p>Colección Completa de Autos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider2} alt="Hot Wheels Trucks" />
                    <Carousel.Caption>
                        <h5>Categoría: Trucks</h5>
                        <p>Colección Completa de Trucks</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider3} alt="Hot Wheels Clásicos" />
                    <Carousel.Caption>
                        <h5>Categoría: Clásicos</h5>
                        <p>Colección Completa de Autos Clásicos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider4} alt="Hot Wheels Super Mario Bros" />
                    <Carousel.Caption>
                        <h5>Categoría: Super Mario Bros</h5>
                        <p>Colección Especial de Super Mario Bros</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Carrusel
