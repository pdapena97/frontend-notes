import { useEffect, useState } from "react";
import { getSingleNoteService } from "../services";


const useNote = (id) => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadNote = async () => {
            try {
                setLoading(true);

                const data = await getSingleNoteService(id);

                setNote(data);

            } catch(error) {
                setError(error.message);

            } finally {
                setLoading(false);

            };
        }

        loadNote();

    },[id])

    return {note, loading, error};

}

export default useNote;