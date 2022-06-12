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
                        <label>Title</label>
                        <input type="text" spellCheck="false" />
                      </div>
                      <div className="row description">
                        <label>Description</label>
                        <textarea spellCheck="false"></textarea>
                      </div>
                      <button> Add Note</button>
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