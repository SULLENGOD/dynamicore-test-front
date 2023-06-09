import { DeleteInfo } from "../components/Card";
import { FormState } from "../hooks/useForm";
const api = 'http://localhost:3000/api/auth/'

export const login = async( loginInfo: FormState ) => {
    const url = `${api}signin`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(loginInfo)
    })

    return res
}

export const signUp = async(signUpInfo: FormState) => {
    const url = `${api}signup`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpInfo)
    });

    return res
    
}

export const getprofile = async(token: string) => {
    
    const url = `${api}profile`;
    const req = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        }
    }
    const res = await fetch(url, req);
    const data = await res.json();
    
    return data
};

export const addContact = async(contactInfo: FormState, token: string) => {
    const url = `https://luis-m-sullen-api.herokuapp.com/api/auth/add-contact`;
    const req = {
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        },
        body: JSON.stringify(contactInfo)
    };

    const res = await fetch(url, req);
    const data = await res.json();

    return data
    
};

export const deleteContact = async (deleteInfo: DeleteInfo, token: string) => {
    const url = `${api}delete-contact`;
    const req = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        },
        body: JSON.stringify(deleteInfo)
    }
    await fetch(url, req);
    
}