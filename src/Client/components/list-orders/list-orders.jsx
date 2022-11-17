import "./list-orders.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const ListOrders=({children})=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className="container-list_orders">

            <p className="container-list_orders-title">Detalle del Pedido ({
                cartItems.length
            } productos)</p>
            
                {children}
            
            
        </div>
        
    )

}

export default ListOrders;