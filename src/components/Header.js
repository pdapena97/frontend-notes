import { Auth } from "./Auth";
import { Link } from "react-router-dom";
//import {TbLetterN} from "react-icons/tb"
import {GoNote} from "react-icons/go";


export const Header = () => {
    return (
        <header>
            <Link to="/" className="home-link"><GoNote  className="go-note-icon" color="yellow" size="2.8em"/></Link>   
            <nav>
                <Auth/>   
            </nav>
        </header>
    );
};

