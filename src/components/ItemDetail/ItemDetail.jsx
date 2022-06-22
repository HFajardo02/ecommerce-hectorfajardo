import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ItemCount from '../ItemCount/ItemCount';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';
import { useCartContext } from '../../contexts/cartContext';


const ItemDetail = ({producto}) => {

    const { cart, addToCart } = useCartContext()

    const verCarrito = (count) => {
        console.log ("Artículos seleccionados: ", {count})
        addToCart( {...producto, cantidad: count} )
    }

    console.log(cart)

    return(        
            <Row xs={1} md={2} lg={4} className="container mt-5 text-center">
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Img src={producto.photo_url}/>
                            <Card.Body>
                                <Card.Title>Nombre: {producto.model}</Card.Title>
                                <Card.Text> 
                                    Serie: {producto.series}
                                    <br />
                                    Categoría: {producto.categoria}
                                    <br />
                                    Precio: ${producto.precio} MXN
                                    <br />
                                    Stock: {producto.stock}
                                </Card.Text>
                                <Card.Text>
                                <ItemCount initial={1} stock={producto.stock} verCarrito={verCarrito}/>
                                </Card.Text>
                                <Card>
                                    <Intercambiabilidad />
                                </Card>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
    )
}

export default ItemDetail