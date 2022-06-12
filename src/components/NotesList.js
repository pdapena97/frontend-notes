import { Note } from "./Note";

export const NoteList = ({notes, removeNote}) => {
    return notes.length ? (
        <ul className="wrapper">  
            {notes.map(note => 
            <li className="note" key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li>)}
        </ul>
    ) : (<p> No hay notas aún... </p>);
};