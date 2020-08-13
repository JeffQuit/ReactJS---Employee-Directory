import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo1.png';

function NavbarBTS() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img src={logo} style={{ height: 30 }} alt="Weilan Yutani" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Directory</Nav.Link>
						<NavDropdown title="Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Exploration Missions</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Active Colonies</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Space Construction</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Skunkworks</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.5">Asteroid Mining</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Profile</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Sign-Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavbarBTS;
