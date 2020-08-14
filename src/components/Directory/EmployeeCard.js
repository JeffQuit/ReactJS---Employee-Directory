import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Directory.css';

export default function EmployeeCard(props) {
	return (
		<>
			{props.filteredResults.map((result) => (
				<Card className="Employee-Card" key={result.login.uuid}>
					<Row>
						<Col className="IMG-Card-Col">
							<Image src={result.picture.large} roundedCircle variant="top" className="IMG-Card" />
						</Col>
					</Row>
					<Card.Body>
						<Card.Title>{result.name.first + ' ' + result.name.last}</Card.Title>
						<Card.Text className="Card-Text">
							<b>Age: </b>
							{result.dob.age}
						</Card.Text>
						<Card.Text className="Card-Text">
							<b>Country: </b>
							{result.location.country}
						</Card.Text>
						<Card.Text className="Card-Text">
							<b>City: </b>
							{result.location.city}
						</Card.Text>
						<Card.Text className="Card-Text">
							<b>Phone: </b>
							{result.phone}
						</Card.Text>
						<Card.Text className="Card-Text">
							<b>Email: </b>
							{result.email}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button className="Card-BTN" variant="primary">
							Hire
						</Button>
						<Button className="Card-BTN" variant="primary">
							Reject
						</Button>
					</Card.Footer>
				</Card>
			))}
		</>
	);
}
