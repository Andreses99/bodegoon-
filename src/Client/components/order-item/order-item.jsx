import "./order-item.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const OrderItem = () => {
    const {cartItems,Subtotal }=useContext(CartContext);

  return (
    <div className="container-order_item">
     
        {
            cartItems.map(value => {
                return(
                    <div className="container-order_item-ul-li">

                        <div className="container-order_item-ul-li-name">{value.name}</div>
                        <div><b>${Subtotal(value.amount,value.price)}</b></div>
                    </div>
                    
                )
                
            })
        }
      
    </div>
  );
};

export default OrderItem;
