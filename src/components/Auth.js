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
        Logged in as <Link to={`/user/${user.id}`}> {user.email} </Link> {""}
        <button onClick={() => logout()}> Logout </button>

        <span onClick={() => {
             if (window.confirm("Are you sure you want to logout?")) logout()}} className="logout">
            <MdPowerSettingsNew className="logout-icon" size="2em" color="white" />
        </span>
        </p>
        </>
       ) 

       : (
       <> 
       <button onClick={() => setShowForm(true)}> Login </button>
       <ImCross onClick={() => setShowForm(false)} className="form-cross" color="red"/>
       <RegisterLoginForm showForm={showForm}/>
       <ul>
            <li>
                <Link to="/register"> Register </Link></li>
            <li> 
                <Link to="/login">Login </Link></li>
        </ul>
        </> );
    
};

// Avatar en vez de email. 
// Que el botón despliegue el Elemento RegisterLogin.js con difuminado.
// si no hay usuario, botón para loguearse.
//Creo que tengo que subir el estado