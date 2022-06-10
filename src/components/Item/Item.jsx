import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import autos from './../../images/autos.png';
import trucks from './../../images/trucks.png';
import clasicos from './../../images/clasicos.png';

const Item ({prod}) => {
    return (
        <CardGroup className="container mt-5 text-center">
            <Card>
                <Card.Img variant="top" src={autos} />
                <Card.Body>
                <Card.Title>Autos</Card.Title>
                <Card.Text> 
                    {contCardAutos}
                </Card.Text>
                <Card.Text>
                    <>
                        <ItemCount stock={5} initial={1} verCarrito={verCarrito}/>
                    </>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={trucks} />
                <Card.Body>
                <Card.Title>Trucks</Card.Title>
                <Card.Text>
                    {contCardTrucks}
                </Card.Text>
                <Card.Text>
                    <>
                        <ItemCount stock={10} initial={1} verCarrito={verCarrito}/>
                    </>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={clasicos} />
                <Card.Body>
                <Card.Title>Clásicos</Card.Title>
                <Card.Text>
                    {contCardClasicos}
                </Card.Text>
                <Card.Text>
                    <>
                        <ItemCount stock={15} initial={1} verCarrito={verCarrito}/>
                    </>
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Item