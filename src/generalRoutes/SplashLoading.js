import React from "react"
import "./SplashLoading.css"
/**THis is used for loading splash doc */

function SplashLoading(props) {

	{ console.log("SPlash Loading") }
	return (<div className="align">
		<div className="lds-roller">
			<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
		</div>
	</div>)
}

export default SplashLoading