import React, { useState } from "react";
import { getRadioShackleSearchStations } from "../../services/connectRadioShackleServices";
import useAuth from "../../hooks/useAuthHook"




export default function RadioShackleRandomSearch() {


	const [search, setSearch] = useState("")
	const [stations, setStations] = useState([{}])
	const { jwt } = useAuth()
	return (<div>
		<h1>Search</h1>
		<div>
			<input value={search} onChange={((evt) => setSearch(evt.target.value))} />
			<button onClick={(evt) => { onClickSearch(evt) }} >Search A Station</button>
			{stations.map((stn) => { return <div>{stn.name}</div> })}
		</div>

	</div>)

	async function onClickSearch(evt) {
		if (search === "" || search === undefined) {
			alert("Kindly Search radiostation")
		}

		const stations = await getRadioShackleSearchStations(jwt, search)
		console.log(stations)
		setStations(stations.message)

	}

}