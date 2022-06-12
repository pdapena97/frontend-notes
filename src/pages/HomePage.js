import { useContext, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NotesList";
import { AuthContext } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";

export const HomePage = () => {

    const [show, setShow]= useState(false);

    const {notes, loading, error, addNote, removeNote} = useNotes();
    const {user} = useContext(AuthContext);
    

    if(loading) return <p> cargando notas... </p>;
    if (error) return <ErrorMessage message={error} />;

    

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

                    <form action="#">
                      <div className="row title">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" spellCheck="false" required/>
                      </div>

                      <div className="row description">
                        <label htmlFor="text">Description</label>
                        <textarea spellCheck="false"></textarea>
                      </div>

                      <div className="row category">
                        <label>Category</label>
                        <input type="text" id="category" name="category" value="category" />
                      </div>

                      <div className="row image">
                        <label>Image (optional)</label>
                        <input type="file" id="image" name="image" accept="image/*"/>
                        
                      </div>
                      <div className="toggle-radio">
                        <input type="radio" id="yes" name="privacy" value="yes"/>
                        <input type="radio" id="no" name="privacy" value="no" defaultChecked/>
                        <div className="switch"> 
                            <label htmlFor="yes">yes</label>
                            <label htmlFor="no">no</label>
                            <span></span>
                        </div>
                        
                      </div>
                      <button> Add Note </button>
                    </form>
                    
                </div>
            </div>
        </div>

         <li className="add-box" onClick={() => setShow(true)}>
            <div className="icon"><i className="uil uil-plus"></i></div>
            <p>Add new note</p>
         </li>

         {user ? <NewNote addNote={addNote}/> : null}

      

         <NoteList notes={notes} removeNote={removeNote}  />

        </section>
    );
};