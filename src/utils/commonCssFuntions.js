/**
 * 
 * @param {*} background 
 * @returns background image color as present in RadioSHackleIndividualRadio.css
 * if logo of radioshation is white, it will set background as black
 */
export default function setRadioImageBackground(background) {
	return ` ${(background == "dark" || background == "test-dark") ? "dark-bg" : ""}`

}