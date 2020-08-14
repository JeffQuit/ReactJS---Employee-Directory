import React from 'react';
import './Directory.css';

export default function SearchBar(props) {
	return (
		<form className="Search-Bar-Form">
			<div className="Search-Bar-Div">
				<label htmlFor="search">Search Directory:</label>
				<input className="Form-Input" size="30" value={props.search} onChange={props.handleInputChange} name="search" type="text" placeholder="Search For An Employee" id="search" />

				<button className="Form-BTN FBN-BTN" onClick={props.handleOrderByAgeAsc}>
					Order By Age <i className="fas fa-sort-up"></i>
				</button>

				<button className="Form-BTN FBN-BTN" onClick={props.handleOrderByAgeDesc}>
					Order By Age <i className="fas fa-sort-down"></i>
				</button>
			</div>
		</form>
	);
}
