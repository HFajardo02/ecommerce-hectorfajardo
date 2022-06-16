import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoriaId } = useParams()

    console.log(categoriaId)
   
    useEffect(()=>{
        if (categoriaId) {
            getFetch()// llamada a la api
            .then((resp)=> {
                    setProductos(resp.filter(productos => productos.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()// llamada a la api
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        }
        
        // .finally(()=> )
    }, [categoriaId])


    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div className="container">
                      <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer