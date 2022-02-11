import axios from 'axios'


export const signup = (data)=>{
    let response = axios.post("",data)
    return response;
}

export const login = (data)=>{
    let response = axios.post("",data)
    return response;
}