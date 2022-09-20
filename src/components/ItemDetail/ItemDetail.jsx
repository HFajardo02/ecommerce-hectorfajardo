import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../contexts/cartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({producto}) => {

    const { cart, addToCart } = useCartContext()

    const verCarrito = (count) => {
        console.log ("Número de Artículos Seleccionados: ", {count})
        addToCart( {...producto, cantidad: count} )
    }

    console.log(cart)

    return(        
            <Row xs={1} md={2} lg={4} className="container mt-5 text-center">
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title><h2> {producto.model} </h2></Card.Title>
                                <Card.Img src={producto.photo_url}/>
                                <Card.Text> 
                                    <b>Serie:</b> {producto.series}
                                    <br />
                                    <b>Categoría:</b> {producto.categoria}
                                    <br />
                                    <b>Año:</b> {producto.year}
                                    <br />
                                    <b>Precio:</b> ${producto.precio} MXN
                                    <br />
                                    <b>Stock:</b> {producto.stock} unidades
                                </Card.Text>
                                <ItemCount initial={1} stock={producto.stock} verCarrito={verCarrito}/>
                                    <Card.Text>
                                        <Link to='/cart' >
                                            <button className="btn btn-secondary mt-2" onClick={()=>console.log('Ver carrito') }>Ver carrito</button><br /><br />
                                        </Link>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
    )
}

export default ItemDetail