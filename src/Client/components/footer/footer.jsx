import "./footer.css";

import Logo from "../../../img/logodefin.png"
const Footer = () => {
  return (
    <>
      <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Son mas de 35 años gracias a Dios y a nuestro fieles
                    clientes,quienes dicen que es "El sabor que encanta". Lo
                    hemos hecho con tesón, amor y fe. Nuestras salsas 100%
                    naturales, inspiradas y preparadas en casa y una carta
                    preparada a la minuta. Pedimos a Dios nos permita seguir
                    haciendo historia con comida italiana a la colombiana
                </p>
                
            </div>
            <div class="box">
                <h2>UBICACION   </h2>
                <div class="red-social">
                    <a class="fa-sharp fa-solid fa-location-pin"></a>
                    <p> Dirección: Cra. 12 #12-08, Sogamoso, Boyacá</p>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2022 <b>El Boodegon</b> - Todos los Derechos Reservados al boodegon.</small>
        </div>
    </>
  );
};

export default Footer;
