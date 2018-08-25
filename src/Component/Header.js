
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Header extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.notificationToggle = this.notificationToggle.bind(this);
		this.state = {
			dropdownOpen: false,
			notificationOpen: false
		};
	}
	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	notificationToggle() {
		this.setState(prevState => ({
			notificationOpen: !prevState.notificationOpen
		}));
	}
	render() {
		return(
			<div>
				<div className="Header">
		          <div className="row"> 
		          	<div className="col-7">
		          		<div className="content-icon">
			          		<Dropdown isOpen={this.state.notificationOpen} toggle={this.notificationToggle}>
			            		<DropdownToggle
			            			tag="span"
			            			onClick={this.notificationToggle}
			            			data-toggle="dropdown"
			            			className="notification fa fa-bell "
			            			aria-expanded={this.state.notificationOpen}
			            		>
			            			
			            		</DropdownToggle>
			            	
			            	</Dropdown>
		          		</div>
		            	
		            </div>
		            <div className="dropdown-profile col-5">
		            	<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
		            		<DropdownToggle caret color={"red"}>
		            			<span className="fa fa-user-circle fa-2x"></span>
		            		</DropdownToggle>
		            		<DropdownMenu size="sm">
		            			<DropdownItem header>Options</DropdownItem>
		            			<DropdownItem>My Profile</DropdownItem>
		            			<DropdownItem>Notifications</DropdownItem>
		            			<DropdownItem>Settings</DropdownItem>
		            			<DropdownItem divider />
		            			<DropdownItem>Logout</DropdownItem>
		            		</DropdownMenu>
		            	</Dropdown>
		            </div>
		           
		          </div>
	        	</div>
			</div>
		)
	}
	
}

export default Header;