import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserNotes } from "../components/UserNotes";
import { AuthContext } from "../context/AuthContext";
import useUser from "../hooks/useUser";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loading, error} = useUser(id);

    const {token} = useContext(AuthContext);

    if (loading) return <p> loading user data...</p>
    if (error) return <ErrorMessage message={error}/>



    return token ? (
    <section>
        <h1> User: {user.email} </h1>
        <p className="user-page-p"> User id: {user.id} </p>
        <p className="user-page-p"> Registed on: {new Date(user.created_at).toLocaleString()}</p>

        <UserNotes id={user.id} />
    </section>
    ) : <>
        <Navigate to="/" replace="true" />
    </>;
};