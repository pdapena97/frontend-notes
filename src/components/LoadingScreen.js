
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DotLoader from "react-spinners/ClipLoader";

export const LoadingScreen = ( ) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
 

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            navigate("/")
        }, 1000)
    }, [])

    return (
        <div > 
            { loading ? 
            <div >
                <DotLoader className="loading-screen" width="10px" color="white"/>
                <div className="loading-text"> Loading... </div>
            </div> : 
            <> </> }
        </div>
    )
};