import { React } from "react"
import "./RadioShackleIndividualRadio.css"
import Edit from "../edit.svg"
function RadioShackleIndividualRadio(props) {

	function onClickUpdate(id) {
		props.updateStation(id)
	}
	console.log(props.radio.background)

	return (<div>
		<div className={``}>
			<img className={`radio-img ${props.radio.background == "dark" ? "dark-bg" : ""}`} src={props.radio.logo} />

		</div>
		<div>{props.radio.name}</div>
		<div>
			<img src={Edit} onClick={() => onClickUpdate(props.radio._id)} />
		</div>

		<div></div>
	</div>)

}


export default RadioShackleIndividualRadio