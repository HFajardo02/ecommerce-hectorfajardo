import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Item ({prod}) => {
    return (
        <CardGroup className="container mt-5 text-center">
            <Card>
                <Card.Img variant="top" src={prod.photo_url} />
                <Card.Body>
                <Card.Title>{prod.model}</Card.Title>
                <Card.Text> 
                    {prod.series}
                </Card.Text>
                <Card.Text>
                    <>
                        <ItemCount stock={5} initial={1} verCarrito={verCarrito}/>
                    </>
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Item