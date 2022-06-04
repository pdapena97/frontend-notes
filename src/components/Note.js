import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService } from "../services";

export const Note = ({note, removeNote}) => {
    const {user, token} = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const deleteNote = async(id) => {
        try {
            await deleteNoteService({id, token});

            if (removeNote) {
            removeNote(id);
            } else {
                navigate("/");
            }
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <article>
            <p> {note.title} </p>
            <p> {note.text} </p>

            {note.image ? (
            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`} 
            alt={note.text}/>
            ) : null}

            <p> 
                By <Link to={`/user/${note.user_id}`}> {note.email} </Link> on {" "}

                <Link to={`note/${note.id}`}></Link>
            </p>
                
            {user && user.id === note.user_id ? (
                <section>
                    <button onClick={() => {
                        if (window.confirm("Are you sure")) deleteNote(note.id);
                        }}> Delete Note </button> 
                    {error ? <p>{error}</p> : null}
                </section> 
               )  : null}
        </article>
    );
};