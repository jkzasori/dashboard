import React, { Component } from 'react';
import NavVertical from './NavVertical';
import Header from './Header';
import Table from './Table';

class Main extends Component{
render() {
	return(
		<div>
			<div>
				<Header />
				<NavVertical/>
			</div>
			<div className="Container-Dash">
				<Table />
			</div>
			
		</div>
		)
}
}

export default Main;