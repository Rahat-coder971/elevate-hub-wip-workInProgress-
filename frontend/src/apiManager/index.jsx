import axios from "axios";
import base_url from '../const/env.const'
import toast from "react-hot-toast";
import {removetoken,getToken} from '../helper/'


const axiosInstance=axios.create({ // here we hav creted our costum axios object or axiosInstance;
    baseURL:base_url
});
console.log(base_url);

// interceptar for rensopne

axiosInstance.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    console.log(error);
    
    if(error.response.data.sucess ==='false'){
        toast.error(error.response.data.message) // make sure that in response a key value pair message:'' shoul be comming
        if(error.response.status===401){ // this measn user us unautharised so logout him and navigate him to login page
          removetoken();
          window.location.href='/login'
        }  
    }
    else{
        console.log(error ,'khgkhg');
        
          toast.error('something went wrong');  
    }
    throw error;
})

// interceptor for request

axiosInstance.interceptors.request.use((config)=>{
    const token=getToken();

    token && (config.headers.Authorization=`Bearer ${token}`)
    return config;
})

export default axiosInstance;