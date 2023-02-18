import { React } from "react"
import { Outlet, Routes, Route, useNavigate, } from "react-router-dom"
import AddRadioshackleStation from "./AddRsStation"
import "../card.css"
/**
 * 
 * @returns this is radio shackle route, where it displays around 50-100 radio stations
 * generates radioshackle json file
 * gives alerts when there a breakdown in radioshackle station
 * pops out a radio station detail
 */
export default function RadioShackle() {

	const navigationPath = [
		{ id: 0, title: "all stations" },
		{ id: 1, title: "add station" },
		{ id: 2, title: "search a station" },
		{ id: 3, title: "add sw station" },
	]
	const navigate = useNavigate()


	function sideNavigation(id) {
		console.log(id)
		if (id === 0) {
			navigate("stations")
		}
		else if (id === 1) {
			navigate("add")
		}

	}

	return (
		<div className="g-main-div-vertical">
			<div>ALERTS</div>
			<div className="g-main-div">
				<div className="g-div-card g-side-nav">
					{navigationPath.map(ele => <div key={ele.id} onClick={() => sideNavigation(ele.id)}>{ele.title}</div>)}
				</div>
				<div className="g-div-card">
					<Outlet />
				</div>
			</div>

		</div >)


}