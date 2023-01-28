import React, { useEffect } from "react"
import useAuth from "./hooks/useAuthHook"
import {Navigate, useNavigate} from "react-router-dom"

/** this encapulates */


export default  function RequiredAuth({children}){

    const {isAuth,jwt,initialize} =useAuth()
    

    // console.log(jwt)

    return jwt != undefined?children:<Navigate to={"/login"} />

}