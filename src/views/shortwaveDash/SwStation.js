import React from "react"
import "./SwStation.css"
import edit from "../../assets/images/edit.svg"
import info from "../../assets/images/info.svg"
/**
 * 
 * this child is for showcasing individual radio shortwave station  
 */
function SwStation(props) {

    return (
        <div className="main-station-div">
            <img className="radio-img" src={props.station.image_url} />
            <span className="station-name">{props.station.station}</span>
            <a href={props.station.url}>Link</a>
            <img src={edit} onClick={() => { props.setUpdateStation(props.station._id) }} />
            <img src={info} />
        </div>)
}

export default SwStation