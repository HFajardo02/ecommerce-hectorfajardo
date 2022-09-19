import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({producto}) => {

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
                                <ItemCount initial={1} stock={producto.stock}/>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
    )
}

export default ItemDetail