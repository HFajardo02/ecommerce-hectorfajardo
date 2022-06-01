import Carousel from 'react-bootstrap/Carousel';
import slider1 from './../../images/slider1.jpg';
import slider2 from './../../images/slider2.jpg';
import slider3 from './../../images/slider3.webp';
import sliders from './Carrusel.css';


const Carrusel = () => {
    return (

            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider1} alt="Hot Wheels Primer Slider" />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider2} alt="Second slide" />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 sliders" src={slider3} alt="Third slide" />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Carrusel
