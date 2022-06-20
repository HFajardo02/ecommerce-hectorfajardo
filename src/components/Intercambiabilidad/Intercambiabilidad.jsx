import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
            <Link to='/cart' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('Ver carrito de compra') } 
                >Ver carrito</button><br /><br />
            </Link>
            <Link to='/' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('Ir al Inicio') } 
                >Seguir comprando</button>
            </Link>
        </>
    )
}



const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
            >
                Agregar Al carrito
            </button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
