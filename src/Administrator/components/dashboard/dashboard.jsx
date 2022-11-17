import React from "react";
import { useEffect } from "react";
import "./dashboard.css";

const Dashboard = (props) => {
  useEffect(() => {
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
  });
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i className="fas fa-user-secret me-2"></i>El Boodegon
          </div>
          <div className="list-group list-group-flush my-3">
            <a
              href="#"
              className="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i className="fas fa-tachometer-alt me-2"></i>Dashboard
            </a>
            <a
              href="/dashboard/products"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-project-diagram me-2"></i>Productos
            </a>

            <a
              href="/dashboard/orders"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-map-marker-alt me-2"></i>Pedidos
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3 "
                id="menu-toggle" 
              ></i>
              <h2 className="fs-2 m-0">Dashboard</h2>
            </div>
            <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown"aria-expanded="false" >
                            <i className="fas fa-user me-2"></i>UserName
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Cerrar Sesion</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
          </nav>
          <div className="content-dashboard container-fluid px-4">
                {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
