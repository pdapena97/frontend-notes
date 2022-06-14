import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdPowerSettingsNew } from "react-icons/md";
import { RegisterLoginForm } from "./RegisterLogin";
import { ImCross } from "react-icons/im";
import {BsPerson} from "react-icons/bs";


export const Auth = () => {

    const {user, logout} = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);


    return user 
        ? (
        <>
        <span className="avatar-link">
        <Link to={`/user/${user.id}`} className="userpage-link">  <BsPerson className="bsperson"  size="2.4rem" /></Link> {""}    
        </span>
        
        <span onClick={() => {
            setShowForm(false);
             if (window.confirm("Are you sure you want to logout?")) logout()}} className="logout">
            <MdPowerSettingsNew className="logout-icon" size="2.5em" />
        </span>
        
        </>
       ) 

       : (
       <> 
 
       {!showForm ?  
       <button className="header-login" onClick={() => setShowForm(true)}> Login </button>
       : null}

       {showForm ? 
       <ImCross onClick={() => setShowForm(false)} className="form-cross" />
       : null }


       <RegisterLoginForm showForm={showForm}/>
     
        </> );
    
};

// Avatar en vez de email. 
// Que el botón despliegue el Elemento RegisterLogin.js con difuminado.

