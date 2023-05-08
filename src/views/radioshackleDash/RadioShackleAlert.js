import { React } from "react"
import "./RadioShackleAlert.css"
import "./RadioShackleIndividualRadio.css"
import setRadioImageBackground from "../../utils/commonCssFuntions"
import expandLogo from "../../assets/images/expand.svg"
import "../../card.css"

export default function RadioShackleAlert(props) {

	function setColor(status) {
		return status ? "green-circle" : "red-circle"
	}

	function expandButtonOnClick() {
		const template = ` url issue: ${props.issue.url_error}
		image issue: ${props.issue.image_error}
		stream issue: ${props.issue.stream_error}
`
		alert(template)
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
			<td><img src={expandLogo} onClick={() => expandButtonOnClick()} /></td>
		</tr>


	)

}