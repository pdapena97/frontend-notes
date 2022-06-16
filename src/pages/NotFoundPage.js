import { Link } from "react-router-dom";


export const NotFoundPage = () => {
    return (
    <section className="not-found-page">
        <h1 > Not Found  </h1>
        <Link to='/'> Go Back to Home Page </Link>
    </section>
    );
};