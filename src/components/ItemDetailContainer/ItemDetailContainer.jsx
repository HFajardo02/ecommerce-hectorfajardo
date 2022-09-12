import { useState, useEffect } from "react"
import { getFetch } from "../Data/Data"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        getFetch ()
            .then((resp) => setProducto(resp[3])) //Se inserta el valor "3" del arreglo con el fin de mostrar un solo producto
            .catch(err => console.log(err))            
    }, [])

    
    
    return <ItemDetail producto={producto} />
}
export default ItemDetailContainer
