import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";

import ItemList from "../../components/ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)   
   
    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                setProductos(resp)
                setLoading(false)
        })
        .catch(err => console.log(err))
        // .finally(()=> )
    }, [])
   
    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div>
                      <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer