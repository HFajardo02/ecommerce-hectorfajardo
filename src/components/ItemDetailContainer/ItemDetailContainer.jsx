import { useState, useEffect } from "react";
import { getFetch } from "../Data/Data";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({})

    const { id } = useParams ()

    useEffect(() => {
        getFetch (id)
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))
    }, [id])

    return <ItemDetail producto={producto}/>
    
}

export default ItemDetailContainer
