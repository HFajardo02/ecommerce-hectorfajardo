import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import autos from './../../images/autos.png';
import trucks from './../../images/trucks.png';
import clasicos from './../../images/clasicos.png';


export default function ItemListContainer(){

    //Se definen las props de las cards
    let contenidoAutos = 'Aqui se mostrará el contenido de la categoría "Autos"'
    let contenidoTrucks = 'Aqui se mostrará el contenido de la categoría "Trucks"'
    let contenidoClasicos = 'Aqui se mostrará el contenido de la categoría "Clásicos"'

    return(

        <CardGroup className="container mt-5 text-center">
            <Card>
                <Card.Img variant="top" src={autos} />
                <Card.Body>
                <Card.Title>Autos</Card.Title>
                <Card.Text> 
                    {contenidoAutos}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={trucks} />
                <Card.Body>
                <Card.Title>Trucks</Card.Title>
                <Card.Text>
                    {contenidoTrucks}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={clasicos} />
                <Card.Body>
                <Card.Title>Clásicos</Card.Title>
                <Card.Text>
                    {contenidoClasicos}
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        
    )
}