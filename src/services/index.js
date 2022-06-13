
// deberia no poder el token. en la homepage todas las publicas.
// luego un apartado por si el usuario quiere ver las suyas.
// hacer un backend que no puda autentificacion + notas publicas
export const getAllNotesService = async (token) => {

    const response = await fetch("http://localhost:4000/publicnotes");   
        //Problema con el process.env
        //console.log(token); 
    
    // NO LE LLEGA EL TOKEN

    const json = await response.json();
    //console.log(json);
    

    if (!response.ok) {
        throw new Error(json.message);
    }
    //json.data ???
    return json.data;  

}

// cuidao aqui con la url del fetch

export const getUserNotesService = async (id, token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    //console.log(response);
    //console.log(token);
    const json = await response.json();
    console.log(json);
    

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
}




export const getSingleNoteService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/note/${id}`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};



export const registerUserService = async ({email, password}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

};


// REUTILIZAR? 

export const loginUserService = async ({email, password}) => {
    const response = await fetch ("http://localhost:4000/login", {
        
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}),
    });
    //console.log(response);
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

// LA DE BERTO ES A /USER Y PUNTO. NADA DE ID. AHI ESTA EL PROBLEMA. BACKEND
// SOLO REQUIERE EL TOKEN
// este ENDPOINT no lo tengo. falta hacerlo en el POSTMAN un get a user.
export const getMyUserDataService = async ({token}) => {
    const response = await fetch ("http://localhost:4000/user/", {
        headers: {
            Authorization: token,
        },
    });
    
    const json = await response.json();
    //console.log(json);

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;

};

export const getUserDataService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`)

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

// mal el process.env
export const sendNoteService = async (data, token) => {
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/`, {
        method: 'POST',
        body: data,
        headers: {
            Authorization: token,
        },
    });
    
    const json = await response.json();
    
    
    console.log(json);
    //console.log(json.data);

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;

}


export const deleteNoteService = async ({id, token}) => {
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/note/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};


// editar nota texto imagen titulo

//export const editNote

// editar categoria notas 

// editar privacidad notas