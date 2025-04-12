const authRoute=require('./auth.route')
const express=require('express');
const router=express.Router();
const homeroute=require('./home.route')
const Routes=[
    {
        path:'/',
        route:homeroute
     },
    {
       path:'/auth',
       route:authRoute
    }
]

Routes.map((route)=>{
router.use(route.path,route.route)
})

module.exports=router;