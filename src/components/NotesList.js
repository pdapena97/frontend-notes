
import { Note } from "./Note";


// en realidad esto solo devuelve notas públicas.
export const PublicNoteList = ({notes, removeNote}) => {
    return notes.length ? (
        <ul className="wrapper">  
            {notes.map(note => note.public === "yes" ?
            <li className="note" key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li> : null)}
        </ul>
    ) : (<p> No hay notas aún... </p>);
};


// Las notas de un usuario en concreto, sean públicas o no
export const UserNoteList =({notes, removeNote}) => {
    return notes.length ? (
        <ul className="wrapper">  
            {notes.map(note => 
            <li className="note" key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li>)}
        </ul>
    ) : (<p> No hay notas aún... </p>);
};