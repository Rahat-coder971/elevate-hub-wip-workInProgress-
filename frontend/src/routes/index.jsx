import React from "react";
import Home from "../pages/Home";

import SignUp from "../pages/SignUP";
import Login from "../pages/Login";

const routes=[
    {path:'/',element:<Home/>,isprotected:false},
    {path:'/signup/:roll',element:<SignUp/>,isprotected:false },
    {path:'/login',element:<Login/>,isprotected:false}
]
export default routes; 