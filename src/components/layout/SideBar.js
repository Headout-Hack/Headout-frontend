import React,{Fragment} from "react";
import {Link} from "react-router-dom"
import "./sideBar.css"

const SideBar = () => {
  return (
    <Fragment>
    <div className="leftBar">
      <div className="name"><h3>Generic</h3></div>
      <div className="dashboardBtn">
        <Link className="h" to='/dashboard-vendor'>
            Dashboard
          </Link>
      </div>
      <div className="ordersBtn">
      <Link className="h" to='/vendor-orders'>
            Orders
          </Link>
      </div>
      <div className="Signout">
       <Link className="h" to='/'>
            Signout
          </Link>
      </div>
      </div>
    </Fragment>
  );
}

export default SideBar;