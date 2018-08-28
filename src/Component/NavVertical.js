import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavVertical(){
	return(
		<div className="NavVertical">
			<NavLink href="" className="cel-border title"> <span className="t">Jk</span>zasori</NavLink>
			<div className="content-title">
				<NavLink href="" className="Dash">
					<span className="fa fa-space-shuttle icon"> </span> Dashboard
				</NavLink>
				<h3> UI Content </h3>
			</div>
			<Nav vertical>
				<NavItem>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-wrench icon"> </span>Tools</NavLink></div>
					<div className="links"><NavLink href="" className="cel-border "><span className="fa fa-list-ul icon"> </span>Categories</NavLink></div>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-user icon"> </span>Users</NavLink></div>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-image icon"> </span>Results</NavLink></div>
				</NavItem>
			</Nav>
		</div>
		)
}

export default NavVertical;