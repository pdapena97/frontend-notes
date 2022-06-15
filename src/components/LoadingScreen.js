import { useEffect, useState } from "react"


export const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <div className="loading-hola"> Hola 
            { loading ? <div> Cargando </div> : <div> uh </div> }
        </div>
    )
};