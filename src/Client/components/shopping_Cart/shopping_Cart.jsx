import React, { useContext} from "react";
import { CartContext } from "../../../context/CartContext";
import Item from "./shopping_item"

const ShoppingCart = () => {
  //const DeleteProduct = () => {};
  const {cartItems,Subtotal,addItemToCart,Total,DeleteItem,ReduceAmount}=useContext(CartContext)
  const CloseSidebar = (e) => {
    document.getElementById("sidebar_cart-shopping-container").style.width =
      "0%";
    document.getElementById("sidebar_cart-shopping-container").style.opacity =
      "0";
    document.getElementById("sidebar_cart-shopping").style.visibility =
      "hidden";
    document.getElementById("body").style.overflowY = "scroll";
  };

 
  return (
    <div
      id="sidebar_cart-shopping-container"
      className="sidebar_cart-shopping-container"
    >
      <div id="sidebar_cart-shopping" className="sidebar_cart-shopping">
        <div className="sidebar_cart-shopping_title">
          <b>Your cart - {cartItems.length} items</b>
          <i onClick={CloseSidebar} class="fa-solid fa-xmark fa-2xl"></i>
        </div>
        <div
          id="cart_shopping-container"
          className="sidebar_cart-shopping_products-container"
        >
          {
            cartItems.map((value,index)=>{
              var route = "http://localhost:3001/" + value.file_img
              return(
                <div key={index} class="sidebar_cart-shopping_products-content">
          <div class="sidebar_cart-shopping_products-content-img">
            <img src={route} />
          </div>
          <div class="sidebar_cart-shopping_products-content-desc">
            <div class="sidebar_cart-shopping_products-content-desc_one">
              <b>{value.name}</b>
              <div>
                <button onClick={e=>ReduceAmount(value)}>-</button>
                <input type="numbre" defaultValue={value.amount}></input>
                <button onClick={e=>addItemToCart(value,1)}>+</button>
              </div>
              <b class="btn_remove" onClick={e=>DeleteItem(value)}>Remover</b>
            </div>
            <div class="sidebar_cart-shopping_products-content-desc_one">
              <p>${Subtotal(value.amount,value.price)}</p>
            </div>
          </div>
        </div>
              )
              

            })
          }
          
        </div>
        
        <div className="sidebar_cart-shopping_subtotal">
          <h3>Subtotal</h3> <b>${Total()} COP</b>
        </div>
        <button href="./checkout"
          onClick={e=>{
            window.location.href="./checkout"
          }}
        className="btn btn-primary"><a>CHECKOUT</a></button>
      </div>
    </div>
  );
};










export default ShoppingCart;
