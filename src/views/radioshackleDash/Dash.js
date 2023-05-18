import { React, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuthHook"
import { getRadioShackleAlertList, getRadioShackleStationCount } from "../../services/connectRadioShackleServices"
import RadioShackleAlert from "./RadioShackleAlert"
import imageLogo from "../../assets/images/image.svg"
import streamLogo from "../../assets/images/stream.svg"
import musicLogo from "../../assets/images/music.svg"
import expandLogo from "../../assets/images/expand.svg"
import SplashLoading from "../../generalRoutes/SplashLoading"

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
	const [splash, setSplash] = useState(false)
	const { jwt } = useAuth()

	useEffect(() => {
		async function initFunction() {
			setSplash(true)
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
			setSplash(false)
		}
	}
	return (<div>
		{splash ? <SplashLoading></SplashLoading> :
			<><div className="g-div-flex">
				<div className="g-div-card">
					{countAllStations}
					<div>
						All Stations
					</div>
				</div>
				<div className="g-div-card">
					{countAlert}
					<div>
						Stations with Issues
					</div>
				</div>

			</div><div>
					<div>
						<table>
							<tr>
								<th>Station Name</th>
								<th>Logo </th>
								<th><img src={musicLogo} /></th>
								<th><img src={imageLogo} /></th>
								<th><img src={streamLogo} /></th>
								<th><img src={expandLogo} /></th>

							</tr>
							{alertList.map(alert => <RadioShackleAlert issue={alert} />)}
						</table>

					</div>
				</div></>}
	</div>)

}

export default RadioShackleDash