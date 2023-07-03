import { React, useEffect, useState } from "react"
import "../../card.css"
import useAuth from "../../hooks/useAuthHook"
import alertIcon from "../../assets/images/notification_400.svg"
import { getTotalKibanaCount, getKibanaTodaysLog } from "../../services/connectKibanaService"
/**
 * 
 * @returns Dashboard for kibana log to see all application issues
 */

function KibanaDash() {

	const [alertCount, setAlertCount] = useState(0)
	const [kibanaLogs, setKibanaLogs] = useState([])
	const { jwt } = useAuth()
	useEffect(() => {

		async function setInit() {
			const getAlertCount = await getTotalKibanaCount(jwt)
			const getTodaysErrors = await getKibanaTodaysLog(jwt)
			setAlertCount(getAlertCount.message)
			setKibanaLogs(getTodaysErrors.message)
		}
		setInit()

	})

	return (<div>
		<div className="g-div-flex">
			<div className="g-div-card">
				<img src={alertIcon} />
				<div>
					{alertCount}
				</div>

				<div>
					Total Issues
				</div>
			</div>
			<div className="g-div-card">
				<img src={alertIcon} />
				<div>
					{kibanaLogs.length}
				</div>

				<div>
					Todays Issues
				</div>
			</div>
		</div>
		<div className="g-div-flex">
			<table>
				<tr>
					<th>Date</th>
					<th>Microservice </th>
					<th>Function</th>

				</tr>
				{kibanaLogs.map(log => <tr><td>{log.createdAt}</td><td>Sabencos</td><td>{log.functionName}</td></tr>)}
			</table>

		</div>
	</div>)

}


export default KibanaDash