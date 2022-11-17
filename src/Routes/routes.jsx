import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Client/pages/index/index";
import Login from "../Client/pages/login/login";
import Registrer from "../Client/pages/registrer/registrer"
import Dashboard from "../Administrator/components/dashboard/dashboard"
import Products from "../Administrator/pages/products/products"
import All_Products from '../Client/pages/products/all_products'
import Checkout from "../Client/pages/checkout/checkout"
import SendOrder from "../Client/pages/send_order/send_order";
import Orders from "../Administrator/pages/orders/orders";
import SalesReport from "../Administrator/pages/report/sales-report";
const Ruta = () => {

  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/all-products" exact element={<All_Products />}></Route>
        <Route path="/checkout" exact element={<Checkout/>}></Route>
        <Route path="/registrer" exact element={<Registrer />}></Route>
        <Route path="/dashboard/report" exact element={<SalesReport/>}></Route>
        <Route path="/dashboard/products" exact element={<Products />}></Route>
        <Route path="/dashboard/orders" exact element={<Orders />}></Route>
        <Route path="/send-order"  element={<SendOrder/>}></Route>
      </Routes>
    </Router>
  );
};
export default Ruta;
