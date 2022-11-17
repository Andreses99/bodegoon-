import  Axios from "axios";
import { useEffect,useContext} from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../components/loading/loading"
import { CartContext } from "../../../context/CartContext";
import Cookies from "universal-cookie"
const SendOrder=()=>{

    const {cartItems,Total}=useContext(CartContext);
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const cookies=new Cookies();

    useEffect(() => {

        document.getElementById("header").style.display = "none";
        document.getElementById("footer").style.display = "none";   

    },[])

    useEffect(() => {

        (urlParams.get("status"))
        ? 
        (urlParams.get("preference_id")==localStorage.getItem("preferenceId")
            ?
            (Axios.post("http://localhost:3001/payload/sendOrder",{
                total:Total(),
                cartItems:cartItems,
                idUser:cookies.get("id")

            })
            .then(response => {
                if(response.data.result){
                    localStorage.clear()
                    window.location.href="./"

                }
            })
            )
           
            : alert (Error)
        
        )
        
        :
        window.location.href="./"
        

    },[])

    return(

        <>

            <Loading/>
        
        </>
    )

}

export default SendOrder;