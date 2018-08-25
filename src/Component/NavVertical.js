import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavVertical(){
	return(
		<div className="NavVertical">
			<p>Nav Vertical</p>
			<Nav vertical>
				<NavItem>
					<NavLink href="">UNo</NavLink>
					<NavLink href="#">Dos</NavLink>
				</NavItem>
			</Nav>
		</div>
		)
}

export default NavVertical;