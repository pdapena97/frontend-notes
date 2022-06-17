

export const getAllNotesService = async (token) => {

    const response = await fetch("http://localhost:4000/publicnotes");   
        
    


    const json = await response.json();
   
    

    if (!response.ok) {
        throw new Error(json.message);
    }
    
    return json.data;  

};




export const getUserPublicNotesService = async (id,token) => {
    
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/userpublicnotes/${id}`, {
        headers: {
            Authorization: token,
        },
    });
   
    const json = await response.json();
   
    

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};



export const getUserNotesService = async (id, token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    
    const json = await response.json();
    
    

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};




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




export const loginUserService = async ({email, password}) => {
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/login`, {
        
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

    return json;
};


export const getMyUserDataService = async ({token}) => {
    const response = await fetch ("http://localhost:4000/user/", {
        headers: {
            Authorization: token,
        },
    });
    
    const json = await response.json();
    

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

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;

};


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


export const editNoteService = async ({id, token}) => {
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/note/${id}`, {
        method: "PUT",
        headers: {
            Authorization: token
        }
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
        throw new Error(json.message);
    }
};