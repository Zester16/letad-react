//** this is splash screen which handles routing */
import "./App.css"
import React, { useEffect } from "react"
import isAuth from "./hooks/useAuthHook"
function Splash(){
    
    const {initialize} = isAuth()
    useEffect(()=>{
        async function checkAuth(){
            await initialize()
        }
            checkAuth()
        })
    return(<h1 className="brand-title">LETAD</h1>)
}


export default Splash