import { Note } from "./Note";

export const NoteList = ({notes, removeNote}) => {
    return notes.length ? (
        <ul>  
            {notes.map(note => 
            <li key={note.id}> <Note note={note} removeNote={removeNote}/> 
            </li>)}
        </ul>
    ) : (<p> No hay notas aún... </p>);
};