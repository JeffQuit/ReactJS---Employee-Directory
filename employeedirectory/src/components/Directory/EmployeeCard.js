import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Directory.css';

export default function EmployeeCard(props) {
	return (
		<>
			{props.results.map((result) => (
				<Card className="Employee-Card">
					<Row>
						<Col className="IMG-Card-Col">
							<Image src={result.picture.large} roundedCircle variant="top" className="IMG-Card" />
						</Col>
					</Row>
					<Card.Body>
						<Card.Title>{result.name.first + ' ' + result.name.last}</Card.Title>
						<Card.Text>Info 1: INFOHEREHERE</Card.Text>
						<Card.Text>Info 2: INFOHEREHERE</Card.Text>
						<Card.Text>Info 3: INFOHEREHERE</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button variant="primary">More Inforamtion</Button>
					</Card.Footer>
				</Card>
			))}
		</>
	);
}
