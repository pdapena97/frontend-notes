import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService } from "../services";

export const Note = ({note, removeNote}) => {
    const {user, token} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showMenu, setShowMenu] = useState(false);
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
        <>
            <div className="details"> 
             <p> {note.title} </p>
             <p> {note.category} </p>
             <span> {note.text} </span>

             {note.image ? (
             <img src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`} 
             alt={note.text} width='200px'/>
             ) : null}

             <span> 
                By <Link to={`/user/${note.user_id}`}> {note.email} </Link> on {" "}

                <Link to={`note/${note.id}`}></Link>
             </span>
                
            
            </div>
            <div className="bottom-content">
                <span> April 3, 2022</span>
                
                {user && user.id === note.user_id ? (
                <div className={showMenu? "settings showMenu" : "settings"}>
                    <i onClick={() =>  
                    setShowMenu(true) }
                        
                    className="uil uil-ellipsis-h"></i>
                    <ul className="menu">
                        <li><i className="uil uil-pen">Edit</i></li>
                        <li><i onClick={() => {
                            if (window.confirm("Are you sure")) deleteNote(note.id);
                            }} className="uil uil-trash">Delete</i></li>
                            
                    </ul>   
                </div>
                ) : null }
            </div>
        </>
    );
};