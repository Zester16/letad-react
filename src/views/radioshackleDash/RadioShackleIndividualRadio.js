import { React } from "react"
import "./RadioShackleIndividualRadio.css"
import Edit from "../../assets/images/edit.svg"
import Info from "../../assets/images/info.svg"
import setRadioImageBackground from "../../utils/commonCssFuntions"
function RadioShackleIndividualRadio(props) {

	function onClickUpdate(id) {
		props.updateStation(id)
	}

	function onClickInfo(id) {
		props.infoStation(id)
	}
	console.log(props.radio.background)

	return (<div className="main-div">
		<div className={``}>
			<img className={`radio-img ${setRadioImageBackground(props.radio.background)}`} src={props.radio.logo} />

		</div>
		<div className="station-name">{props.radio.name}</div>
		<div >
			<img src={Edit} className="button-div" onClick={() => onClickUpdate(props.radio._id)} />
			<img src={Info} className="button-div" onClick={() => onClickInfo(props.radio._id)} />
		</div>

		<div></div>
	</div>)

}


export default RadioShackleIndividualRadio