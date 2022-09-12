import { useEffect, useState } from "react";
import { getFetch } from "../Data/Data";



const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{
        getFetch () // llamada a la api
        .then((resp)=> {
                setProductos(resp)
                setLoading(false)
        })
        .catch(err => console.log(err))
        // .finally(()=> )
    }, [])

    console.log(productos)

    return (
        <div>
            { loading ? <div className="text-center"><h3><br />Cargando productos...</h3></div> : productos.map(prod => 
                <div className='col-md-4 p-1' key={prod.id} >                        
                    <div className="card w-100 mt-5" >
                        <div className="card-header text-center">
                        <h4>Nombre: {`${prod.model}`}</h4>
                        </div>
                        <div className="card-body text-center">
                            {<img src={prod.photo_url} alt='' className='w-50' />}                                                 
                        </div>
                        <div className="card-footer h5 text-center">
                            Categoría: {prod.categoria}
                            <br />
                            Serie: {prod.series}
                            <br />
                            Año: {prod.year}
                            <br />
                            Stock Disponible: {prod.stock} unidades
                            <br />
                            Precio: ${prod.precio} MXN
                            <br />
                            <br />
                            <button className="btn btn-outline-primary btn-block" onClick={()=>console.log('Ver Detalle del Producto')}>
                                Detalle del producto
                            </button>                
                        </div>
                    </div>                                                                                
                </div>
            ) }
        </div>
    )
}

export default ItemListContainer




// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import autos from './../../images/autos.png';
// import trucks from './../../images/trucks.png';
// import clasicos from './../../images/clasicos.png';
// import mariobros from './../../images/mariobros.png';
// import ItemCount from '../ItemCount/ItemCount';

// function ItemListContainer({contCardAutos, contCardTrucks, contCardClasicos, contCardMarioBros}) {

// const verCarrito = (count) => {
//     console.log ("Artículos seleccionados: ", {count})
// }


//   return (
//     <CardGroup className="container mt-5 text-center">
//             <Card>
//                 <Card.Img variant="top" src={autos} />
//                 <Card.Body>
//                     <Card.Title>Autos</Card.Title>
//                     <Card.Text> 
//                         {contCardAutos}
//                     </Card.Text>
//                     <Card.Text>
//                     <>
//                         <ItemCount stock={5} initial={1} verCarrito={verCarrito}/>
//                     </>
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={trucks} />
//                 <Card.Body>
//                     <Card.Title>Trucks</Card.Title>
//                     <Card.Text>
//                         {contCardTrucks}
//                     </Card.Text>
//                     <Card.Text>
//                     <>
//                         <ItemCount stock={10} initial={1} verCarrito={verCarrito}/>
//                     </>
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={clasicos} />
//                 <Card.Body>
//                     <Card.Title>Clásicos</Card.Title>
//                     <Card.Text>
//                         {contCardClasicos}
//                     </Card.Text>
//                     <Card.Text>
//                     <>
//                         <ItemCount stock={15} initial={1} verCarrito={verCarrito}/>
//                     </>
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Img variant="top" src={mariobros} />
//                 <Card.Body>
//                     <Card.Title>Mario Bros</Card.Title>
//                     <Card.Text>
//                         {contCardMarioBros}
//                     </Card.Text>
//                     <Card.Text>
//                     <>
//                         <ItemCount stock={8} initial={1} verCarrito={verCarrito}/>
//                     </>
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//         </CardGroup>
//   );
// }

// export default ItemListContainer;