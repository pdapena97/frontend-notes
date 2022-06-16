import { useContext, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { PublicNoteList } from "../components/NotesList";
import { Search } from "../components/Search";
import { AuthContext } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";
import { sendNoteService } from "../services";
import {AiOutlineFileUnknown} from "react-icons/ai"
//import { LoadingScreen } from "../components/LoadingScreen";

export const HomePage = () => {

    const [show, setShow]= useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("")
    const [image, setImage] = useState(null);
    const [searchText, setSearchText] = useState('');

    const {notes, loading, addNote, removeNote} = useNotes();
    const {user, token} = useContext(AuthContext);
    

    if(loading) return <p> cargando notas... </p>;
    if (error) return <ErrorMessage message={error} />;




    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setSending(true);
            
            const data = new FormData(e.target);
            const note = await sendNoteService(data, token);

            addNote(note);  
            e.target.reset();
            setImage(null);
          

        } catch (error) {
            setError(error.message);
            setShow(true);
        
          } finally {
            setSending(false);
        }
    };

    

    //console.log(notes)

    return (
        
        <section className="container">
        
        <div className={show ? "popup-box show" : "popup-box" }>
            <div className="popup">
                <div className="content">

                    <header>
                      <p> Add new Note</p>
                      <i onClick={() => setShow(false)} className="uil uil-times"></i>
                    </header>

                    <form onSubmit={handleForm}>
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
        </div>

         <Search handleSearchNote={setSearchText} />    


         {user ? 
         <li className="add-box" onClick={() => setShow(true)}>
            <div className="icon"><i className="uil uil-plus"></i></div>
            <p>Add new note</p>
         </li> : null }

  
         <>   
                   
         <PublicNoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))} removeNote={removeNote} /> 
         </>

        </section>
    );
};