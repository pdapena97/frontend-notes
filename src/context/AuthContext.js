import { createContext, useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { getMyUserDataService } from "../services";

export const AuthContext = createContext();

// NO SE GUARDA EL TOKEN EN EL LOCAL STORAGE POR ALGUN MOTIVO
export const AuthProviderComponent = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    //const { id } = useParams();

    useEffect(() => {
        localStorage.setItem("token", token);

    },[token]);

    useEffect(() => {

        const getUserData = async() => {
            try {
                
                const data = await getMyUserDataService({token}) //aqui llega. pero error
                setUser(data);
            } catch(error) {
                logout();    //hace logout, asi que borra el token.

            }

        }


        if (token) getUserData()
    },[token])

    // aqui llega el token, pero no se guarda en local storage? 
    // nah, creo que si, pero luego se hace un logout.
    const login = (token) => {
        setToken(token);
        console.log(token);
    };


    const logout = () => {
        setToken("");
        setUser(null);
    }

    
    return (
        <AuthContext.Provider value={{token, user, login, logout }}>
         {children} 
        </AuthContext.Provider>
    );
};
