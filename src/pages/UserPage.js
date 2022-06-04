import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserNotes } from "../components/UserNotes";
import useUser from "../hooks/useUser";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loading, error} = useUser(id);

    if (loading) return <p> loading user data...</p>
    if (error) return <ErrorMessage message={error}/>



    return (
    <section>
        <h1> User {user.email} </h1>
        <p> User id: {user.id} </p>
        <p> Registed on: {new Date(user.created_at).toLocaleString()}</p>

        <UserNotes id={user.id} />
    </section>
    );
};