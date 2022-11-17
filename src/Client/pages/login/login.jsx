import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import style from "./login.css";
import Loguea from "../../../img/gallery-4.jpg"
import Log from "../../../img/logodefin.png"
import Cookies from "universal-cookie";
import WindowAlert from "sweetalert";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cookies=new Cookies();
  useEffect(() => {
    document.getElementById("image-header").style.display = "none";
    document.getElementById("header-client").style.minHeight="15vh";
    document.getElementById("header-client").style.margin="0";
    document.getElementById("header-client").style.backgroundImage="none";
    document.getElementById("header-client").style.background="#000";
    document.getElementById("header-client").style.color="#000";
    document.getElementById("footer").style.display = "none";
  }, []);

  const logged = () => {
    Axios.post("https://host-bodegoon.herokuapp.com/login", {
      name_user: username,
      password: password,
    })  
    .then((response) => {
      
      if(response.data.result){

            cookies.set("id",response.data.id)
            cookies.set("name",response.data.name,{path:"/"})
            cookies.set("username",response.data.user,{path:"/"})
            cookies.set("email",response.data.email,{path:"/"})
            
              WindowAlert({
                title:"Inicio de Sesion",
                text: `Bienvenido ${response.data.name}`,
                icon: "success",
                timer:"3000"
              })

            
            setTimeout(() => {

              window.location.href="./"
            
          },2000)
            
        }
        else{
            WindowAlert({
              title:"Inicio de Sesion",
              text: "Las credenciales son incorrectas",
              icon: "error",
              timer:"3000"
            })
        }
    });
  };



  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "gray " }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={Loguea}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">
                            <img src={Log} />
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Inicia sesion en su cuenta
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-sm"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            placeholder="Username"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-sm"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Password"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            onClick={logged}
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            style={{ width: "100%" }}
                          >
                            Login
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          no tines una cuenta?{" "}
                          <a href="./registrer" style={{ color: "#393f81" }}>
                            Registrate aca
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
