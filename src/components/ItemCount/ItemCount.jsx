import { useState } from 'react'
import swal from 'sweetalert'


    function ItemCount ({stock, initial, verCarrito}){

        const [count, setCount]= useState(initial)

        
        function onSubstract(){
            setCount(count-1)
        }

        function onAdd(){
            setCount(count+1)
        }

        const btnAlerta = () => {
            swal({
                title:"Producto agregado al carrito",
                icon: "success",
                timer: "1500",
            });
        }
        

        return(
            <div>
                <button disabled={ count <1 } onClick={onSubstract}><h2>-</h2></button>
                <button><h2>{count}</h2></button>
                <button disabled={ count >= stock } onClick={onAdd}><h2>+</h2></button>
                <br />
                <br />
                <button className="btn btn-secondary" disabled={count<=0} onClick={() => {verCarrito(count); btnAlerta()}}>Agregar al carrito</button>
            </div>
        )
    }

export default ItemCount