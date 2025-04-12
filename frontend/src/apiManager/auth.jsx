import axiosInstance from "."


const signup=(data)=>{
    return axiosInstance.post('/auth/signup',data);
}
export default {signup}