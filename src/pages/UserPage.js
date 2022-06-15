import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { PublicNoteList } from "../components/NotesList";
import { UserNotes } from "../components/UserNotes";
import { UserPublicNotes } from "../components/UserPublicNotes";
import { AuthContext } from "../context/AuthContext";
import useUser from "../hooks/useUser";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loading, error} = useUser(id);

    // en teoria sobra esto
    const {token} = useContext(AuthContext);

    if (loading) return <p> loading user data...</p>
    if (error) return <ErrorMessage message={error}/>

    console.log (user.id, id);

    // en teoria la logica es diferente
    if (token && user.id == id) {
        return (
            <section>
        
             <h1> User:  {user.email} </h1>
             <p className="user-page-p"> User id: {user.id} </p>
             <p className="user-page-p"> Registed on: {new Date(user.created_at).toLocaleString()}</p>
             <p className="userpagep"> These are all you notes </p>
   
             <UserNotes id={user.id} />
             
   
           </section> )
    } else { 
           <section>
             <h1> User:{id} </h1>
             <p className="userpagep"> These are the public notes from {id} </p>

             <UserPublicNotes id={id} />
           </section> }  
};

