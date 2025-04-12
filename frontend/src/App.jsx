
import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import routes from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
function App() {


  return (
   <BrowserRouter>
   <Toaster position="top-center" />
   <Routes>
   {routes.map((route,ind)=>(<Route key={ind} path={route.path} element={<RoutElement route={route}/>}  /> ) ) };
   </Routes>
   
   </BrowserRouter>
  )
}

function RoutElement({route}){
return route.isprotected ? (<ProtectedRoute>{route.element}</ProtectedRoute>):
(route.element) 
}

export default App;
