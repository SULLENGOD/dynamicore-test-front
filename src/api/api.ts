import { DeleteInfo } from "../components/Card";
import { FormState } from "../hooks/useForm";

export const login = async( loginInfo: FormState ) => {
    const url = 'http://localhost:3000/api/auth/signin';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(loginInfo)
    })

    return res
}

export const getprofile = async(token: string) => {
    
    const url = 'http://localhost:3000/api/auth/profile';
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

export const deleteContact = async (deleteInfo: DeleteInfo, token: string) => {
    const url = 'http://localhost:3000/api/auth/delete-contact';
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