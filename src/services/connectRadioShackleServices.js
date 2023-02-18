
import axios from "axios"
const baseURL = require("../url/baseUrl").baseUrl

/**
 * for getting all radioshackle data
 */

export async function getAllRadioShackleStations(jwt) {
	const production = process.env.NODE_ENV;
	console.log(production)
	const data = await axios.get(`${baseURL}/radioshackle`, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"x-access-token": jwt
		}
	})

	return data.data
}