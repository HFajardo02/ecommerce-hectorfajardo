import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  
    const [cart, setCart] = useState([])  
    
    const addToCart = (item) => {

        if (isInCart(item))
        {
            const product = cart.find (p => p.id === item.id);
            const newArray = cart.filter(producto => producto.id !== item.id);
            product.cantidad += item.cantidad;
            setCart([
                ...newArray,
                product
            ])
        }
        else
        {
            setCart([
                ...cart,
                item
            ])
        }
    }

    const isInCart = item => {
        return cart.some(producto => producto.id === item.id) 
    }

    
    const vaciarCarrito = () => {
        setCart([])
    }


    return (
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}