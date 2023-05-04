import { React, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuthHook"
import { getRadioShackleAlertList, getRadioShackleStationCount } from "../../services/connectRadioShackleServices"
import RadioShackleAlert from "./RadioShackleAlert"

/**
 * this is Dashboard for radio shackle which will display 
 * ALERTS
 * LIST OF STATION WITH ISSUES
 * TOTAL RADIO STATIONS
 * TOTAL RADIO SHACKLE RADIO STATIONS 
 * @returns 
 */

function RadioShackleDash() {
	const [alertList, setAlertList] = useState([])
	const [countRSStations, setCountRSStations] = useState()
	const [countAllStations, setCountAllStations] = useState()
	const [countAlert, setCountAlert] = useState()
	const { jwt } = useAuth()

	useEffect(() => {
		async function initFunction() {
			await getStationCount()
			await getAlertList()

		}
		initFunction()

	}, [jwt])

	async function getStationCount() {
		const stationCount = await getRadioShackleStationCount(jwt)
		if (stationCount !== null) {
			console.log("station-count", stationCount)
			setCountAllStations(stationCount.message)
		}
	}
	async function getAlertList() {
		const alertList = await getRadioShackleAlertList(jwt)
		if (alertList !== null) {
			console.log("station-count", alertList)
			setCountAlert(alertList.message.length)
			setAlertList(alertList.message)

		}
	}
	return (<div>

		<div>
			<div>
				{countAllStations}
				<div>
					All Stations
				</div>
			</div>
			<div>
				{countAlert}
				<div>
					Stations with Issues
				</div>
			</div>

		</div>
		<div>
			<div>
				<table >
					<tr>
						<th>Logo</th>
						<th>Station Name</th>
						<th>Stream</th>
						<th>Image</th>
						<th>Now Playing</th>
						<th>expand</th>

					</tr>
					{alertList.map(alert => <RadioShackleAlert issue={alert} />)}
				</table>

			</div>
		</div>
	</div>)

}

export default RadioShackleDash