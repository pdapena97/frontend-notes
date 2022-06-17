import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllNotesService, getUserNotesService } from "../services";


const useNotes = (id) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {token} = useContext(AuthContext);
    
    

    useEffect(() => {
        const loadNotes = async () => {
            try {
                setLoading(true);
                
                const data = id 
                    ? await getUserNotesService(id,token) 
                    : await getAllNotesService(token);   

                setNotes(data);

            } catch (error) {
                setError(error.message);  
                

            } finally {
                setLoading(false);         
            }
        };

        loadNotes();

    },[id,token]);

    const addNote = (note) => {
        setNotes(
            [note, ...notes]
        );
    };

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    return {notes, loading, error, addNote, removeNote};
};

export default useNotes;