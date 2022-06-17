import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Note } from "../components/Note";
import useNote from "../hooks/useNote";

export const NotePage = () => {

    const { id } = useParams();

    const {note, loading, error} = useNote(id);

    if(loading) return <p> cargando nota... </p>;
    if (error) return <ErrorMessage message={error} />;


    return (
        <section>
            <h1> Note </h1>
            <Note note={note} />
            
        </section>
    );
};

