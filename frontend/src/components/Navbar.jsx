import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom"
import SignUp from "../pages/SignUP";
function Navbar() {
  const navigate=useNavigate();
const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
const SignUpAsAmentorBtn=()=>{
  navigate('/signup/mentor') // after clicking this url will become signup/mentor will featch ths parametr value using useparams hook
}
// const SignUpAsAstudentBtn=()=>{ 
//   navigate('/signup/student')

// } // more simplier syntax
 const SignUpAsAstudentBtn=()=>navigate('/signup/student')

  return (
    <>
      <div>
        <div className="px-4 py-5   mx-auto ">
          <div className="relative  w-[90%] lg:w-full flex items-center justify-between">
          
            <div className="flex items-center">
              <NavLink to="/" className="inline-flex items-center mr-8">
                <span className="ml-2 text-2xl font-bold text-green-700">Elevate Hub</span>
              </NavLink>
            </div>

            {/* mobile menu button */}
            
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-gray-600 ' >
                 {isMobileMenuOpen ? (<span className='text-2xl font-extrabold  text-black'>&#10007;</span> ): (<span className='text-2xl'>&#9776;</span>) }
                </button>                  {/* this is for crosss symbole */  }          {/* this is for hamberger symbole */  }
              </div>
          


            {/* Desktop Navigation(only visible when user is not logged in) */}
            
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <button
                   onClick={SignUpAsAmentorBtn}
                    className="h-12 px-6 font-medium tracking-wide text-gray border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
                  >
                    Sign Up as a Mentor
                  </button>
                </li>
                <li>
                  <button
                   
                    className="font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300"
                  >
                    Log In
                  </button>
                </li>
                <li>
                  <button
                    onClick={SignUpAsAstudentBtn}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
                  >
                    Sign Up as a Student
                  </button>
                </li>
              </ul>
            {/* ) :
              (
                <div>tp</div>
                // <Dropdown overlay={menu} trigger={["hover"]}>
                //   <button>
                //     {user.name.charAt(0).toUpperCase()}
                //   </button>

                // </Dropdown>
              )} */}


            {/* when isMobielIsOpen is true */}
            {isMobileMenuOpen && (
              <div className='absolute top-15 bg-green-50  w-full   shadow-lg p-4 space-y-4 lg:hidden z-10'>
                <button onClick={SignUpAsAmentorBtn} className=" w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
                >
                  Sign Up as a Mentor 
                </button>

                {/* signin */}
                <button
                  className="block w-full text-center py-2 font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300"
                >
                  Log In
                </button>
                <button onClick={SignUpAsAstudentBtn} className="block w-full text-center py-2 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300" >
                Sign Up as a Student 
                </button>
              </div>


            )}
          </div>
        </div>
      </div>
     
    </>
  )
}
export default Navbar;