import { React, useEffect, useState } from "react"
import useAuth from "../hooks/useAuthHook"
import { getAllRadioShackleStations } from "../services/connectRadioShackleServices"
import RadioShackleIndividualRadio from "./RadioShackleIndividualRadio"
import UpdateRSStation from "./UpdateRadioShackleStation"

function ShowAllStations(props) {

	const [stations, setStations] = useState([])
	const [edit, setEdit] = useState(false)
	const [currentStation, setCurrentStation] = useState({})


	//for authentication
	const { jwt } = useAuth()
	useEffect(() => {
		async function init() {
			setRadioshackleData()
		}
		init()


	}, [jwt])

	//sets up update form
	function onCLickupdateStation(id) {

		const station = stations.find(st => st._id === id)
		setCurrentStation(station)
		setEdit(true)
	}
	//to remove on update state
	async function postUpdateStation() {
		await setRadioshackleData()
		setEdit(false)
	}
	// after a radio station is deleted
	async function postDeleteStation() {
		await setRadioshackleData()
		setEdit(false)
	}
	// when close button is clicked
	function onClickCloseButton() {
		setEdit(false)
	}
	//sets all stations data of radio shackle
	async function setRadioshackleData() {
		try {
			const allStationdata = await getAllRadioShackleStations(jwt)
			setStations(allStationdata)
		}
		catch (error) {
			console.log(error)
		}
	}
	return (<div>
		<h1>Radioshackle Station List</h1>
		{edit ? <UpdateRSStation radio={currentStation} postUpdate={postUpdateStation} postDelete={postDeleteStation} closeButton={onClickCloseButton} /> : stations.map(st => <RadioShackleIndividualRadio radio={st} updateStation={onCLickupdateStation} />)}

	</div>)

}


export default ShowAllStations