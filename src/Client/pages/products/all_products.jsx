import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./all-products.css";
import List from "./list";
import { Spinner } from "reactstrap";
import Loading from "../../components/loading/loading";
import DescripitionProduct from "../../components/description-product-card/description_product";
import { ModalProductContext, ModalProductProvider } from "../../../context/ModalProductContext";
 const Products =()=> {

  const [categories,setCategories]=useState([]);
  const [products,setProducts] = useState([]);
  const [loading,setLoading]=useState(true);
  const {product}=useContext(ModalProductContext);
 useEffect(() => {

  Axios.get("http://localhost:3001/product/categories").then((response) => {
    const categories = response.data.categories;
    setCategories(categories);
  });
  Axios.get("http://localhost:3001/product").then((response) => {
    const products = response.data.products;
    setProducts(products);
    setTimeout(() => {
      setLoading(false);
    },2000);
  });

 
  document.getElementById("image-header").style.display = "none";
  document.getElementById("header-client").style.minHeight = "15vh";
  document.getElementById("header-client").style.margin = "0";
  document.getElementById("header-client").style.backgroundImage = "none";
  document.getElementById("header-client").style.background = "#000";
  document.getElementById("header-client").style.color = "blue";
  document.getElementById("header-client").style.paddingBottom = 0;
  document.getElementById("navbar-client").style.position = "static";
 },[])

 
  
    return (
      <>
      
        {
          loading
          ? <Loading/>
          :
          <div className=" container-products ">
            <div className="sidebar-products">
              <h3>
                <i class="fa-solid fa-bars"></i> Categorias
              </h3>
              <ul>
                {categories.map((category) => (
                  <li>
                    <a href={"#" + category.name}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="list-products">
              {categories.map((category) => (
                <div id={category.name} class="list-products__content">
                  <h2>{category.name}</h2>
                  <List
                    key={category.name}
                    id={category._id}
                    products={products}
                  />
                </div>
              ))}
            </div>
            <DescripitionProduct product={product}/>
          </div>
        }
        
      </>
    );
  }

  export default Products;
