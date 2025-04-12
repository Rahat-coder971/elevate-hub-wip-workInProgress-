import React from "react"
import { useParams,NavLink, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import auth from '../apiManager/auth'
import toast from "react-hot-toast";
function SignUp (){
     const navigate=useNavigate();
    const {roll}=useParams(); // the route for this page we hav defined is signup/:roll hence dynamic so after signup will  hav mentor or student
    // so here roll can be either mentor or student
    const heading=roll==='mentor' ? 'Sign Up as a Mentor': 'Sign Up as a student'
const tp=null;
    const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm();
    return(
        <>
      <div className="h-screen bg-green-100">
        <div className="flex items-center justify-center h-full">

          {/* Form Container */}
          <div className="w-full max-w-lg px-6 py-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800">{heading}</h1>
              <p className="mt-2 text-gray-600">
                Sign up to create your account
              </p>
            </div>

            <form
              onSubmit={handleSubmit(async (data)=>{
               let  role = roll==='mentor'?'mentor':'student'; // we hav done this becasue aese possibility aa sakti hai user dynamic route ko chnge karge so ager
                                                                   // roll ki value other than mentor hai toh it will be always student
                const formdata={...data,role}
                try {
                  console.log(formdata);
                  
                  console.log('before executed');
                 const response= await auth.signup(formdata)
                 console.log(response.data);
                 
                  if(response.data.sucess==='true'){
                    toast.success(response.message)
                    navigate('/login')
                  }
                  
                } catch (error) {
                  
                  
                  toast.error('something went wrong')
                }
            
              
              
             
                
              })}
              className="mt-6 space-y-4 text-gray-800"
            >
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${errors.name ? 'border-red-500 bg-red-100 text-white outline-red-500':''} rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register('name',{required:'plz enter your name'})}
                />
               {errors.name && (<p className="text-center text-red-600">{errors.name.message}</p>)}
               
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${errors.email ? 'border-red-500 bg-red-100 text-white outline-red-500':''} rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register('email',{required:'plz enter your name'})}
                />
               {errors.email && (<p className="text-center text-red-600">{errors.email.message}</p>)}
               
              </div>

              {/* Username Field */}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${errors.email ? 'border-red-500 bg-red-100 text-white outline-red-500':''} rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register('username',{required:'plz enter your username'})}
                />
               {errors.email && (<p className="text-center text-red-600">{errors.email.message}</p>)}
              </div>

              {/* Password Field */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${errors.password ? 'border-red-500 bg-red-100 text-white outline-red-500':''} rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register('password',{required:'plz enter password', minLength:{value:5,message:'password must be atleast 5 character'}},)}
                />
               {errors.password && (<p className="text-center text-red-600">{errors.password.message}</p>)}
              </div>

              {/* Submit Button */}
              <div>
                <button
                disabled={isSubmitting}
                  className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'submitting':'submit'}
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-medium text-green-600 hover:underline"
              >
               Log in
              </NavLink>
              
            </p>
          </div>
        </div>
      </div>
    </>
    )
}

export default SignUp;