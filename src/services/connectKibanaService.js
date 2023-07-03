

import axios from "axios"
const baseURL = require("../url/baseUrl").baseUrl

/**
 * For getting current errors in various applications
 * @param {*} jwt 
 * @returns 
 */

export async function getTotalKibanaCount(jwt) {

	const data = await axios.get(`${baseURL}/kibana-alert/count`, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"x-access-token": jwt
		}

	})

	return data.data
}

export async function getKibanaTodaysLog(jwt) {

	const data = await axios.get(`${baseURL}/kibana-alert/today-data`, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"x-access-token": jwt
		}

	})

	return data.data

}


