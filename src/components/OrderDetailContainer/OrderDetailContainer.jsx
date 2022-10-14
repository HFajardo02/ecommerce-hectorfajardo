import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderId } from "../../utils/firebaseConfig";
import Orders from "../Orders/Orders";


const OrderDetailContainer = () => {

    const [orden, setOrden] = useState ({})
    const { id } = useParams ()

    useEffect(() => {
        getOrderId (id)
            .then((resp) => setOrden(resp))
            .catch(err => console.log(err))
    }, [id])

    console.log (orden);

    return <Orders orden={orden}/>
    
}

export default OrderDetailContainer