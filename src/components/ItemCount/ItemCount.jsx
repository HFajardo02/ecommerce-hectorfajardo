import { useState } from 'react'

    function ItemCount ({stock, initial}){

        //console.log({stock})
        //console.log({initial})

        const [count, getCount]= useState(initial)

        function onSubtract(){
            getCount(count-1)
        }

        function onAdd(){
            getCount(count+1)
        }

        function verCarrito(){
            console.log ("Productos en el carrito:", {count})
        }

        return(
            <div>
                <button onClick={onSubtract}>-</button>
                <button>   {count}</button>
                <button onClick={onAdd}>+</button>
                <br />
                <br />
                <button onClick={verCarrito}>Agregar al carrito</button>
            </div>
        )
    }

export default ItemCount