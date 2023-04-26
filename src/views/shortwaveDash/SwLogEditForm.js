import React, { useState } from "react"
import Select from "react-select"
import { useParams } from "react-router-dom"
import deleteIcon from "../../assets/images/delete.svg"
import "./EditForm.css"

function SwLogEditForm(props) {
	// setting pre defined value
	const dateNormal = new Date(props.log.date * 1000)
	let day = dateNormal.getDate()
	let month = dateNormal.getMonth()
	const year = dateNormal.getFullYear()
	if (day < 10) day = "0" + day
	if (month < 10) month = "0" + month
	const initialStaionPre = props.stations.find(st => st._id === props.log.station)
	const initialStation = initialStaionPre ? { value: initialStaionPre._id, label: initialStaionPre.station } : {}
	const [id, setID] = useState(props.log._id)
	const [description, setDescription] = useState(props.log.description)
	const [station, setStation] = useState(props.log.station)
	const [frequency, setFrequency] = useState(props.log.frequency)
	const [hours, setHours] = useState(props.log.hours)
	const [minutes, setMinutes] = useState(props.log.minutes)
	//const [date, setDate] = useState(dateNormal.toLocaleDateString('en-CA'))
	const [date, setDate] = useState(`${year}-${month}-${day}`)

	//state for handeling delete button
	const [deleteLog, setDeleteLog] = useState(false)


	const selectOptions = props.stations.map(st => ({
		value: st._id,
		label: st.station
	}))

	//)
	//select form
	function selectDropdown(e) {
		setStation(e.value)
	}

	//submit form
	function submitForm(evt) {
		evt.preventDefault()

		try {
			if (id != "" && station != "" && date != "" && frequency != "" && description != "" && hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
				const unixDate = Math.floor(new Date(date).getTime() / 1000)
				props.updateLog(id, station, unixDate, frequency, description, hours, minutes)
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
	///*******components for rendering form*************

	// render cancel button
	const deleteLogForm = <div>
		<h1>Are You sure you want to delete Log?</h1>
		<button onClick={() => props.deleteLog(id)}>Delete</button>
		<button onClick={() => setDeleteLog(false)}>Cancel</button>
	</div>
	// for rendering form
	const form = <div>
		<div className="edit-form-header">
			<h1>Edit Log</h1>
			<img src={deleteIcon} className="delete-icon" onClick={() => setDeleteLog(true)} />
		</div>

		<form>

			<div>
				<label>Select Statioin</label>
				<Select defaultValue={initialStation} options={selectOptions} onChange={selectDropdown} required />
			</div>
			<div>
				<label for="description">Description</label>
				<input id="description" value={description} onChange={(evt) => setDescription(evt.target.value)} required />
			</div>
			<div>
				<label for="date">Date</label>
				<input id="date" value={date} onChange={(evt) => setDate(evt.target.value)} type={"date"} defaultValue={dateNormal} required />
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



		</form >
	</div>
	return (<div>
		{deleteLog ? deleteLogForm : form}
	</div >)
}

export default SwLogEditForm