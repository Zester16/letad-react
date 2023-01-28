import React, { useState } from "react";
import axios from "axios"
import useAuth from "../hooks/useAuthHook"
import { useNavigate } from "react-router-dom";
import "./Login.css";
import brandLogo from "../LETAD.svg"
const url = require("../url/baseUrl").baseUrl


function Login(props) {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()
    //login function, if password is correct then 
    async function submitLogin(evt) {
        try {
            evt.preventDefault()
            const input = { username: username, password: password }

            const key = await axios.post(`${url}/mobilelogin`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            //console.log(key.data)

            login(key.data)
            navigate("/dash")
        }
        catch (e) {
            console.log(e)

        }


    }
    return (
        <div className="main-in-out-div">
            <div className="in-out-header">
                <img className={"in-out-logo"} src={brandLogo} /> <h1> Login</h1>
            </div>
            <div>
                <form onSubmit={submitLogin}>
                    <div>
                        <div>
                            <label htmlFor="username">Username:</label>
                        </div>

                        <input is="username" type="text" name="input[username]" value={username} onChange={(evt) => setUserName(evt.target.value)} />

                    </div>
                    <div>
                        <div>
                            <label htmlFor="password">password:</label>
                        </div>

                        <input is="password" name="input[pasword]" type="text" value={password} onChange={(evt) => setPassword(evt.target.value)} />

                    </div>
                    <button className="in-out-button">Submit</button>
                </form>
            </div>


        </div>)
}

export default Login