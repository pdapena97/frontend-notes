
import usePublicNotes from "../hooks/usePublicNotes";
import { ErrorMessage } from "./ErrorMessage";
import { PublicNoteList } from "./NotesList";

export const UserPublicNotes = ({id}) => {
    const {notes, loading, error, removeNote} = usePublicNotes(id);
    

    if (loading) return <p> Loading notes...</p>;
    if (error) return <ErrorMessage message={error} />;

    return <PublicNoteList notes={notes} removeNote={removeNote} />
};