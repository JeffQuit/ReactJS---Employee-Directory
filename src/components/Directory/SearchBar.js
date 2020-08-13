import React from 'react';
import './Directory.css';

export default function SearchBar(props) {
	return (
		<form className="Search-Bar-Form">
			<div className="Search-Bar-Div">
				<label htmlFor="search">Search Directory:</label>
				<input className="Form-Input" value={props.search} onChange={props.handleInputChange} name="search" type="text" placeholder="Search For An Employee" id="search" />
				<button className="Form-BTN" onClick={props.handleFormSubmit}>
					Search
				</button>
				<button className="Form-BTN FBN-BTN" onClick={props.handleFormSubmit}>
					Filter By First Name
				</button>
			</div>
		</form>
	);
}
