import { useContext, useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService, editNoteService } from "../services";

export const Note = ({note, removeNote}) => {
    const {user, token} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [show, setShow]= useState(false);
    const [sending, setSending] = useState(false);

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


    // Edit Note no implementado aún
    const handleEditNote = async (e) => {
        e.preventDefault();

        try {
            setSending(true);
            
            const data = new FormData(e.target);
            const note = await editNoteService(data, token);
            console.log(note);
            

            //addNote(note);
            e.target.reset();
            setImage(null);
          

        } catch (error) {
            setError(error.message);
            setShow(true);
        
          } finally {
            setSending(false);
        }
    };


  

    return (
        <>
            <div className="details"> 
             <p className="note-title"> {note.title} </p>
             

             {note.image && note.image !== "undefined"? (   
             <img 
             src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`} 
             alt={"alt text"} 
             />
             ) : 
             null}

             <p> {note.category} </p>
             <span className="text-from-note"> {note.text} </span>               
           
            </div>
            <div className="bottom-content">
                {token ? 
                <span className="by-date-span"> By <Link to={`/user/${note.user_id}`} className="note-user-link"> {note.user_id} </Link> on {new Date(note.created_at).toLocaleString()}</span> 
                : <span className="by-date-span"> By {note.user_id} on {new Date(note.created_at).toLocaleString()} </span> }
                
                {user && user.id === note.user_id ? (
                <div className={showMenu? "settings showMenu" : "settings"}>
                    <i onClick={() =>  
                    setShowMenu(true) }
                        
                    className="uil uil-ellipsis-h" ></i>
                    <ul className="menu">
                        <li><i onClick={() => {
                            
                            <div className={show ? "popup-box show" : "popup-box" }>
                              <div className="popup">
                                <div className="content">
                
                                    <header>
                                      <p> Add new Note</p>
                                      <i onClick={() => setShow(false)} className="uil uil-times"></i>
                                    </header>
                
                                    <form onSubmit={handleEditNote}>
                                      <div className="row title">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" spellCheck="false" required/>
                                      </div>
                
                                      <div className="row description">
                                        <label htmlFor="text">Description</label>
                                        <textarea spellCheck="false" id="text" type="text" name="text" required ></textarea>
                                      </div>
                
                                      <div className="row category">
                                        <label>Category</label>
                                        <input type="text" id="category" name="category" required />
                                      </div>
                
                                      <div className="row image">
                                    
                                        <label htmlFor="image" className="label-image-newnote"><AiOutlineFileUnknown size="2rem" display="block"  className="aioutlinefile"/> Image (optional)</label>
                                        <input className="form-image-resize" type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
                                        {image ? <figure> 
                                            <img className="image-preview" src={URL.createObjectURL(image)} alt="Preview"/></figure> : null}
                                      
                                      </div>
                                      <div className="toggle-radio">
                                        <label className="label-note-public">  Is this note public? </label>
                                        <input type="radio" id="yes" name="public" value="yes"/>
                                        <input type="radio" id="no" name="public" value="no" defaultChecked/>
                                        <div className="switch"> 
                                            <label htmlFor="yes">yes</label>
                                            <label htmlFor="no">no</label>
                                            <span></span>
                                        </div>
                                        
                                      </div>
                                      <button onClick={()=> {error ? <p> {error} </p> : setShow(false)}}> Add Note </button>
                                      {error ? <p> {error} </p> : null}
                                      {sending ? <p>Sending Note</p> : null}
                                    </form>
                                 </div>
                              </div>
                          </div>}} className="uil uil-pen">Edit</i>
                        </li>
                        <li className="edit-delete-list"><i onClick={() => {

                            if (window.confirm("Are you sure")) deleteNote(note.id);
                            }} className="uil uil-trash">Delete</i>
                        </li>
                    </ul>   
                </div>
                ) : null }
            </div>
        </>
    );
};