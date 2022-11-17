
import "./modal-order.css"
const ModalOrders=({children})=>{

    const CloseModalOrder=()=>{
        const modal=document.querySelector('.modal-order');

        modal.classList.remove('modal-order--show');
    }

    return(<>
    
        <section className="modal modal-order">
            <div className="modal-order__container"style={{paddingTop:"65px"}}>
                <i className="fa-solid fa-xmark fa-2xl" onClick={CloseModalOrder}style={{float:"right",marginTop:"-30px"}}></i>
               {children}

            </div>


        </section>

    </>)

}

export default ModalOrders;