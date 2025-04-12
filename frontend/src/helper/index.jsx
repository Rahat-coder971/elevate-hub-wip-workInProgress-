export const getToken=()=>{
    return localStorage.getItem('token')
}

export const removetoken=()=>{
    return localStorage.removeItem('token')
}

export default {getToken,removetoken};