import React from 'react';
import { Table } from 'reactstrap';

function TableF(){
	return(
		<div className="bg-success">
			<Table dark bordered>
				<thead>
					<tr>
						<th>
							#
						</th>
						<th>
							First Name
						</th>
						<th>
							Last Name
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							1
						</td>
						<td>
							José
						</td>
						<td>
							Támara
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
		)
}
export default TableF;