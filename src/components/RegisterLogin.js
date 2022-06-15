import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



import { loginUserService, registerUserService } from "../services";


export const RegisterLoginForm = ({showForm}) => {

        
    const [formChange, setFormChange] = useState(false);

    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('');

    

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        setError("");

        if (pass1 !== pass2) {
            setError("Passwords do not match");
            return;
        }

        try {
            await registerUserService({email, password: pass1})

            setFormChange(true);

        } catch(error) {
            setError(error.message);
            
        }

    };

    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginForm = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUserService({email, password});
        
            login(data.token);
            navigate("/");
        } catch (error) {
            setError(error.message);

        }
    }

    return (     
    <div className={showForm ? "form-main show-form-main" : "form-main"}>
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

               <form onSubmit={handleLoginForm} 
              className={formChange ? "login form-change" : "login"}>
                 <div className="field">
                    <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                 </div>
                 <div className="field">
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                 </div>
                 <div className="pass-link">
                    <a href="#">Forgot password? (soon)</a>
                 </div>
                 <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                 </div>
                 <div className="signup-link">
                    {error ? <p className="error-p"> {error} </p> : null}
                    Not a member? <span onClick={() => setFormChange(true)} className="signup-now"> Signup now </span>
                 </div>
                 
               </form>

              <form onSubmit={handleRegisterForm} className="signup">
                 <div className="field">
                    <input type="text" id="registeremail" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                 </div>
                 <div className="field">
                    <input type="password" id="pass1" name="pass1" onChange={(e) => setPass1(e.target.value)} placeholder="Password" required />
                 </div>
                 <div className="field">
                    <input type="password" id="pass2" name="pass2" onChange={(e) => setPass2(e.target.value)} placeholder="Confirm password" required />
                 </div>
                 <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                 </div>
                 {error ? <p className="error-p">{error}</p> : null }
              </form>
           </div>
        </div>
      </div>  
     </div>
    
)};