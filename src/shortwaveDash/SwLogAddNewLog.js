import React, { useState } from "react"
import Select from "react-select"

function SwLogAddNewLog(props) {


    const [description, setDescription] = useState("")
    const [station, setStation] = useState()
    const [frequency, setFrequency] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [date, setDate] = useState("")

    const selectOptions = props.stations.map(st => ({
        value: st._id,
        label: st.station
    })

    )
    //select form
    function selectDropdown(e) {
        setStation(e.value)
    }

    //submit form
    function submitForm(evt) {
        evt.preventDefault()

        try {
            if (station.value != "" && date != "" && frequency != "" && description != "" && hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                const unixDate = Math.floor(new Date(date).getTime() / 1000)
                props.submitLogs(station, unixDate, frequency, description, hours, minutes)
            }
            else {
                alert("Data is not filled as requested")
            }

        }
        catch (error) {
            alert("some error happened")
            console.log(error)
        }


    }
    return (<div>

        <form>
            <div>
                <label>Select Statioin</label>
                <Select options={selectOptions} onChange={selectDropdown} required />
            </div>
            <div>
                <label for="description">Description</label>
                <input id="description" value={description} onChange={(evt) => setDescription(evt.target.value)} required />
            </div>
            <div>
                <label for="date">Date</label>
                <input id="date" value={date} onChange={(evt) => setDate(evt.target.value)} type={"date"} required />
            </div>

            <div>
                <label for="frequency">Frequency(MHz)</label>
                <input id="frequency" value={frequency} onChange={(evt) => setFrequency(evt.target.value)} required />
            </div>
            <div>
                <label for="hours">Hours(0-24H)</label>
                <input id="hours" value={hours} onChange={evt => setHours(evt.target.value)} required type={"number"} />
            </div>
            <div>
                <label for="minutes">minutes(0-59M)</label>
                <input id="minutes" value={minutes} onChange={evt => setMinutes(evt.target.value)} required type={"number"} />
            </div>
            <button onClick={submitForm}>Submit form</button>



        </form>

    </div>)
}

export default SwLogAddNewLog