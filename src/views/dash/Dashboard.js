import { React } from "react"
import "../../card.css"
import radio from "../../assets/images/radio.svg"
import kibana from "../../assets/images/log_400.svg"
import radioshackle from "../../assets/images/radioshackle.svg"
import "./Dashboard.css"
import { useNavigate } from "react-router-dom"
/**
 * This is primary page which displays dashboard
 */
function Dashboard() {

	const navigate = useNavigate()
	const navToRadioshackle = () => { navigate("/radioshackle") }
	const navToSWLog = () => { navigate("/shortwave") }
	const navToKibanaLog = () => { navigate("/kibana") }

	return (<div className="main-div">
		<div className="div-card div-card-dash" onClick={navToRadioshackle}>
			<img className="img-dash-logo" src={radioshackle} />
			<p>Radioshackle</p>
		</div>
		<div className="div-card div-card-dash" onClick={navToSWLog}>
			<img src={radio} />
			<p>Shortwave</p>
		</div>
		<div className="div-card div-card-dash" onClick={navToKibanaLog}>
			<img src={kibana} />
			<p>Kibana</p>
		</div>
	</div>)

}


export default Dashboard