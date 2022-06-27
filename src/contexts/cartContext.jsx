import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])  
    
    const addToCart = (item) => {

        console.log("QUE ES ESTE ITEM: ", item)

        setCart([
            console.log("ALGO...CART: ", cart),
            ...cart,
            item,
            console.log("OTRO ITEM: ", item) 
        ])
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