import React,{useEffect}from "react";
import { useState } from "react";
import "./registrer.css"
import Axios from "axios";
import WindowAlert from "sweetalert";
const Registrer=()=>{

    const [name,setName]=useState("");  
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    
    useEffect(() => {
        document.getElementById("header").style.display = "none";
        document.getElementById("footer").style.display = "none";
      }, []);

    const registrer=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:3001/registrer",{

            name:name,
            email:email,
            name_user:username,
            password:password,
            type_user:1

        }).then(response=>{
            WindowAlert({
                title:"Inicio de Sesion",
                text: "Registrado Correctamente",
                icon: "success",
                timer:"3000"
              })
              setTimeout(()=>{window.location.href="./login"},3000)
            
        })


    }

    return(
        <>
            <div className="principal-container">

                <div className="principal-container__left">
                    <section className="principal-container__left-text">
                    <h1>Date un gusto</h1>
                    <p>Tenemos platillos que te pueden gustar</p>

                    </section>

                </div>

                <div className="container-form">

                    <form onSubmit={registrer}>

                        <section className="container-form__contents">

                            <h2>Sign Up</h2>
                            <div className="login-container"> 
                               
                                <p >Alreday haven account<a href="./login"><strong>  Log In</strong></a></p>
                            </div>
                        </section>
                        <div className="input-container full_name">

                            <label>Nombre Completo</label>
                            <input placeholder="" onChange={e=>{
                                setName(e.target.value);
                            }}required></input>

                        </div>


                        <div className="input-container email">

                            <label>Email</label>
                            <input placeholder="" onChange={e=>{
                                setEmail(e.target.value);
                            }}required></input>

                        </div>

                        <div className="input-container username">

                            <label>Usuario</label>
                            <input type="email "placeholder="" 
                            onChange={e=>{
                                setUsername(e.target.value);
                            }}required></input>

                        </div>
                        <div className="input-container password">

                            <label>Contraseña</label>
                            <input type="password" placeholder="" onChange={e=>{
                                setPassword(e.target.value);
                            }}required></input>
                            <i className="far fa-eye-slash"></i>
                        </div>
                        
                        <button className="signup-btn" type="submit">Sign Up</button>

                    </form>

                </div>
            </div>
            
        </>
    )
/*
    return(<>
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
    <div className="wrapper wrapper--w960">
        <div className="card card-2">
            
            <div className="card-body">
                <h2 className="title">REGISTRO DE DATOS</h2>
                <form >
                   
                    <div className="row row-space">
                    <div className="col-2">

                    <div className="input-group">
                        <input className="input--style-2 js-datepicker" type="text" placeholder="First Name" name="first_namename" 
                        onChange={(e)=>
                            {setFirstName(e.target.value)}}/>
                    </div> 
                    </div>
                    
                        <div className="col-2">
                            <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Second Name" name="second_name" onChange={e=>setSecondName(e.target.value)}/>
                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div className="col-2">
                        <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Last Name" name="last_name"onChange={e=>setLastName(e.target.value)}/>
                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div className="col-2">
                        <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Cedula" name="cc" onChange={e=>setCedula(e.target.value)}/>
                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>

                        <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Direccion" name="cc" onChange={e=>setDirection(e.target.value)}/>
                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                    </div>
                   
                    <div className="row row-space">
                        
                            <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Email" name="email" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                        
                        
                    </div>

                    <h2 className="title">CREDENCIALES</h2>
                    <div className="row row-space">

                   
                            <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="text" placeholder="Username" name="username" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                       

                        
                            <div className="input-group">
                                <input className="input--style-2 js-datepicker" type="password" placeholder="Password" name="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        

                    </div>
                    <div className="p-t-30">
                        <button className="btn btn--radius btn--green" style={{width:'100%'}} onClick={registrer}type="button   ">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</>)
*/
}

export default Registrer;