import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./products";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }
 

  CondicionalProduct(product,id){
    

    if(product.category!=id){
        return;
    }
    return(

        <Product
          key={product._id}
          product={product}
         />
    )
                

  }

  render() {
    return (
      <>
       
            {this.props.products.map((product) => 
                
                this.CondicionalProduct(product,this.props.id)
                
            )}
          
            
        
      </>
    );
  }
}
