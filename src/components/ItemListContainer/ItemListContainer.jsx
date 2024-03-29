import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList/ItemList";
import { getAllItems } from "../../utils/firebaseConfig";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoriaId } = useParams()
   
    useEffect(()=>{
            if (categoriaId) {
                getAllItems ()// llamada a la api
                .then((resp)=> {
                    setProductos(resp.filter(productos => productos.categoria === categoriaId ))
                    setLoading(false)
                })
                .catch(err => console.log(err))           
            } 
            else {
                getAllItems ()// llamada a la api
                .then( (resp)=> setProductos(resp) )
                .catch(err => console.log(err)) 
                .finally(()=> setLoading(false))           
        }
                
    }, [categoriaId])


    return (
        <div>
            { loading ? 
                <div className="text-center"><h1><br />Cargando productos...</h1></div>            
            :   
                <div className="container">
                    <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer