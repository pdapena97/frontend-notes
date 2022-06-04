import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NotesList";
import { AuthContext } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";

export const HomePage = () => {

    const {notes, loading, error, addNote, removeNote} = useNotes();
    const {user} = useContext(AuthContext);

    if(loading) return <p> cargando notas... </p>;
    if (error) return <ErrorMessage message={error} />;

    //console.log(notes)

    return (
        <section>
         {user ? <NewNote addNote={addNote}/> : null}

         <h1> Latest Notes </h1>

         <NoteList notes={notes} removeNote={removeNote}  />

        </section>
    );
};