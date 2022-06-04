import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNoteService } from "../services";

export const NewNote = ({addNote}) => {
    const [error, setError] = useState("");
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState(null);
    const {token} = useContext(AuthContext);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setSending(true);

            const data = new FormData(e.target);
            const note = await sendNoteService(data, token);
            console.log(note);

            addNote(note);  //tamos aqui. error. 
            e.target.reset();
            setImage(null);

        } catch (error) {
            setError(error.message);
        } finally {
            setSending(false);
        }
    };

    return (
    <form onSubmit={handleForm}>
        <h1> Add New Note</h1>

        <fieldset>
            <label htmlFor="titulo"> Titulo </label>
            <input type="text" id="title" name="title" required />
        </fieldset>
        <fieldset>
            <label htmlFor="category"> category </label>
            <input type="text" id="category" name="category" required />
        </fieldset>
        <fieldset>
            <label htmlFor="text"> Text </label>
            <input type="text" id="text" name="text" required />
        </fieldset>
        <fieldset>
            <label htmlFor="public"> Public? </label>
            <input type="text" id="public" name="public" required />
        </fieldset>
        <fieldset>
            <label htmlFor="image"> Image (optional) </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>

            {image ? <figure> 
                <img src={URL.createObjectURL(image)} alt="Preview" style={{width: '100px'}} /></figure> : null}
        </fieldset>

        <button> Send Note </button>
        {sending ? <p>Sending Note</p> : null}
        {error ? <p> {error} </p> : null}
    </form>
    );
};