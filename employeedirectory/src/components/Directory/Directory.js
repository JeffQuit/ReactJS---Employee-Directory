import React, { Component } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import EmployeeCard from './EmployeeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import './Directory.css';

export default class Directory extends Component {
	state = {
		search: '',
		results: [],
	};

	// When this component mounts, it populates the page with the employee data from the API
	componentDidMount() {
		API.populateEmployees()
			.then((res) => this.setState({ results: res.data.results }))
			.catch((err) => console.log(err));
	}

	searchEmployee = () => {
		API.populateEmployees()
			.then((res) => this.setState({ results: res.data.results }))
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchEmployee(this.state.search);
	};

	render() {
		return (
			<div className="Search-Result-Container">
				<SearchBar handleInputChange={this.handleInputChange} searchEmployee={this.searchEmployee} />
				<CardDeck>
					<Container className="Card-Container" fluid>
						<EmployeeCard results={this.state.results} />;
					</Container>
				</CardDeck>
			</div>
		);
	}
}
