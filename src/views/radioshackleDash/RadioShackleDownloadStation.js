import { React, useState, useEffect } from "react"
import useAuth from "../../hooks/useAuthHook"
import { downloadRadioShackleStations } from "../../services/connectRadioShackleServices"

/**
 * Page for downloading radioshackle station list
 * @returns 
 */
export default function RadioShackleDownloadStation() {
	const { jwt } = useAuth()
	const [file, setFile] = useState({})

	useEffect(() => {
		initDownload()
	}, [])

	async function initDownload() {
		const data = await downloadRadioShackleStations(jwt)
		setFile(data)

	}

	return (<div>


		<a
			href={`data:text/json;charset=utf-8,${encodeURIComponent(
				JSON.stringify(file, null, "\t")
			)}`}
			download="radioshackle.json"
		>
			{`Download Json`}
		</a></div>)

}