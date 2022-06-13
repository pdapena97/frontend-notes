import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdPowerSettingsNew } from "react-icons/md";
import { RegisterLoginForm } from "./RegisterLogin";
import { ImCross } from "react-icons/im";


export const Auth = () => {

    const {user, logout} = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);


    return user 
        ? (
        <>
        <p> 
        <Link to={`/user/${user.id}`}> {user.email} </Link> {""}

        <span onClick={() => {
            setShowForm(false);
             if (window.confirm("Are you sure you want to logout?")) logout()}} className="logout">
            <MdPowerSettingsNew className="logout-icon" size="2em" color="white" />
        </span>
        </p>
        </>
       ) 

       : (
       <> 
 
       {!showForm ?  
       <button className="header-login" onClick={() => setShowForm(true)}> Login </button>
       : null}

       {showForm ? 
       <ImCross onClick={() => setShowForm(false)} className="form-cross" color="red"/>
       : null }

       <RegisterLoginForm showForm={showForm}/>
     
        </> );
    
};

// Avatar en vez de email. 
// Que el botón despliegue el Elemento RegisterLogin.js con difuminado.

