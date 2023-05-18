import { React, useState, useEffect } from "react"
import useAuth from "../../hooks/useAuthHook"
import { downloadRadioShackleStations } from "../../services/connectRadioShackleServices"
import SplashLoading from "../../generalRoutes/SplashLoading"

/**
 * Page for downloading radioshackle station list
 * @returns 
 */
export default function RadioShackleDownloadStation() {
	const { jwt } = useAuth()
	const [file, setFile] = useState({})
	const [splash, setSplash] = useState(false)

	useEffect(() => {
		initDownload()
	}, [])

	async function initDownload() {
		setSplash(true)
		const data = await downloadRadioShackleStations(jwt)
		if (data != null) {
			setFile(data)
			setSplash(false)
		}



	}

	return (<div>
		{splash ? <SplashLoading></SplashLoading> :

			<a
				href={`data:text/json;charset=utf-8,${encodeURIComponent(
					JSON.stringify(file, null, "\t")
				)}`}
				download="radioshackle.json"
			>
				{`Download Json`}
			</a>}</div>)

}