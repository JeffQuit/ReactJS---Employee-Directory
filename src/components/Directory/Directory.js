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
		filteredResults: [],
	};

	// When this component mounts, it populates the page with the employee data from the API
	componentDidMount() {
		API.populateEmployees()
			.then((res) => this.setState({ results: res.data.results, filteredResults: res.data.results }))
			.catch((err) => console.log(err));
	}

	handleInputChange = (event) => {
		const value = event.target.value;
		const resultsArr = this.state.results;
		//Filtering the list to populate the new FilteredResults Array with names from the API that match what is being put in for the first name and last name using the OR operator
		const searchedEmployeeList = resultsArr.filter((eName) => eName.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || eName.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1);
		this.setState({
			filteredResults: searchedEmployeeList,
		});
	};

	handleOrderByAgeDesc = (e) => {
		e.preventDefault();
		//Orders age by descending order
		const unSortedArray = this.state.filteredResults;
		const sortedArray = unSortedArray.sort(function (a, b) {
			return b.dob.age - a.dob.age;
		});
		this.setState({
			filteredResults: sortedArray,
		});
	};

	handleOrderByAgeAsc = (e) => {
		e.preventDefault();
		//Orders age by descending order
		const unSortedArray = this.state.filteredResults;
		const sortedArray = unSortedArray.sort(function (a, b) {
			return a.dob.age - b.dob.age;
		});
		this.setState({
			filteredResults: sortedArray,
		});
	};

	render() {
		return (
			<div className="Search-Result-Container">
				<SearchBar handleInputChange={this.handleInputChange} searchEmployee={this.searchEmployee} handleOrderByAgeDesc={this.handleOrderByAgeDesc} handleOrderByAgeAsc={this.handleOrderByAgeAsc} />
				<CardDeck>
					<Container className="Card-Container" fluid>
						<EmployeeCard filteredResults={this.state.filteredResults} />;
					</Container>
				</CardDeck>
			</div>
		);
	}
}
