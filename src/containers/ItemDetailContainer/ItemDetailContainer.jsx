import { useEffect } from "react"
import { useState } from "react"
import { getFetchOne } from "../../helpers/getFetch"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({})

    const { id } = useParams ()

    console.log(id)


    useEffect(() => {
        getFetchOne(id)
            .then((resp) => setProducto(resp.find(prod => prod.id === id)))
            .catch(err => console.log(err))
    }, [])

  return <ItemDetail producto={producto}/>
  
}

export default ItemDetailContainer