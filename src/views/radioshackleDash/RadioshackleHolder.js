import { React, useState, useEffect } from "react"
import { Outlet, Routes, Route, useNavigate, } from "react-router-dom"
import { useParams, useLocation } from "react-router-dom"
import "../../card.css"
/**
 * 
 * @returns this is radio shackle route, where it displays around 50-100 radio stations
 * generates radioshackle json file
 * gives alerts when there a breakdown in radioshackle station
 * pops out a radio station detail
 */
export default function RadioShackleHolder(props) {
	const location = useLocation()
	const pathname = useLocation().pathname
	//console.log(location)
	const navigationPath = [
		{ id: 0, path: "/radioshackle/dash", title: "Dashboard" },
		{ id: 1, path: "/radioshackle/stations", title: "all stations" },
		{ id: 2, path: "/radioshackle/add", title: "add station" },
		{ id: 3, path: "", title: "search a station" },
		{ id: 4, path: "/radioshackle/check-a-station", title: "check a station" },
		{ id: 5, path: "/radioshackle/download-station", title: "Download Radioshackle Stations" },
	]

	const navigate = useNavigate()
	const [navState, setNavState] = useState(0)
	useEffect(() => {
		sideNavigation(navState)
	}, [])

	function sideNavigation(id) {
		setNavState(id)
		if (id === 0) {
			navigate("dash")
		}
		if (id === 1) {
			navigate("stations")
		}
		else if (id === 2) {
			navigate("add")
		}
		else if (id === 4) {
			navigate("check-a-station")
		}
		else if (id === 5) {
			navigate("download-station")
		}

	}


	return (
		<div className="g-main-div-vertical">
			<div>ALERTS</div>
			<div className="g-main-div">
				<div className="g-div-card g-side-nav">
					{navigationPath.map(ele => <div className={`${pathname === ele.path ? "selected" : ""} div-side-nav pointer`} key={ele.id} onClick={() => sideNavigation(ele.id)}>{ele.title}</div>)}
				</div>
				<div className="g-div-card">
					<Outlet />
				</div>
			</div>

		</div >)


}