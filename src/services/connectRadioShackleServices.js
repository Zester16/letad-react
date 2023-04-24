
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

export async function updateRadioShackleStation(jwt, id, stationID, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, websiteUrl) {
	try {
		const input = { input: { stationID, name, country, background, fav, url, logo, stream, streamType, radioshackle, streamFormat, websiteUrl } }
		const data = await axios.put(`${baseURL}/radioshackle/${id}`, input, {
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
export async function getIndividualRadioStation(jwt, id) {
	try {
		const result = await axios.get(`${baseURL}/radioshackle/${id}`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"x-access-token": jwt
			}
		}
		)
		console.log(result.data)
		if (result.data.status === 200) {
			return result.data.message
		}
		throw new Error("Some error happened. Station was not deleted")
	}
	catch (error) {
		console.log(error)
		return null

	}

}
export async function deleteRadioshackleStation(jwt, id) {
	try {
		const result = await axios.delete(`${baseURL}/radioshackle/${id}`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"x-access-token": jwt
			}
		}
		)
		console.log(result.data)
		if (result.data.status === 200) {
			return true
		}
		throw new Error("Some error happened. Station was not deleted")
	}
	catch (error) {
		console.log(error)
		return false

	}

}
export async function getRadioShackleStationCount(jwt) {

	try {
		const result = await axios.get(`${baseURL}/radioshackle/station-count`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"x-access-token": jwt
			}
		})

		return result.data
	}
	catch (error) {
		console.log(error)
		return null
	}
}
export async function getRadioShackleAlertList(jwt) {

	try {
		const result = await axios.get(`${baseURL}/radioshackle-alert`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"x-access-token": jwt
			}
		})

		return result.data
	}
	catch (error) {
		console.log(error)
		return null
	}
}