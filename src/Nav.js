import React, { useContext } from "react"
import useAuth from "./hooks/useAuthHook"
import logoutIcon from "./logout.svg"
import logo from "./LETAD.svg"
import { useNavigate } from "react-router-dom"
import "./Nav.css"
//handles nav component
export default function Nav(props) {


    const navigate = useNavigate()
    const { logout } = useAuth()
    // handles button when logout is clicked
    function logoutOnClick() {
        logout()
        navigate("/login")
    }

    function logoClick() {
        navigate("/")
    }
    return (<div className="nav nav-shadow">
        <div className="nav">
            <img src={logo} onClick={logoClick} className="logo-img" />
            <span className="brand-title">Letad</span>

        </div>
        <span >V 0.0.8</span>
        <img src={logoutIcon} onClick={logoutOnClick} />
    </div>)
}