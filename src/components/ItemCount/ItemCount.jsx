import { useState } from 'react'

    function ItemCount ({stock, initial}){

        const [count, getCount]= useState(initial)

        function onSubtract(){
            getCount(count-1)
        }

        function onAdd(){
            getCount(count+1)
        }

        function verCarrito(){
            console.log ("Artículos seleccionados: ", {count})
        }


        return(
            <div>
                <button disabled={ count <1 } onClick={onSubtract}><h2>-</h2></button>
                <button><h2>{count}</h2></button>
                <button disabled={ count >= stock } onClick={onAdd}><h2>+</h2></button>
                <br />
                <br />
                <button disabled={count<=0} onClick={verCarrito}>Agregar al carrito</button>
            </div>
        )
    }

export default ItemCount