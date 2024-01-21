import { React, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuthHook"
import { useParams, useNavigate } from "react-router-dom"
import { getIndividualRadioStation } from "../../services/connectRadioShackleServices"
import Flag from 'react-world-flags'
import Close from "../../assets/images/close.svg"
import "./RashIndividualStationInfo.css"
import setRadioImageBackground from "../../utils/commonCssFuntions"
/**
 * Displays individual radio shackle radio station
 * @param {*} props 
 */
function RadioShackleIndividualRadioInfo(props) {

	const { id } = useParams()
	const navigate = useNavigate()
	const [station, setStation] = useState({})
	//for authentication
	const { jwt } = useAuth()
	useEffect(() => {
		function init() {
			setIndividualRadioStation()
		}

		init()


	}, [])

	async function setIndividualRadioStation() {
		const result = await getIndividualRadioStation(jwt, id)
		if (result != null) {
			setStation(result)
		}
		else {
			navigate(-1)
		}
	}
	return (<div className="radio-div">
		<img className={`radio-icon ${setRadioImageBackground(station?.background)}`} src={station?.logo} />
		<div>
			<Flag code={station?.country} height={32} />
			<img src={Close} onClick={() => { navigate(-1) }} />
		</div>

		<table>
			<tr>
				<th>
					Name
				</th>
				<th>
					Description
				</th>
			</tr>
			<tr>
				<td>Station Name</td>
				<td>{station?.name}</td>
			</tr>
			<tr>
				<td>Listen Radio URL</td>
				<td>{station?.url}</td>
			</tr>
			<tr>
				<td>Radio Stream Url</td>
				<td className="description-div">{station?.stream}</td>
			</tr>
			<tr>
				<td>website</td>
				<td><a href={station?.websiteUrl} className="description-div">{station?.websiteUrl}</a></td>
			</tr>
			<tr>
				<td>country</td>
				{station?.country}
			</tr>
			<tr>
				<td>
					RadioShackle Favourite
				</td>
				<td>{String(station?.fav)}</td>
			</tr>
			<tr>
				<td>Need Backend</td>
				<td>{String(station?.streamType)}</td>

			</tr>
			<tr>
				<td>
					now playing format
				</td>
				<td>{station?.streamFormat}</td>
			</tr>
		</table>

	</div>)

}

export default RadioShackleIndividualRadioInfo