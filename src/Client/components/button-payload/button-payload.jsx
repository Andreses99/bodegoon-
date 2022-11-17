import { useEffect } from "react";
import { useMercadopago } from 'react-sdk-mercadopago';
const ButtonPayload=({preferenceId})=>{

    const mp = useMercadopago.v2('TEST-4dfc924b-78ee-4a8d-99b0-e9944a6ec261', {
        locale: 'es-CO'
      });

    useEffect(()=>{
            
        console.log(preferenceId)
        if (mp) {
          mp.checkout({
            preference: {
              id: preferenceId
            },
            render: {
              container: '.cho-container',
              label: 'Pagar',
            }
            
          });
        } 
    },[mp])

    return(
        <div>
            <div class="cho-container" />
        </div>
    )
}

export default ButtonPayload;