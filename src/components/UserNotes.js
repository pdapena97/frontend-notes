import useNotes from "../hooks/useNotes";
import { ErrorMessage } from "./ErrorMessage";
import { NoteList } from "./NotesList";

export const UserNotes = ({id}) => {
    const {notes, loading, error, removeNote} = useNotes(id);

    if (loading) return <p> Loading notes...</p>;
    if (error) return <ErrorMessage message={error} />;

    return <NoteList notes={notes} removeNote={removeNote} />
};