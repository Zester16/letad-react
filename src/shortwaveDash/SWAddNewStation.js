import React, { useState } from "react"



/*
* for adding a specific 

 */


function SWAddNewStation(props) {


	const [station, setStation] = useState("")
	const [description, setDescription] = useState("")
	const [url, setUrl] = useState("")
	const [imgUrl, setImgUrl] = useState("")
	const [country, setCountry] = useState("")
	const [language, setLanguage] = useState("")

	function addSWStation(evt) {
		evt.preventDefault()
		if (station != "" && description != "" && url != "" && imgUrl != "" && country != "" && language != "") {
			props.addStation(station, description, url, imgUrl, country, language)
		}
		else {
			alert("kindly check alll your entries and try again")
		}
	}
	return (
		<div>
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

				<button onClick={addSWStation}> Submit</button>
			</form>
		</div>)
}



export default SWAddNewStation