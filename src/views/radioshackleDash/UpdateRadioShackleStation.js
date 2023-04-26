//div variable
import { React, useState } from "react"
import useAuth from "../../hooks/useAuthHook"
import Select from "react-select"
import deleteIcon from "../../assets/images/delete.svg"
import closeIcon from "../../assets/images/close.svg"
import { updateRadioShackleStation, deleteRadioshackleStation } from "../../services/connectRadioShackleServices"

function UpdateRSStation(props) {
	const [id, setId] = useState(props.radio._id)
	const [stationId, setStationId] = useState(props.radio.stationID)
	const [name, setName] = useState(props.radio.name)
	const [country, setCountry] = useState(props.radio.country)
	const [background, setBackground] = useState(props.radio.background)
	const [fav, setFav] = useState(props.radio.fav.toString())
	const [url, setUrl] = useState(props.radio.url)
	const [logo, setLogo] = useState(props.radio.logo)
	const [stream, setStream] = useState(props.radio.stream)
	const [streamType, setStreamType] = useState(props.radio.streamType.toString())
	const [radioshackle, setRadioShackle] = useState(props.radio.radioshackle.toString())
	const [streamFormat, setStreamFormat] = useState(props.radio.streamFormat)
	const [stationUrl, setStationUrl] = useState(props.radio.websiteUrl)



	//state for handeling delete button
	const [deleteLog, setDeleteLog] = useState(false)
	//const navigate = useNavigate()


	const { jwt } = useAuth()

	const radioshackleBackground = [{
		value: "white",
		label: "white"
	},
	{ value: "dark", label: "dark" },
	{ value: "virgin", label: "virgin" },
	{ value: "classic", label: "classic" },
	]
	const defaultBackground = radioshackleBackground.find(bg => bg.value == background)
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
	const defaultRadioshackleStreamFormat = radioshackleStreamFormat.find(fmt => fmt.value == streamFormat)
	//)
	//variables for select form
	function selectDropdown(e) {
		setBackground(e.value)
	}
	function selectStreamTypeDropdown(e) {
		setStreamFormat(e.value)
	}

	// forupdating  a radioshackle station
	async function updateRadioshackleStationButton() {
		try {

			if (id != "" && stationId != "" && name != "" && country != "" && background != "" && fav != "" && url != "" && logo != "" && stream != "" && streamType != "" && streamType != "" && radioshackle != "" && streamFormat != "" && stationUrl != "") {
				const status = await updateRadioShackleStation(jwt, id, stationId, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, stationUrl)
				console.log(status)
				if (status) {
					//navigate("/radioshackle/stations")
					props.postUpdate()
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

	async function deleteStation(id) {
		try {

			const response = await deleteRadioshackleStation(jwt, id)
			if (response) {
				props.postDelete()
			}
			else {

				throw new Error("some error happeend. station was not deleted")
			}
		}
		catch (error) {
			alert("some error happened! station was not deleted")
			console.log(error)
		}
	}
	const deleteStationForm = <div>
		<h1>Are You sure you want to delete Log?</h1>
		<button onClick={() => deleteStation(props.radio._id)}>Delete</button>
		<button onClick={() => setDeleteLog(false)}>Cancel</button>
	</div>
	const updateStationForm = <div>
		<div className="edit-form-header">
			<h1>Edit Radioshackle Station</h1>
			<img src={closeIcon} onClick={() => props.closeButton()} />
			<img src={deleteIcon} className="delete-icon" onClick={() => setDeleteLog(true)} />
		</div>
		<div>
			<label>Station ID</label>
			<input id="station_id" type="text" value={stationId} onChange={(evt) => setStationId(evt.target.value)} />

		</div>
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
			<Select defaultValue={defaultBackground} options={radioshackleBackground} onChange={selectDropdown} required />
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
			<Select defaultValue={defaultRadioshackleStreamFormat} options={radioshackleStreamFormat} onChange={selectStreamTypeDropdown} required />
		</div>
		<button onClick={updateRadioshackleStationButton}>update Radiostation to Radioshackle</button>

	</div>


	return (<div>

		{deleteLog ? deleteStationForm : updateStationForm}



	</div>)

}

export default UpdateRSStation