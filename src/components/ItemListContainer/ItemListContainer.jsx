import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import autos from './../../images/autos.png';
import trucks from './../../images/trucks.png';
import clasicos from './../../images/clasicos.png';


export default function ItemListContainer(){
    return(

        <CardGroup className="container mt-5 text-center">
            <Card>
                <Card.Img variant="top" src={autos} />
                <Card.Body>
                <Card.Title>Autos</Card.Title>
                <Card.Text> 
                    Aqui se mostrará el contenido de la categoría "Autos"
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={trucks} />
                <Card.Body>
                <Card.Title>Trucks</Card.Title>
                <Card.Text>
                    Aqui se mostrará el contenido de la categoría "Trucks"
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={clasicos} />
                <Card.Body>
                <Card.Title>Clásicos</Card.Title>
                <Card.Text>
                    Aqui se mostrará el contenido de la categoría "Clásicos"
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        
    )
}