import { React } from "react"
import close from "../../assets/images/close.svg"

function KibanaIndividualLog(props) {

	function onClickBack() {
		props.onClickBack()
	}

	return (<div>
		<div className="g-div-flex">

			<div className="g-div-card">
				<img src={close} onClick={() => props.onClickBack()} />
				<table>
					<tr>
						<th>
							microservice name
						</th>
						<th>
							function name
						</th>
						<th>
							category name
						</th>
						<th>
							category type
						</th>
						<th>
							category url
						</th>
						<th>
							error
						</th>
						<th>
							Time
						</th>
					</tr>
					<tr>
						<td>
							sabencos
						</td>
						< td>
							{props.infoLog.functionName}
						</td>
						<td>
							{props.infoLog.categoryName}
						</td>
						<td>
							{props.infoLog.categoryType}
						</td>
						<td>
							{props.infoLog.url}
						</td>
						<td>
							{JSON.stringify(props.infoLog.error)}
						</td>
						<td>

							{props.infoLog.createdAt}
						</td>
						<td>

						</td>

					</tr>
				</table>

			</div >
		</div>
	</div>

	)
}


export default KibanaIndividualLog