import { useEffect } from "react"
import { useState } from "react"
import { getFetchOne } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({})
    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))
    }, [])

  return <ItemDetail producto={producto}/>
  
}

export default ItemDetailContainer