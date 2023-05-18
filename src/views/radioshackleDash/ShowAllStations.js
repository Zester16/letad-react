import { React, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuthHook"
import { getAllRadioShackleStations } from "../../services/connectRadioShackleServices"
import RadioShackleIndividualRadio from "./RadioShackleIndividualRadio"
import UpdateRSStation from "./UpdateRadioShackleStation"
import { useNavigate } from "react-router-dom"
import SplashLoading from "../../generalRoutes/SplashLoading"

function ShowAllStations(props) {

	const [stations, setStations] = useState([])
	const [edit, setEdit] = useState(false)
	const [currentStation, setCurrentStation] = useState({})
	const [splash, setSplash] = useState(false)
	const navigate = useNavigate()

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
	// when close button is clicked on edit form
	function onClickCloseButton() {
		setEdit(false)
	}
	//navigates to page with a particular radio station
	function onClickInfoButton(id) {

		navigate(`${id}`)
	}
	//sets all stations data of radio shackle
	async function setRadioshackleData() {
		setSplash(true)
		try {
			const allStationdata = await getAllRadioShackleStations(jwt)
			setStations(allStationdata)
			setSplash(false)
		}
		catch (error) {
			console.log(error)
			setSplash(false)
		}
	}
	return (splash ? <SplashLoading></SplashLoading> : <div>
		<h1>Radioshackle Station List</h1>
		{edit ? <UpdateRSStation radio={currentStation} postUpdate={postUpdateStation} postDelete={postDeleteStation} closeButton={onClickCloseButton} /> : stations.map(st => <RadioShackleIndividualRadio radio={st} updateStation={onCLickupdateStation} infoStation={onClickInfoButton} />)}

	</div>)

}


export default ShowAllStations