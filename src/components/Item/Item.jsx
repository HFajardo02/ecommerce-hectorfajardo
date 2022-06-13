import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
//import ItemCount from '../ItemCount/ItemCount';


const Item = ({prod}) => {
    return (

        <CardGroup className="container mt-5 text-center">
            <Card>
                <Card.Img src={prod.photo_url}/>
                <Card.Body>
                <Card.Title>{prod.model}</Card.Title>
                <Card.Text> 
                    {prod.series}
                </Card.Text>
                <Card.Text> 
                    ${prod.precio} MXN
                </Card.Text>
                <Card.Text>
                    <button>Detalle del producto</button>
                </Card.Text>
                {/* <Card.Text>
                    <>
                        <ItemCount stock={prod.stock} initial={1} verCarrito={verCarrito}/>
                    </>
                </Card.Text> */}
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Item