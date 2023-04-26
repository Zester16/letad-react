import { React } from "react"
import "./RadioShackleAlert.css"
import "./RadioShackleIndividualRadio.css"
import setRadioImageBackground from "../../utils/commonCssFuntions"

export default function RadioShackleAlert(props) {

	function setColor(status) {
		return status ? "green-circle" : "red-circle"
	}

	return (

		<tr>
			<td>
				{props.issue.radioshackleId.name}
			</td>
			<td><img src={props.issue.radioshackleId.logo} class={`radio-img ${setRadioImageBackground(props.issue.radioshackleId.background)}`} alt="logo" /></td>

			<td><div className={setColor(props.issue.url)}></div></td>
			<td><div className={setColor(props.issue.logo)}></div></td>
			<td><div className={setColor(props.issue.stream)}></div></td>

		</tr>

	)

}