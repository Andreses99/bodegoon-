import React from "react";
import { useContext } from "react";

import { ModalProductContext } from "../../../context/ModalProductContext";


const Product = ({product}) => {

  const {setProduct}=useContext(ModalProductContext);
  var route = "http://localhost:3001/" + product.file_img;
 
  const OpenModalDescription=(e)=> {

    setProduct(product)
    const modal=document.querySelector('.modal');
    modal.classList.add('modal__product-description--show')
  }
  

  return (
    <>
      <div key={product.id}className="container col-md-4 col-sm-12 list-products__content-card">
        <div className="card-content">
          <div className="  col-md-4 col-sm-12 list-products__content-card-img">
            <img src={route}></img>
          </div>
          <div className="col-md-4 col-sm-12 list-products__content-card-info">
            <b className="list-products__content-card_info-title">{product.name}</b>
            <p className="list-products__content-card_info-prize">${product.price}</p>
            <button
              className=" btn btn-primary list-products__content-card_info-button"
              type="button"
              onClick={
                OpenModalDescription
                
              }
            >
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
