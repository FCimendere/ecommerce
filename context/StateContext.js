
import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCardItems] = useState([]);
    const [totalPrice, setTotalPrice ] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty,setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        //finding total price of the product in cart
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        //update total quantity of the product in cart
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart){
            //update items in the cart
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity : cartProduct.quantity + quantity
                }
            })
            setCardItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            
            setCardItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`); 
    }
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice((prevTotalPrice)=> prevTotalPrice-foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
        setCardItems(newCartItems);
    }
    //the function that will make possible to change quantity, price inside of the side-cart again!
    const toggleCartItemQuantity = (id,value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        // if (!foundProduct) return;
        index = cartItems.findIndex((product) => product._id === id);
        // const newCartItems = cartItems.filter((item) => item._id !== id);
        const newCartItems = [...cartItems];

        if(value === 'inc'){
            /* create a new copy ** of the STATE 
            update the cartItems with current cartItems, adding one new element to it, 
            spread properties of the foundproduct, increasing quantity by one */
            // RING RING! Note for dev..Never mutate a state **cartItems[index] = foundProduct;**
            newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
            // setCardItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1}]);
            //update the price with we found
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            //update the total quantity with we found
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities +1);
        } else if (value === 'dec') {
            if(foundProduct.quantity > 1) {
                newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
                // setCardItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities -1);
            }
        }
        // Update the cartItems state with the new array
        setCardItems(newCartItems);
    }
 
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;
            return prevQty - 1;
        });
    }

    return(
        <Context.Provider 
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                setCardItems,
                setTotalPrice,
                setTotalQuantities
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);