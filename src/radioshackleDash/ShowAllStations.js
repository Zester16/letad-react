import { React, useEffect, useState } from "react"
import useAuth from "../hooks/useAuthHook"
import { getAllRadioShackleStations } from "../services/connectRadioShackleServices"
function ShowAllStations(props) {

	const [stations, setStations] = useState([])
	//for authentication
	const { jwt } = useAuth()
	useEffect(() => {
		async function init() {
			setRadioshackleData()
		}
		init()


	}, [jwt])


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
		{stations.map(st => <div>{st.name}</div>)}

	</div>)

}


export default ShowAllStations