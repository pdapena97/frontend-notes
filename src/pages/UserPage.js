import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserNotes } from "../components/UserNotes";
import { UserPublicNotes } from "../components/UserPublicNotes";
import { AuthContext } from "../context/AuthContext";
import useUser from "../hooks/useUser";

// useState para errores, creo. lo tenia importado

export const UserPage = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const { user , loading, error} = useUser(id);
    const { token } = useContext(AuthContext);
    

    if (loading) return <p> loading user data...</p>
    if (error) return <ErrorMessage message={error}/>
    

    if (token) {
     // en teoria la logica es diferente
    if (user.id === Number(id)) {
        return (
            <section>
        
             <h1> User:  {user.email} </h1>
             <p className="user-page-p"> User id: {user.id} </p>
             <p className="user-page-p"> Registed on: {new Date(user.created_at).toLocaleString()}</p>
             <p className="userpagep"> These are all the public notes </p>
   
             <UserNotes id={user.id} /> 
             <UserPublicNotes id={id} />
             
   
           </section> )
    } else { 
           <section>
             <h1> User:{id} </h1>
             <p className="userpagep"> These are the public notes from {id} </p>

             <UserPublicNotes id={id} />
           </section> } } navigate("/") 
};


    // luego lo de params, el erorr..
   
