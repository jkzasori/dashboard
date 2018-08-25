import React, { Component } from 'react';
import NavVertical from './NavVertical';
import Table from './Table';

class Main extends Component{
render() {
	return(
		<div>
			<NavVertical/>
			<Table />
		</div>
		)
}
}

export default Main;