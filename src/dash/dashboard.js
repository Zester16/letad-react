import { React } from "react"
import "../card.css"
import radio from "../radio.svg"
import radioshackle from "../radioshackle.svg"
import { useNavigate } from "react-router-dom"
/**
 * This is primary page which displays dashboard
 */
function Dashboard() {

	const navigate = useNavigate()
	const navToRadioshackle = () => { navigate("/radioshackle") }
	const navToSWLog = () => { navigate("/shortwave") }

	return (<div className="main-div">
		<div className="div-card" onClick={navToRadioshackle}>
			<img src={radioshackle} />
			<p>Radioshackle</p>
		</div>
		<div className="div-card" onClick={navToSWLog}>
			<img src={radio} />
			<p>Shortwave</p>
		</div>
	</div>)

}


export default Dashboard