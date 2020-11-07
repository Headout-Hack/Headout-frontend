import React, { useState } from "react";
import registerImg from './images/img1.svg';
import signInImg from "./images/img2.svg";
import "./register.css"


const RegisterCostumer = () => {

    const [form,setForm] = useState(false);
    let divClass = ["container1"];
    if(form) {
      divClass.push('sign-up-mode');
    }
    const signUp = () => { 
         setForm(true)
   } 

   const signIn = () => { 
     setForm(false)
    }






     




  return (
    <div className={divClass.join(" ")}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Vendor Id" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Vendor Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Govt Reg No" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <button onClick = {() => signUp()} className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <button onClick = {() => signIn()}  className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={signInImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterCostumer;