
import { Note } from "./Note";




export const PublicNoteList = ({notes, removeNote}) => {
    return (
        <ul className="wrapper">  

            {notes.map(note => note.public === "yes" ?
            <li className="note" key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li> : null)}
        </ul>
    )  
};


export const UserNoteList =({notes, removeNote}) => {
    return notes.length ? (
        <ul className="wrapper">  
            {notes.map(note => 
            <li className="note" key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li>)}
        </ul>
    ) : (<p> No hay notas aún... </p>);
};