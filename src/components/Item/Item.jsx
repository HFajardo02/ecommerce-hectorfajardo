import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Item = () => {

    return (

        <CardGroup className="container mt-5 text-center" key={producto.id}>
            <Card>
                <Card.Img variant="top" src={productos.photo_url} alt='Hot Wheels'/>
                <Card.Body>
                <Card.Title>{productos.model}</Card.Title>
                <Card.Text>{productos.series}</Card.Text>
                <Card.Text>{productos.precio}</Card.Text>
                <Card.Text>
                    <>
                        <ItemCount stock={productos.stock} initial={1}/>
                    </>
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

    )

}

export default Item;