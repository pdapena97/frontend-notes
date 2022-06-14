import { Auth } from "./Auth";
import { Link } from "react-router-dom";
//import {TbLetterN} from "react-icons/tb"
import {GoNote} from "react-icons/go";
import {CgSearch} from "react-icons/cg";


export const Header = () => {
    return (
        <header className="main-header">
            <Link to="/" className="home-link"><GoNote  className="go-note-icon" color="yellow" size="2.8em"/></Link> 
            <CgSearch className="searchicon" />
            
            <nav>
                <Auth/>   
            </nav>
        </header>
    );
};

