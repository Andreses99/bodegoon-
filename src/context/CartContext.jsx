import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const productsLocalStorage = localStorage.getItem("cart");

    return productsLocalStorage ? JSON.parse(productsLocalStorage) : [];
  });
  const [checkoutState,setCheckoutState]=useState(()=>{
    const state=localStorage.getItem("checkout")

    return state ? JSON.parse(state):[];
    
})
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
  }, [cartItems]);

  useEffect(() => {
    console.log(checkoutState)
    localStorage.setItem("checkout", JSON.stringify(checkoutState))
  },[checkoutState])


  const addItemToCart = (product,amount) => {
    const findItem = cartItems.find(
      (productsIncart) => productsIncart._id === product._id
    );

    if (findItem) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...findItem, amount: findItem.amount + amount };
          } else return productInCart;
        })
      );
    } else {
        
      setCartItems([...cartItems, { ...product, amount: amount }]);
    }
    setCheckoutState({state:false})
  };

  const Subtotal=(amount,prize)=>{
    
        return amount*prize
  }

  const Total=()=>{
    var total=0
    cartItems.map(value=>{
      total=total+value.amount*value.price
    })
    return total
  }

  const DeleteItem=(product)=>{

    setCartItems(
        cartItems.filter(value=>value._id!==product._id)
    )
    setCheckoutState({state:false})
  }

  const ReduceAmount=(product)=>{

    
    
    const inCart=cartItems.find(
        value=>value._id===product._id
    )
    
    if(inCart.amount===1){
        setCartItems(
            cartItems.filter(value=>value._id!==product._id)
        )
    }
    else{

        setCartItems(

            cartItems.map((productInCart) => {
                if (productInCart._id === product._id) {
                    
                  return { ...inCart, amount: inCart.amount - 1 };
                } else return productInCart;
              })
        )
    }
    setCheckoutState({state:false})
  }

  return (
    <CartContext.Provider value={{ cartItems, checkoutState,setCheckoutState,addItemToCart,Subtotal,Total,DeleteItem,ReduceAmount }}>
      {children}
    </CartContext.Provider>
  );
};


