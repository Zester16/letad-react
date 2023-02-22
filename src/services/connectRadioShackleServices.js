
import axios from "axios"
const baseURL = require("../url/baseUrl").baseUrl

/**
 * for getting all radioshackle data
 */

export async function getAllRadioShackleStations(jwt) {

	const data = await axios.get(`${baseURL}/radioshackle`, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"x-access-token": jwt
		}
	})

	return data.data
}
/** checks whether a particular Radioshackle is present in database. 
* If yes then user will have to re-create key and check*/
export async function checkRadioShackleStation(jwt, stationId) {
	const data = await axios.get(`${baseURL}/radioshackle/check?id=${stationId}`, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"x-access-token": jwt
		}
	})

	return data.data.available
}

/**
* function adds a radio station to database by sending data to server 
* if all is good, status code is 200 and function returns true
* if its 400 and function returns false 
 */

export async function addRadioShackleStation(jwt, stationID, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, websiteUrl) {
	try {
		const input = { input: { stationID, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, websiteUrl } }
		const data = await axios.post(`${baseURL}/radioshackle`, input, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"x-access-token": jwt
			}
		})
		const output = data.data
		if (output.status === 200) {
			return true
		}
		throw new Error("some error happened")
	}
	catch (error) {
		console.log(error)
		return false
	}


}