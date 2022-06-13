import useNotes from "../hooks/useNotes";
import { ErrorMessage } from "./ErrorMessage";
import { UserNoteList } from "./NotesList";

export const UserNotes = ({id}) => {
    const {notes, loading, error, removeNote} = useNotes(id);

    if (loading) return <p> Loading notes...</p>;
    if (error) return <ErrorMessage message={error} />;

    return <UserNoteList notes={notes} removeNote={removeNote} />
};