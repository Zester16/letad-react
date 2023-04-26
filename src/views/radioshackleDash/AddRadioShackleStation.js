import { React, useState } from "react"
import useAuth from "../hooks/useAuthHook"
import Select from "react-select"
import { checkRadioShackleStation, addRadioShackleStation } from "../services/connectRadioShackleServices"
import "./AddRadioShackleStation.css"
import { useNavigate } from "react-router-dom"


function AddRadioshackleStation(props) {

	const [stationPresent, setStationPresent] = useState(false)
	const [stationId, setStationId] = useState("")
	const [name, setName] = useState("")
	const [country, setCountry] = useState("")
	const [background, setBackground] = useState("")
	const [fav, setFav] = useState("")
	const [url, setUrl] = useState("")
	const [logo, setLogo] = useState("")
	const [stream, setStream] = useState("")
	const [streamType, setStreamType] = useState("")
	const [radioshackle, setRadioShackle] = useState("")
	const [streamFormat, setStreamFormat] = useState("")
	const [stationUrl, setStationUrl] = useState("")

	const navigate = useNavigate()


	const { jwt } = useAuth()

	const radioshackleBackground = [{
		value: "white",
		label: "white"
	},
	{ value: "dark", label: "dark" },
	{ value: "virgin", label: "virgin" },
	{ value: "classic", label: "classic" },
	]
	const radioshackleStreamFormat = [
		{
			value: "xml",
			label: "xml"
		},
		{
			value: "json",
			label: "json"
		},
		{
			value: "websocket",
			label: "websocket"
		},
	]
	//)
	//select form
	function selectDropdown(e) {
		setBackground(e.value)
	}
	function selectStreamTypeDropdown(e) {
		setStreamFormat(e.value)
	}

	// for checking radio station
	async function checkStationId(evt) {
		evt.preventDefault()
		try {
			if (stationId === "") { throw new Error("Station ID is EMPTY") }

			const result = await checkRadioShackleStation(jwt, stationId)
			if (result) {

				alert("your station id is taken!! Kindly try again")
				setStationPresent(false)
			}
			else {
				setStationPresent(true)
			}
		}
		catch (error) {
			console.log(error)
			alert("some  error happened or ID is empty")
			setStationPresent(false)
		}
	}
	// for adding a radio station
	async function addRadioshackleStationButton() {
		try {

			if (stationId != "" && name != "" && country != "" && background != "" && fav != "" && url != "" && logo != "" && stream != "" && streamType != "" && streamType != "" && radioshackle != "" && streamFormat != "" && stationUrl != "") {
				const status = await addRadioShackleStation(jwt, stationId, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, stationUrl)
				console.log(status)
				if (status) {
					navigate("/radioshackle/stations")
				}
				else {
					throw new Error("data is not as per standards")
				}

			}
			else {
				alert("Data is not filled as requested")
			}

		}
		catch (error) {
			console.log(error)
			alert(error)
		}

	}

	const fullForm = stationPresent ? <div>
		<div className="form-div-sep">
			<label>will this radio station part of radio shackle??</label>
			<div>
				<label htmlFor="fav_true">Yes</label>
				<input required type="radio" label="true" value="true" id="fav_true" checked={radioshackle === "true"} onChange={(evt) => setRadioShackle(evt.target.value)} />

			</div>
			<div>
				<label htmlFor="fav_true">No</label>
				<input required id="fav_false" type="radio" label="false" value="false" checked={radioshackle === "false"} onChange={(evt) => setRadioShackle(evt.target.value)} />

			</div>
		</div>
		<div className="form-div-sep">
			<label>Radio Station Name</label>
			<input required value={name} onChange={(evt) => setName(evt.target.value)} />
		</div>
		<div className="form-div-sep">
			<label>country</label>
			<input required value={country} onChange={(evt) => setCountry(evt.target.value)} />
		</div>
		<div className="form-div-sep">
			<label>Radio Shackles Background Color</label>
			<Select options={radioshackleBackground} onChange={selectDropdown} required />
		</div>
		<div className="form-div-sep">
			<label>is this radio station a fav of radio shackle?</label>
			<div>
				<label htmlFor="fav_true">True</label>
				<input required type="radio" label="true" value="true" id="fav_true" checked={fav === "true"} onChange={(evt) => setFav(evt.target.value)} />

			</div>
			<div>
				<label htmlFor="fav_true">False</label>
				<input required id="fav_false" type="radio" label="false" value="false" checked={fav === "false"} onChange={(evt) => setFav(evt.target.value)} />

			</div>
		</div>
		<div className="form-div-sep">
			<label>Radio streaming URL</label>
			<input type="url" required value={url} onChange={((evt) => setUrl(evt.target.value))} />
		</div>

		<div className="form-div-sep">
			<label>Radio Station Logo URL</label>
			<input type="url" required value={logo} onChange={((evt) => setLogo(evt.target.value))} />
		</div>
		<div className="form-div-sep">
			<label>Radio Station website URL</label>
			<input type="url" required value={stationUrl} onChange={((evt) => setStationUrl(evt.target.value))} />
		</div>
		<div className="form-div-sep">
			<label>whats now playing stream URL</label>
			<input type="url" required value={stream} onChange={((evt) => setStream(evt.target.value))} />
		</div>
		<div className="form-div-sep">
			<label>does now playing field has cors policy?</label>
			<div>
				<label htmlFor="fav_true">True</label>
				<input required type="radio" label="true" value="true" id="fav_true" checked={streamType === "true"} onChange={(evt) => setStreamType(evt.target.value)} />

			</div>
			<div>
				<label htmlFor="fav_true">False</label>
				<input required id="fav_false" type="radio" label="false" value="false" checked={streamType === "false"} onChange={(evt) => setStreamType(evt.target.value)} />

			</div>
		</div>
		<div className="form-div-sep">
			<label>Select the streaming input type</label>
			<Select options={radioshackleStreamFormat} onChange={selectStreamTypeDropdown} required />
		</div>
		<button onClick={addRadioshackleStationButton}>Add Radiostation to Radioshackle</button>

	</div > : <div>Check Station Key first before adding further details </div>


	return (<div>
		<h1>Add Radioshackle Station</h1>
		<div>
			<label></label>
			<input id="station_id" type="text" value={stationId} onChange={(evt) => setStationId(evt.target.value)} />
			<button onClick={checkStationId}>Check Station id</button>
		</div>

		{fullForm}

	</div>)

}


export default AddRadioshackleStation