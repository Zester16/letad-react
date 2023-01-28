/** 
 * displays individual radio station log as to when a station was listened
 * displays logo, station name, frequency, and time of listening
*/
import "./SWLog.css"
import editIcon from "../edit.svg"
import React from "react"
// child for showcasing logs of data
function SWLog(props) {
    const dt = new Date(props.log.date * 1000).toLocaleDateString("en-in")
    return (
        <div className="log-div">
            <div>
                <div className="div-ele">{props.log.frequency} Mhz </div>
                <span className="div-desc">frequency</span>
            </div>
            <div>
                <div className="div-ele"> {props.log.description} </div>
                <span className="div-desc">description</span>
            </div>
            <div>
                <div className="div-ele"> {dt}</div>
                <span className="div-desc">date</span>
            </div>
            <div>
                <div className="div-ele"> {props.log.hours}:{props.log.minutes}</div>
                <span className="div-desc">Time Listened</span>
            </div>
            <div>
                <img src={editIcon} onClick={() => { props.updateLog(props.log._id) }} />
            </div>
        </div>)


}

export default SWLog