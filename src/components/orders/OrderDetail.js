import React, { useEffect ,useState} from "react";
import './orderdetails.css'
import axios from "axios"
import vlogo from './vcart.svg'
import SideBar from "./../layout/SideBar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetail = ({match})=>{
  const [order,setOrder ] = useState({})
  const [show,setShow] = useState(false)
  

  const order_id = match.params.id

  useEffect(async ()=>{
    try{
      const vendorId = localStorage.getItem("vendorId");
      console.log(vendorId)
      const url  = `https://hackout.herokuapp.com/specificOrder?orderId=${order_id}&vendorId=${vendorId}`
      const res  = await axios.get(url)
      console.log(res.data)
      setOrder(res.data)
      setShow(true)
    }catch(err){
      console.error(err)
    }
  },[])

  const notify = (msg) => toast.info(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const dispatch =async (no) =>{
    const body = `your order with Order ID ${order_id} has been dispatched`
    const sms_url = `https://hackout-helpline.herokuapp.com/sendsms?body=${body}&number=${no}`
    const response  = await axios.get(sms_url)
    notify("Order Has Been Dispatched")
    console.log(response.data)
  }
  return (
    <div className="outer">
     <SideBar/>
    <div className="mainArea">
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
        <div className="vlogo"><img src={vlogo}  alt="vlogo" /></div>
        <div className="orderDetailCard">{show ?  <div className="cd">
        <div><h1 className="tt">Order Id : {order.orderId}</h1></div>
        <div><h1 className="tt">Address : {order.orderAddress}</h1></div>
        <div><h1 className="tt">Phone Number : {order.orderPhoneNo}</h1></div>
        { order.orderProcessed === false && <div><h1 className="tt">Status: Not Processed</h1></div>}
        { order.orderProcessed === true && <div><h1 className="tt">Status: Processed</h1></div> }
    {order.orderDetails.length > 0 ? order.orderDetails.map(item => 
    <div key={item.itemName}  className="itemd">
      <h1 className="tt">{item.itemName} : {item.itemQty} </h1>
    </div>) : <h1 className="tt">No items to display</h1>}
    <div onClick = {() => dispatch(order.orderPhoneNo)} className="dispatchBtn"><button>Dispatch</button></div>
  </div>
  
        : <h1>Fetching</h1>}
         
        </div>
      
    </div>
    </div>
  );

}

export default OrderDetail;