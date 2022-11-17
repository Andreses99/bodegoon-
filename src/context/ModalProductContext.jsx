import { createContext, useState } from "react"

export const ModalProductContext=createContext();

export const ModalProductProvider =({children})=>{

    const [open,setOpen]=useState(false);
    const [product,setProduct]=useState([]);

    return(<>
        <ModalProductContext.Provider value={{open,setOpen,product,setProduct}}>
            {children}
        </ModalProductContext.Provider>
    
    </>)
}