import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavVertical(){
	return(
		<div className="NavVertical">
			<NavLink href="" className="cel-border title"> <span className="t">Jk</span><span className="noneInvie">zasori</span></NavLink>
			<div className="content-title ">
				<NavLink href="" className="Dash">
					<span className="fa fa-space-shuttle icon text-left"> </span> <span className="noneInvie">Dashboard</span>
				</NavLink>
				<h3 className="movil-center"> UI <span className="noneInvie">Content</span> </h3>
			</div>
			<Nav vertical>
				<NavItem>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-wrench icon"> </span> <span className="noneInvie">Tools</span></NavLink></div>
					<div className="links"><NavLink href="" className="cel-border "><span className="fa fa-list-ul icon"> </span><span className="noneInvie">Categories</span></NavLink></div>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-user icon"> </span><span className="noneInvie">Users</span></NavLink></div>
					<div className="links"><NavLink href="#" className="cel-border "><span className="fa fa-image icon"> </span><span className="noneInvie">Results</span></NavLink></div>
				</NavItem>
			</Nav>
		</div>
		)
}

export default NavVertical;