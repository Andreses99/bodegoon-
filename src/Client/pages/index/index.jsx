import React from 'react';
import "./index.css"
import lasaña from "../../../img/lasañamediterranea.jpg";
import pizza from "../../../img/pizza2.jpg";
import espagueti from "../../../img/espaguetimediterraneo.jpg"
import ensalada from "../../../img/ensaladacesar.jpg"
import canelon from "../../../img/Canelones.jpg"
import panzerotte from "../../../img/panzeotte.jpg"
import raviolis from "../../../img/raviolis.jpg"
import limonada from "../../../img/drink-6.jpg"
import ScheduleRestaurant from '../../components/section-schedule/schedule_restaurant';
const Index=()=>{



    return(
        <>
        
            <div className="container-categories">
            <h1 className="container-categories__h1">MENU</h1>
            <div className="container-categories__div-product"><figure><img src={lasaña}/><div className="name"><a>LASAÑA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={pizza}/><div className="name"><a >PIZZA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={espagueti}/><div className="name"><a>ESPAGUETTI</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={ensalada}/><div className="name"><a>ENSALADA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={canelon}/><div className="name"><a>CANELON</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={panzerotte}/><div className="name"><a>PANZEROTTE</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={raviolis}/><div className="name"><a>RAVIOLIS</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={limonada}/><div className="name"><a>LIMONADAS</a></div></figure></div>
            </div>
            
            <section>
                <ScheduleRestaurant/>
            </section>
        </>
    )
}


export default Index;