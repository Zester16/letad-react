///* Properly handles session/
import React, { createContext, useState, useContext } from "react"

const authorizationContext = createContext()
function useAuth() {
    //quick check whether user is authenticated
    //

    const [isAuth, setIsAuth] = useState(false)
    const [jwt, setJwt] = useState(localStorage.getItem("id"))
    //handles login and sets data
    const login = (jwt) => {

        localStorage.setItem("id", jwt.token)
        setJwt(jwt.token)
        setIsAuth(true)

    }
    //logs out user
    const logout = () => {
        setJwt(undefined)
        setIsAuth(false)
        localStorage.removeItem("id")
    }

    //initialize route
    const initialize = () => {
        const storage = localStorage.getItem("id")
        //console.log(storage)
        if (storage.length > 5) {
            setJwt(storage)
            setIsAuth(true)
        }

    }

    return { jwt, isAuth, login, logout, initialize }


}

export function AuthorizationContext({ children }) {
    const auth = useAuth()
    return <authorizationContext.Provider value={auth}>
        {children}
    </authorizationContext.Provider>
}
export default function AuthConsumer() {
    return useContext(authorizationContext)
}