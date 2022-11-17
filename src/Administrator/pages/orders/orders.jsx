import Axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import ModalOrders from "../../components/modal/modal-order";
import Table from "../../components/table/table";
import TableBody from "../../components/table/table-body";
import TableHader from "../../components/table/table-header";
import "./orders.css";
const Orders = () => {
  const thead = ["Id", "Cliente", "Descripción", "Estado"];
  const theadModal=["Id","Item","Cantidad","Subtotal"]
  const [orders, setOrders] = useState([]);
  const [descriptionOrder, setDescriptionOrder] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/orders").then((response) => {
      
        const query=response.data.filter(value => value.dispatched==false)
        setOrders(query);
    });
  }, []);

  const OpenModalOrder=(e,order)=> {
    e.preventDefault();
    setDescriptionOrder(order)
    const modal=document.querySelector('.modal-order');
    modal.classList.add('modal-order--show')
  }

  const setStateDispatched=(e,id)=>{

        e.preventDefault();

        Axios.post(`http://localhost:3001/orders/${id}`)
        .then(response=>{

            if(response.status==200){
                window.location.reload();
            }
        })

  }

  return (
    <>
      <Dashboard>
        <Table>
          <TableHader header={thead}></TableHader>
          <tbody className="table__tbody">
            {orders.map((order, index) => {
              return (
                <TableBody
                  index={index + 1}
                  body={[order.user[0].name]}
                >
                    <button className="btn btn-primary" onClick={e=>
                        OpenModalOrder(e,order.description)}>
                    <i class="fa-solid fa-clipboard-list"></i>
                    </button>
                    
                    <i className="button__send-order" onClick={e=>{setStateDispatched(e,order._id)}}>Enviar</i>
                </TableBody>
              );
            })}
          </tbody>
        </Table>
        
      </Dashboard>
      <ModalOrders>
        
            <Table>
                <TableHader header={theadModal}></TableHader>
                <tbody className="table__tbody">
                   {
                    descriptionOrder.map((value,index)=>{
                        return(
                           <TableBody
                           index={index+1}
                           body={[value.product.name,value.amount,value.subtotal]}
                           ></TableBody>
                            
                        )
                       
                    })
                   }
                   
                </tbody>
            </Table>

        </ModalOrders>
    </>
  );
};

export default Orders;
