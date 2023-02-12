// displays when user made last entry to shortwave, top 5 entries of shortwave data
// routes to add update delete shortwave stations

import React, { useState, useEffect } from "react"
import axios from "axios"
import useAuth from "../hooks/useAuthHook"
import Splash from "../generalRoutes/SplashLoading"
import "./ShortwaveDash.css"
import SwStation from "./SwStation"
import SwLogAddNewLog from "./SwLogAddNewLog.js"
import SWLog from "./SWLog"
import SWAddNewStation from "./SWAddNewStation"
import SwLogEditForm from "./SwLogEditForm"
import SwEditStation from "./SwEditStation"

const baseURL = require("../url/baseUrl").baseUrl
function ShortwaveDash() {


    const [splash, setSplash] = useState(true)
    //for adding a list of logs
    const [swLogs, setSwLogs] = useState([])
    //for having list of radio stations
    const [swStations, setSwStations] = useState([])
    const [swLogForUpdate, setSwLogForUpdate] = useState({})
    const [stationForUpdate, setStationForUpdate] = useState({})
    const [navState, setNavState] = useState(0)
    //for authentication
    const { jwt } = useAuth()

    //object  map for mapping
    const routing = [
        { id: 0, title: "logs" },
        { id: 1, title: "sw stations" },
        { id: 2, title: "add log" },
        { id: 3, title: "add sw station" },
        //{ id: 4, title: "update sw log" }
        //{ id: 5, title: "update station" }

    ]
    //gets station data 
    async function getStationLogData() {

        const initialData = await axios.get(`${baseURL}/swlog`, { headers: { "x-access-token": jwt } })
        setSwLogs(initialData.data)

    }
    //gets all station
    async function getSwStations() {
        const initialData = await axios.get(`${baseURL}/shortwave`, { headers: { "x-access-token": jwt } })
        setSwStations(initialData.data)

    }
    useEffect(() => {
        async function setData() {
            await getStationLogData()
            await getSwStations()
            setSplash(false)
        }
        setData()

    }, [jwt, splash])

    //***Functions doing operations as per child***/
    //for sumbitting shortwave log form to server
    async function submitSwLog(station, date, frequency, description, hours, minutes) {
        //console.log("yeah its working")
        try {
            setSplash(true)
            const input = { station, frequency, date, description, hours, minutes }
            const submit = await axios.post(`${baseURL}/swlog`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            // console.log(key.data)

            if (submit.data.status === 200) {
                getStationLogData()
                setNavState(0)
            }
            else {
                console.log("error")
                //alert("Details do not match as per specification")
                throw new Error()
            }
            setSplash(false)
        }
        catch (error) {
            setSplash(false)
            console.log(error)
            alert("Details do not match as per specification")
        }

    }
    //sends updated log to server
    async function updateSwLog(id, station, date, frequency, description, hours, minutes) {
        try {
            setSplash(true)
            console.log("yeah its working")
            const input = { station, frequency, date, description, hours, minutes }
            const submit = await axios.put(`${baseURL}/swlog/${id}`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            console.log(submit.data)

            if (submit.data.status === 200) {
                getStationLogData()
                setNavState(0)
            }
            else {
                console.log("error")
                throw new Error("Some error in form!!! Try Againn")
            }
            setSplash(false)
        }
        catch (error) {
            setSplash(false)
            console.log(error)
            alert(error)
        }


    }

    //for submitting new station to server
    async function submitNewStation(station, description, url, image_url, country, language) {

        try {
            setSplash(true)
            const input = {
                station, description, url, image_url, country, language
            }
            const submit = await axios.post(`${baseURL}/shortwave`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            //console.log(submit.data.status)

            if (submit.data.status === 200) {
                getSwStations()
                setNavState(1)
            }
            setSplash(false)


        }
        catch (error) {
            setSplash(false)
            console.log(error)
            alert("duplicte station or some data is not added")
        }


    }

    // delete a sw log 
    async function deleteLog(id) {
        try {

            setSplash(true)
            const submit = await axios.delete(`${baseURL}/swlog/${id}`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            console.log(submit.data.status)

            if (submit.data.status === 200) {
                getStationLogData()
                setNavState(0)
            }
            setSplash(false)
            throw new Error()

        }
        catch (error) {
            setSplash(false)
            //console.log(error)
            alert("Some error happened while deleting log")
        }


    }
    //for submitting new station to server
    async function submitNewStation(station, description, url, image_url, country, language) {

        try {
            setSplash(true)
            const input = {
                station, description, url, image_url, country, language
            }
            const submit = await axios.post(`${baseURL}/shortwave`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            console.log(submit.data.status)
            setSplash(false)
            if (submit.data.status === 200) {
                getSwStations()
                setNavState(1)
            }

            else {
                throw new Error()
            }

        }
        catch (error) {
            console.log(error)
            alert("duplicte station or some data is not added")
        }


    }

    // edit an stations
    async function updateStation(id, station, description, url, image_url, country, language) {

        try {
            setSplash(true)
            console.log(id)
            const input = {
                station, description, url, image_url, country, language
            }
            console.log(input)
            const submit = await axios.put(`${baseURL}/shortwave/${id}`, { input: input }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            setSplash(false)
            console.log(submit.data.status)

            if (submit.data.status === 200) {
                getSwStations()
                setNavState(1)
            }

            else {
                throw new Error()
            }

        }
        catch (error) {
            console.log(error)
            alert("duplicte station or some data is not added")
            setSplash(false)
        }


    }
    // delete a shortwave station 
    async function deleteStation(id) {
        try {

            setSplash(true)
            const submit = await axios.delete(`${baseURL}/shortwave/${id}`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": jwt
                }
            })
            //console.log(submit.data.status)
            setSplash(false)
            if (submit.data.status === 200) {
                getSwStations()
                setNavState(1)
            }
            else {
                throw new Error()
            }



        }
        catch (error) {
            setSplash(false)
            console.log(error)
            alert("Some error happened while deleting log")
        }


    }

    function setNav(id) {

    }
    //// Non Server Related function

    /*
    * function is used when user clicks update log button in SWLog.js
    * function sets nav state to 4, which renders update form

    */

    function setUpdateLog(id) {
        const log = swLogs.find(log => log._id === id)
        console.log(log)
        setSwLogForUpdate(log)
        setNavState(4)
    }

    /**
     * function is used when a user clicks edit button in station dash
     * @returns it sets nav state to 5, which renders update form
     */
    function setUpdateStation(id) {
        const station = swStations.find(log => log._id === id)
        console.log(station)
        setStationForUpdate(station)
        setNavState(5)
    }


    /// renders page as per click
    function returnNavSubjects() {
        switch (navState) {
            case 0:
                return swLogs.map(sw => <SWLog log={sw} updateLog={setUpdateLog} />)

            case 1:
                return swStations.map(sw => <SwStation key={sw.id} station={sw} setUpdateStation={setUpdateStation} />)
            case 2:
                return <SwLogAddNewLog stations={swStations} submitLogs={submitSwLog} />

            case 3:
                return <SWAddNewStation addStation={submitNewStation} />
            case 4:
                return <SwLogEditForm stations={swStations} updateLog={updateSwLog} log={swLogForUpdate} deleteLog={deleteLog} />
            case 5:
                return <SwEditStation sw={stationForUpdate} updateStation={updateStation} deleteStation={deleteStation} />
        }




    }
    return (<div>
        {
            splash ? <Splash /> :
                <div className="main-div">
                    {/* for side navigation */}
                    <div className="div-card">
                        {routing.map(el => <div className={`${navState === el.id ? "selected" : ""} div-side-nav`} onClick={() => {
                            setNavState(el.id)

                        }}>{el.title}</div>)}
                    </div>
                    <div className="div-card">
                        <h1>{routing.find(r => r.id === navState)?.title}</h1>
                        {returnNavSubjects()}
                    </div>
                    {/* for main display */}


                </div>
        }
        { }

    </div>)
}

export default ShortwaveDash