import React, { useState } from "react"
import deleteIcon from "../delete.svg"
import "./EditForm.css"

/*
* for editing  a shortwave station 

 */


function SwEditStation(props) {
	const [id, setId] = useState(props.sw._id)
	const [station, setStation] = useState(props.sw.station)
	const [description, setDescription] = useState(props.sw.description)
	const [url, setUrl] = useState(props.sw.url)
	const [imgUrl, setImgUrl] = useState(props.sw.image_url)
	const [country, setCountry] = useState(props.sw.country)
	const [language, setLanguage] = useState(props.sw.language)
	const [deleteStation, setDeleteSTation] = useState(false)

	function editSwStation(evt) {
		evt.preventDefault()
		if (id != "" && station != "" && description != "" && url != "" && imgUrl != "" && country != "" && language != "") {
			props.updateStation(id, station, description, url, imgUrl, country, language)
		}
		else {
			alert("kindly check alll your entries and try again")
		}
	}

	//div variable
	const deleteStationForm = <div>
		<h1>Are You sure you want to delete Log?</h1>
		<button onClick={() => props.deleteStation(id)}>Delete</button>
		<button onClick={() => setDeleteSTation(false)}>Cancel</button>
	</div>
	//sets form 
	const form = <div >
		<div className="edit-form-header">
			<h1>Edit Shortwave Station</h1>
			<img src={deleteIcon} className="delete-icon" onClick={() => setDeleteSTation(true)} />
		</div>
		<form>
			<div>
				<label for="station">Station Name</label>
				<input id="station" onChange={(evt) => setStation(evt.target.value)} type="text" value={station} require={true} />

			</div>
			<div>
				<label for="description">description</label>
				<input id="description" onChange={(evt) => setDescription(evt.target.value)} value={description} type="text" require={true} />

			</div>
			<div>
				<label for="url"> add schedule Url</label>
				<input id="url" onChange={(evt) => setUrl(evt.target.value)} value={url} type="text" require={true} />

			</div>
			<div>
				<label for="img_url">Add Image URL</label>
				<input id="img_url" onChange={(evt) => setImgUrl(evt.target.value)} value={imgUrl} type="text" require={true} />
			</div>

			<div>
				<label for="country">Country</label>
				<input id="country" onChange={(evt) => setCountry(evt.target.value)} value={country} require={true} />
			</div>
			<div>
				<label for="country">language</label>
				<input id="country" onChange={(evt) => setLanguage(evt.target.value)} value={language} require={true} />
			</div>

			<button onClick={editSwStation}> Submit</button>
		</form>
	</div>
	return (
		<div>
			{deleteStation ? deleteStationForm : form}
		</div>)
}

export default SwEditStation