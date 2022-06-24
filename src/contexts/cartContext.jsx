import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])

    /* const addToCart = (item, count) => {
        
        let newCart;
        
        console.log("item-algo", item)
        console.log("Cantidad", count)

        let product = cart.find(product => product.id === item.id);
        
        console.log("Product", product)
        
        if (product)
        {
            product.count += count;
            newCart = [...cart];
        }
        else
        {
            product = {...item, count: count};
            newCart = [...cart, product];
        }
        setCart(newCart)
    } */
    
    
    const addToCart = (item) => {
        setCart([
            ...cart,
            item 
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