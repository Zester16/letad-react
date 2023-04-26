import { React, useState, useRef } from "react"


/**
 * This Front end is for rendering form with web player to play radio station
 * @param {*} props 
 */
function CheckAStation(props) {

	const [station, setStation] = useState("")
	const [inputStation, setInputStation] = useState("")
	const radioPlayer = useRef()

	async function playStation() {
		//const audio = document.getElementById("radio-player")
		//audio.src = "https://edge2.audioxi.com/CLASSIC"
		await setInputStation(station)
		radioPlayer.current.load(station)
		radioPlayer.current.play()
	}



	return (
		<div>
			<h1>Check Radio Station</h1>
			<div>
				<input input={station} onChange={(evt) => setStation(evt.target.value)} />
				<button onClick={() => { playStation() }}>Check</button>
				<button onClick={() => { radioPlayer.current.pause() }}>pause</button>
				<div>
					<audio src={inputStation} controls ref={radioPlayer} />
				</div>
				{station}
			</div>


		</div>)
}


export default CheckAStation