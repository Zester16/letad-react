import { React, useEffect, useState } from "react"
import "../../card.css"
import useAuth from "../../hooks/useAuthHook"
import alertIcon from "../../assets/images/notification_400.svg"
import infoIcon from "../../assets/images/info.svg"
import { getTotalKibanaCount, getKibanaTodaysLog } from "../../services/connectKibanaService"
import { useNavigate, Outlet } from "react-router-dom"
import KibanaIndividualLog from "./KibanaIndividualLog"
/**
 * 
 * @returns Dashboard for kibana log to see all application issues
 */

function KibanaDash() {
	const navigate = useNavigate()
	const [alertCount, setAlertCount] = useState(0)
	const [kibanaLogs, setKibanaLogs] = useState([])
	const [loading, setLoading] = useState(false)
	const [infoPage, setInfoPage] = useState(false)
	const [infoLog, setInfoLog] = useState({})
	const { jwt } = useAuth()
	useEffect(() => {

		async function setInit() {
			setLoading(true)
			const getAlertCount = await getTotalKibanaCount(jwt)
			const getTodaysErrors = await getKibanaTodaysLog(jwt)
			setAlertCount(getAlertCount.message)
			setKibanaLogs(getTodaysErrors.message)
			setLoading(false)
		}
		setInit()
	}, [])
	function moreInfoButton(data) {

		setInfoLog(data)
		setInfoPage(true)
	}

	function onClickBack() {
		setInfoPage(false)
	}

	const table = <div>
		<table className="g-div-card">
			<tr>
				<th>Date</th>
				<th>Microservice </th>
				<th>Function</th>
				<th><img src={infoIcon} /></th>

			</tr>
			{kibanaLogs.map(log => <tr><td>{log.createdAt}</td><td>Sabencos</td><td>{log.functionName}</td><td><img src={infoIcon} onClick={() => moreInfoButton(log)} /></td></tr>)}
		</table>
	</div>
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
		{infoPage ? <KibanaIndividualLog infoLog={infoLog} onClickBack={onClickBack} /> : table}



	</div >)

}


export default KibanaDash