import React, { useState, useEffect } from "react";
import { getRadioShackleSearchStations } from "../../services/connectRadioShackleServices";
import useAuth from "../../hooks/useAuthHook"
import ShowAllStations from "./ShowAllStations";




export default function RadioShackleRandomSearch() {


	const [search, setSearch] = useState("")
	const [stations, setStations] = useState([])
	const [load, setLoad] = useState(false)
	const { jwt } = useAuth()
	useEffect(() => {
	}, [jwt])
	return (<div>
		<h1>Search</h1>
		<div>
			<input value={search} onChange={((evt) => setSearch(evt.target.value))} />
			<button onClick={(evt) => { onClickSearch(evt) }} >Search A Station</button>
			{/* {stations.map((stn) => { return <div>{stn.name}</div> })} */}
			{load ? <ShowAllStations inputStations={stations} /> : <></>}
		</div>

	</div>)

	async function onClickSearch(evt) {
		setLoad(false)
		if (search === "" || search === undefined) {
			alert("Kindly Search radiostation")
		}

		const stations = await getRadioShackleSearchStations(jwt, search)
		console.log(stations)
		setStations(stations.message)
		setLoad(true)

	}

}