import { useState } from "react";


export const RegisterLoginForm = () => {

    
    const [formChange, setFormChange] = useState(false);




    return (
   <div className="form-main">     
    <div className="loginregisterwrapper">
        <div className="title-text">
           <div className={formChange ? "title login form-change" : "title login"}>
              Login
           </div>
           <div className="title signup">
              Register 
           </div>
        </div>
        <div className="form-container">
           <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label onClick ={()=> setFormChange(false)} htmlFor="login" className="slide login">Login</label>
              <label onClick={() => setFormChange(true)} htmlFor="signup" className="slide signup">Register</label>
              <div className="slider-tab"></div>
           </div>
           <div className="form-inner">
              <form action="#" className={formChange ? "login form-change" : "login"}>
                 <div className="field">
                    <input type="text" placeholder="Email Address" required />
                 </div>
                 <div className="field">
                    <input type="password" placeholder="Password" required />
                 </div>
                 <div className="pass-link">
                    <a href="#">Forgot password? (soon)</a>
                 </div>
                 <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                 </div>
                 <div className="signup-link">
                    Not a member? <span onClick={() => setFormChange(true)} className="signup-now"> Signup now </span>
                 </div>
              </form>
              <form action="#" className="signup">
                 <div className="field">
                    <input type="text" placeholder="Email Address" required />
                 </div>
                 <div className="field">
                    <input type="password" placeholder="Password" required />
                 </div>
                 <div className="field">
                    <input type="password" placeholder="Confirm password" required />
                 </div>
                 <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                 </div>
              </form>
           </div>
        </div>
     </div>
    </div>
)};